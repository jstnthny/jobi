import { useState } from 'react'
import '../css/App.css'
import Home from "./components/Home.jsx"
import JobList from "./components/JobList.jsx"
import JobDetails from "./components/JobDetails.jsx"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <div className="App">
     {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/JobList" element={<JobList />}/>
    </Routes>
    </div>  
  )
}

export default App
