import {
  BrowserRouter,
  Routes, Route, Link
} from 'react-router-dom'
import Notes from './Notes'
import Note from './Note'

const notes = [
  {
    "id": 1,
    "content": "HTML is easy",
    "important": false
  },
  {
    "id": 2,
    "content": "Browser can execute only JavaScript",
    "important": true
  },
  {
    "id": 3,
    "content": "GET and POST are the most important methods of HTTP protocol",
    "important": true
  }
]

const Users =()=>{
  return 2
}

const Home =()=>{
  return 3
}

const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <BrowserRouter>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Routes>
      <Route path="/notes/:id" element={<Note notes={notes} />} />
      <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </BrowserRouter>
  )
}

export default App;