import React from 'react'
import './App.css'

function App({ store }) {
  return (
    <div className="container">
      <main>
        <h1>FSO2022 - Redux Counter</h1>
        <article>
          <h2>Counter: {store.getState()}</h2>
          <div className="grid">
            <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
              Minus -
            </button>
            <button onClick={() => store.dispatch({ type: 'ZERO' })}>
              Zero
            </button>
            <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
              Plus +
            </button>
          </div>
        </article>
      </main>
    </div>
  )
}

export default App
