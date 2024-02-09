import  ReactDOM  from 'react-dom/client'
import counterReducer from './reducer'
import { createStore } from 'redux'

const store = createStore(counterReducer)

const App = () => {
  const clickButton = (event) => {
    const dispacthType = event.target.name.toUpperCase();
    store.dispatch({
      type: dispacthType
    })
  }

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={(event)=>clickButton(event)} name='good'>good</button>
      <button onClick={(event) => clickButton(event)} name='bad'>bad</button>
      <button onClick={(event)=>clickButton(event)} name='ok'>ok</button>

      <div>good {store.getState().good}</div>
      <div>bad {store.getState().bad}</div>
      <div>ok {store.getState().ok}</div>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))


const renderApp = () => {
  root.render(<App />)
}
renderApp()
store.subscribe(renderApp)

