import React, {useState} from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import upArrow from "../assets/images/upArrow.svg";
import downArrow from "../assets/images/downArrow.svg";
import { Link } from 'react-router-dom';






export default function JobList(props){
    const [isOpen, setIsOpen] = useState(false);
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(1000000);

    console.log(props.jobData)



    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [keywordFilter, setKeywordFilter] = useState("");
    const filteredJobsData = props.jobData.filter(job => {
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
                            </div>
                        </div>
                    )}
                </div>

                <p className="jobTotal">All <span>{filteredJobsData.length}</span> jobs found</p>
                {filteredJobsData.map((job, index) => (
                    <div className="jobListing" key={index}>
                        <div className="positionAndLogo">
                            {/* <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="47.2022" height="50" fill="black" fillOpacity="0.2"/>
                            </svg> */}
                            <img src={job.logo} alt="" />
                             <Link to={`/JobDetails/${job.id}`} key={index}>
                                <h4>{job.jobPosition}</h4>
                            </Link>
                        </div>
                        <div className="jobDate">
                            <p className="employmentType">{job.employmentType}</p>
                            <p>{job.salary.toLocaleString("en-US", {style: "currency", currency: "CAD"})}/year</p>
                        </div>
                        <div className="jobLocation">
                            <p>{job.location}</p>
                            <p>{Array.isArray(job.keywords) ? job.keywords.join(', ') : job.keywords}</p>
                        </div>
                        <div className="jobButtons">
                            <div className="bookmark">
                                <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.4998 18.1501C34.4998 27.5419 26.8886 35.1551 17.4999 35.1551C8.11126 35.1551 0.5 27.5419 0.5 18.1501C0.5 8.7584 8.11126 1.14514 17.4999 1.14514C26.8886 1.14514 34.4998 8.7584 34.4998 18.1501Z" stroke="#D6D6D6"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.3889 9.17383C23.0955 9.17383 24.6482 10.5522 24.6482 12.9535V24.8868C24.6482 25.3876 24.3977 25.8383 23.9764 26.0903C23.5567 26.3431 23.0508 26.3481 22.6263 26.1018L17.8707 23.3377L13.0712 26.1075C12.8638 26.2274 12.6364 26.2881 12.4082 26.2881C12.1728 26.2881 11.9374 26.2233 11.7235 26.0936C11.303 25.8415 11.0525 25.3908 11.0525 24.8909V12.8032C11.0525 10.4964 12.606 9.17383 15.315 9.17383H20.3889ZM20.3889 10.4053H15.315C13.2811 10.4053 12.2494 11.2114 12.2494 12.8032V24.8909C12.2494 24.9681 12.2925 25.0099 12.3284 25.0313C12.3643 25.0543 12.4209 25.0707 12.4864 25.0329L17.5787 22.0939C17.7606 21.9897 17.9832 21.9888 18.1659 22.0947L23.2144 25.0288C23.2806 25.0682 23.3372 25.0502 23.3732 25.028C23.4091 25.0058 23.4514 24.964 23.4514 24.8868L23.4511 12.8599C23.445 12.1534 23.3122 10.4053 20.3889 10.4053ZM20.7391 14.6976C21.0694 14.6976 21.3375 14.9734 21.3375 15.3133C21.3375 15.6532 21.0694 15.929 20.7391 15.929H14.8999C14.5696 15.929 14.3015 15.6532 14.3015 15.3133C14.3015 14.9734 14.5696 14.6976 14.8999 14.6976H20.7391Z" fill="#CBCBCB"/>
                                </svg>
                            </div>
                            <button className="apply">
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
                <Footer />
        </div>
    )
}