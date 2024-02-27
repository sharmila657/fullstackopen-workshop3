import {
  BrowserRouter,
  Routes, Route, Link
} from 'react-router-dom'

const Notes =()=>{
 return 1
}

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
        <Link style={padding} to="/home">home</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </BrowserRouter>
  )
}

export default App;