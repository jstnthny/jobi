import { useState, useEffect } from 'react'
import './App.scss'
import Home from "./components/Home.jsx"
import JobList from "./components/JobList.jsx"
import JobDetails from "./components/JobDetails.jsx"
import {Route, Routes} from "react-router-dom"
import Error from "./components/Error.jsx"
import {db} from "./firebase-config";
import {collection, getDocs} from 'firebase/firestore'

function App() {

    const [jobs, setJobs] = useState([]);
    const jobsCollectionRef = collection(db, "jobs");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = jobs.slice(firstPostIndex, lastPostIndex)


    useEffect(() => {
        
        const getJobs = async () => {
            const dataj = await getDocs(jobsCollectionRef)
            setJobs(dataj.docs.map((doc) =>({...doc.data(), id: doc.id})))
        }

        getJobs()
    }, [])
    // let jobData = jobs;

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/JobList" element={<JobList jobData={currentPosts} postPerPage={postPerPage} totalJobs={jobs} setCurrentPage={setCurrentPage}/>}/>
      <Route path="/JobDetails/:id" element={jobs.length ? <JobDetails jobData={jobs} /> : <div>""</div>} />
      <Route path="*" element={<Error />} />
    </Routes>
    </div>  
  )
}

export default App
