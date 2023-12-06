import Note from './components/Note'
import { useState, useEffect } from "react";
import axios from "axios";



const App = () => {
  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log("hello");
    //1. get data from backend server
    let myAxiosPromise = axios.get("http://localhost:3001/notes");
    myAxiosPromise.then((myResult) => {
      console.log("returned promise");
      console.dir(myResult.data);
      //2. put the data into notes state
      setNotes(myResult.data);
    });

    console.log(myAxiosPromise);
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      // console.log(response);
      setNotes(notes.concat(response.data));
      setNewNote("");
    });



    setNotes(notes.concat(noteObject))
    setNewNote('')
  }


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const updateData = (id) => {
    // 1.update the server (backend)
    let currentNote = notes.find((note) => {
      return note.id === id;
  
      })
    
    let updatedNote = {...currentNote, important: !currentNote.important}
    let putPromise = axios.put(`http://localhost:3001/notes/${id}`, updatedNote)
    
    putPromise.then((result) => {
      console.dir(result)
      let updatedNote = result.data;
      
      // 2.update statee(frontend)
      setNotes(
        notes.map((note) =>(note.id === updatedNote.id ? updatedNote : note))
      )
})
    
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
      {notesToShow.map(note =>
        <Note key={note.id} note={note} updateNote={() => { updateData(note.id) }}  />
      )}
      </ul>
      <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>    
    </div>
  )
}

export default App 