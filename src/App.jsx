import React from 'react'
import Daily from './Daily.jsx'
import Categories from './Categories.jsx'

function App() {
  return (
    <>
      <div className="container-fluid py-2 px-3">
        <h2>Daily Quotes</h2>
        <div className="mx-3">
          <Daily />
          <Categories />
        </div>
      </div>
    </>
  )
}

export default App