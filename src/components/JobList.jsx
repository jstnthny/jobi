import React, {useState} from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import JobData from "./JobData.jsx";
import SalarySlider from "./SalarySlider.jsx";
import upArrow from "../assets/images/upArrow.svg";
import downArrow from "../assets/images/downArrow.svg";


let jobData = JobData;



export default function JobList(){
    const [isOpen, setIsOpen] = useState(false);
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(1000000);

    const handleMinSalaryChange = (event) => {
        setMinSalary(event.target.value);
    };

    const handleMaxSalaryChange = (event) => {
        setMaxSalary(event.target.value);
    };


    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [keywordFilter, setKeywordFilter] = useState("");
    const filteredJobsData = jobData.filter(job => {
        return( 
            job.salary >= minSalary && maxSalary <= maxSalary &&
            job.keywords.some(keyword => {
            return keyword.toLowerCase().includes(keywordFilter.toLowerCase());
        }))
    })

    return(

        <div className="jobList">

            <Header backgroundColor="#244034" color="white" aColor="white"/>
            <div className="searchMenubg">
                <div className="searchMenu">
                        <div>
                            <label htmlFor="keywordsTitle">What are you looking for?</label>
                            <input type="text" placeholder="Design, branding" />
                        </div>
                        <div>
                            <label htmlFor="jobCategories">Category</label>
                            <select name="jobCategories" id="">
                                    <option value="">Designer</option>
                            </select>
                        </div>
                        <button>
                            Search
                        </button>
                </div>
            </div>

             

            {/* Job Listings */}


            <div className="listings wrapper">

                            {/* ACCORDION MENU */}
            
                <div className={`accordion ${isOpen ? 'toggled' : ''}`}>
                    <button className="toggle" onClick={toggleAccordion}>
                        <h2>Filter By</h2>
                         <div className="directionIndicator">
                                {isOpen ? <img src={upArrow} /> : <img src={downArrow} />}
                            </div>
                    </button>
                    {isOpen && (
                        <div className="accordionContent">
                            <div className="jobFilterKeyword">
                                <label htmlFor="jobKeyword">Keyword Or Title</label>
                                <input
                                    id="jobKeyord"
                                    type="text"
                                    placeholder="Filter by keyword or Title"
                                    value={keywordFilter}
                                    onChange={(e) => setKeywordFilter(e.target.value)}
                                />
                                <label htmlFor="salarySlider">Salary Slider</label>
                                 <div>
                                <label>Minimum Salary:</label>
                                <input type="range" value={minSalary} onChange={handleMinSalaryChange} />
                                </div>
                                <div>
                                <label>Maximum Salary:</label>
                                <input type="range" value={maxSalary} onChange={handleMaxSalaryChange} />
      </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* <input
                    type="text"
                    placeholder="Filter by keyword"
                    value={keywordFilter}
                    onChange={e => setKeywordFilter(e.target.value)}
                /> */}
                <p className="jobTotal">All <span>{filteredJobsData.length}</span> jobs found</p>
                {filteredJobsData.map((job, index) => (
                    <div className="jobListing" key={index}>
                        <div className="positionAndLogo">
                            <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="47.2022" height="50" fill="black" fill-opacity="0.2"/>
                            </svg>
                            <h4>{job.jobPosition}</h4>
                        </div>
                        <div className="jobDate">
                            <p className="employmentType">{job.employmentType}</p>
                            <p>{job.salary.toLocaleString("en-US", {style: "currency", currency: "CAD"})}/year</p>
                        </div>
                        <div className="jobLocation">
                            <p>{job.location}</p>
                            <p>{Array.isArray(job.keywords) ? job.keywords.join(', ') : job.keywords}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lookingForJobAd wrapper">
                <div>
                    <h4>Most complete job portal.</h4>
                    <p>Signup and start find your job or talents.</p>
                </div>
                <div>
                    <button className="lfj">Looking for a job?</button>
                    <button>Post a job</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}