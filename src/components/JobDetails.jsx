import JobData from "./JobData.jsx";
import {useParams} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

let jobData = JobData;


export default function JobDetails(){
    const {jobId} = useParams();

    return(
        
        <div>
            <Header backgroundColor="#244034" color="white" aColor="white"/>
            <div className="jobDetailsWrapper">
                <h1>{jobData[jobId].jobPosition}</h1>
                <p>{jobData[jobId].employmentType}</p>
                <p>{jobData[jobId].location}</p>
                <p>{jobData[jobId].salary}</p>
                <p>{Array.isArray(jobData[jobId].keywords) ? jobData[jobId].keywords.join(', ') : job.keywords}</p>
                <div className="jobInfo">
                    <div className="jobOverview">
                        <h2>Overview</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, qui eum vel quis reiciendis nostrum nihil accusantium. Vero, ipsam? 
                            Rerum, ipsam quos nisi mollitia veniam quae voluptatem fugit fuga delectus?
                        </p>
                    </div>
                    <div className="jobDesc">
                        <h2>Job Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, qui eum vel quis reiciendis nostrum nihil accusantium. Vero, ipsam? 
                            Rerum, ipsam quos nisi mollitia veniam quae voluptatem fugit fuga delectus?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, qui eum vel quis reiciendis nostrum nihil accusantium. Vero, ipsam? 
                            Rerum, ipsam quos nisi mollitia veniam quae voluptatem fugit fuga delectus?
                        </p>
                    </div>
                    <div className="jobResponsiblities">
                        <h2>Responsibilities</h2>
                        <ul>
                            <li>Collaborate daily with a multidisciplinary team of Software Engineers, Researchers, Strategists, and Project Managers.</li>
                            <li>Co-lead ideation sessions, workshops, demos, and presentations with clients on-site</li>
                            <li>Push for and create inclusive, accessible design for all</li>
                            <li>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li>
                            <li>Sketch, wireframe, build IA, motion design, and run usability tests</li>
                            <li>Design pixel perfect responsive UI’s and understand that adopting common interface pattern is better for UX than reinventing the wheel</li>
                            <li>Ensure content strategy and design are perfectly in-sync</li>
                            <li>Give and receive design critique to help constantly refine and push our work</li>
                        </ul>
                    </div>
                    <div className="requiredSkills">
                        <h2>Required Skills:</h2>
                        <ul>
                            <li>You’ve been designing digital products for 2+ years.</li>
                            <li>A portfolio that exemplifies strong visual design and a focus on defining the user experience.</li>
                            <li>You’ve proudly shipped and launched several products.</li>
                            <li>You have some past experience working in an agile environment – Think two-week sprints.</li>
                            <li>Experience effectively presenting and communicating your design decisions to clients & team members</li>
                            <li>Up-to-date knowledge of design software like Figma, Sketch etc.</li>
                        </ul>
                    </div>
                    <div className="benefits">
                        <h2>Benefits:</h2>
                        <ul>
                            <li>We are a remote-first company.</li>
                            <li>100% company-paid health insurance premiums for you & your dependents</li>
                            <li>Vacation stipend</li>
                            <li>Unlimited paid vacation and paid company holidays</li>
                            <li>Monthly wellness/gym stipend</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}