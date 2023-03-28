import JobData from "./JobData.jsx";
import {useParams} from "react-router-dom";

let jobData = JobData;


export default function JobDetails(){
    const {jobId} = useParams();

    return(
        <div>
            <h1>{jobData[jobId].jobPosition}</h1>
            <p>{jobData[jobId].employmentType}</p>
            <p>{jobData[jobId].location}</p>
            <p>{jobData[jobId].salary}</p>
            <p>{Array.isArray(jobData[jobId].keywords) ? jobData[jobId].keywords.join(', ') : job.keywords}</p>
        </div>
    )
}