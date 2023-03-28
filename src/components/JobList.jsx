import React, {useState} from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import upArrow from "../assets/images/upArrow.svg";
import downArrow from "../assets/images/downArrow.svg";


const jobListHeaderStyles ={
    backgroundColor: 'orange'
};


const jobData = [
    {
        jobPosition: 'Software Developer',
        salary: 100000,
        location: 'San Francisco, CA',
        datePosted: '2023-03-27',
        employmentType: 'Full-time',
        keywords: ['software development', 'programming', 'web development']
    },
    {
        jobPosition: 'Marketing Manager',
        salary: 80000,
        location: 'New York City, NY',
        datePosted: '2023-03-25',
        employmentType: 'Full-time',
        keywords: ['marketing', 'digital marketing', 'social media']
    },
    {
        jobPosition: 'Accountant',
        salary: 65000,
        location: 'Chicago, IL',
        datePosted: '2023-03-22',
        employmentType: 'Full-time',
        keywords: ['accounting', 'bookkeeping', 'finance']
    },
    {
    jobPosition: 'Graphic Designer',
    salary: 60000,
    location: 'Los Angeles, CA',
    datePosted: '2023-03-28',
    employmentType: 'Full-time',
    keywords: ['graphic design', 'print design', 'Adobe Creative Suite']
    },
    {
    jobPosition: 'Customer Service Representative',
    salary: 40000,
    location: 'Dallas, TX',
    datePosted: '2023-03-29',
    employmentType: 'Full-time',
    keywords: ['customer service', 'phone support', 'problem-solving']
    },
    {
    jobPosition: 'Data Analyst',
    salary: 75000,
    location: 'Boston, MA',
    datePosted: '2023-03-30',
    employmentType: 'Full-time',
    keywords: ['data analysis', 'SQL', 'Excel']
    },
    {
    jobPosition: 'Event Coordinator',
    salary: 25000,
    location: 'Toronto, ON',
    datePosted: '2023-04-03',
    employmentType: 'Part-time',
    keywords: ['event planning', 'project management', 'communication']
    },
    {
    jobPosition: 'Administrative Assistant',
    salary: 18000,
    location: 'Toronto, ON',
    datePosted: '2023-04-04',
    employmentType: 'Part-time',
    keywords: ['administrative', 'office management', 'Microsoft Office']
    }
];




export default function JobList(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [keywordFilter, setKeywordFilter] = useState("");
    const filteredJobsData = jobData.filter(job => {
        return job.keywords.some(keyword => {
            return keyword.toLowerCase().includes(keywordFilter.toLowerCase());
        })
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
            
                <div className="accordion">
                    {console.log(isOpen)}
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

                {/* <input
                    type="text"
                    placeholder="Filter by keyword"
                    value={keywordFilter}
                    onChange={e => setKeywordFilter(e.target.value)}
                /> */}
                <p className="jobTotal">All <span>{jobData.length}</span> jobs found</p>
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
                            {console.log(job)}
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