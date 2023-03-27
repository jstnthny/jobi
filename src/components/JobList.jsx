import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const jobData = [
    {
     jobPosition: 'Web Developer',
     employmentType: 'Full-time',
     datePosted: 'July 18, 2018',
     location: 'Spain, Barcelona',
     keywords: ['developer, coder']
    }
    ,
  {
    jobPosition: 'Sales Associate',
    jobPayPerHour: 15.50,
    location: 'New York City, NY',
    datePosted: '2023-03-15',
    employmentType: 'Full-time',
    keywords: ['sales', 'customer service', 'retail']
  },
  {
    jobPosition: 'Customer Service Representative',
    jobPayPerHour: 14.25,
    location: 'Los Angeles, CA',
    datePosted: '2023-03-20',
    employmentType: 'Part-time',
    keywords: ['customer service', 'call center']
  },
  {
    jobPosition: 'Software Developer',
    jobPayPerHour: 30.00,
    location: 'Seattle, WA',
    datePosted: '2023-03-18',
    employmentType: 'Full-time',
    keywords: ['software development', 'programming', 'web development']
  },
];



export default function JobList(){
    return(
        <div>
            <Header backgroundColor="orange"/>
            <div className="searchMenu wrapper">
                <div>
                    <label htmlFor="keywordsTitle">Keywords or Title</label>
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
            <div>
                {jobData.map((job, index) => (
                    <div className="jobListing" key={index}>
                        <div className="positionAndLogo">
                            <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="47.2022" height="50" fill="black" fill-opacity="0.2"/>
                            </svg>
                            <h4>{job.jobPosition}</h4>
                        </div>
                        <div className="jobDate">
                            <p className="employmentType">{job.employmentType}</p>
                            <p>{job.datePosted}</p>
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