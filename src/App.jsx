import { useState } from 'react'
import '../css/App.css'
import Home from "./components/Home.jsx"
import JobList from "./components/JobList.jsx"
import JobDetails from "./components/JobDetails.jsx"

function App() {

  return (
    <div className="App">
     <Home />
     <JobList />
     <JobDetails />
    </div>
  )
}

export default App
