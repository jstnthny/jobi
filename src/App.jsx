import { useState } from 'react'
import './App.scss'
import Home from "./components/Home.jsx"
import JobList from "./components/JobList.jsx"
import JobDetails from "./components/JobDetails.jsx"
import {Route, Routes} from "react-router-dom"
// import JobData from "./JobData.jsx";

function App() {

  return (
    <div className="App">
     {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/JobList" element={<JobList />}/>
      <Route path="JobDetails/:jobId" element={<JobDetails />}/>
    </Routes>
    </div>  
  )
}

export default App
