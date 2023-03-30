// import JobData from "./JobData.jsx";
import {useParams} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {db} from "../firebase-config";
import {collection, getDocs} from 'firebase/firestore'
import React, {useState, useEffect} from 'react';

    

export default function JobDetails(props){

    console.log(props);
    const {id} = useParams();
    let jobData = props.jobData;
    const job = jobData.find(job => job.id === id);

    console.log(job)
    console.log(job.datePosted)


   



    return(
        
        <div>
            <Header backgroundColor="#244034" color="white" aColor="white"/>
            <div className="jobDetailsTitle">
                <h1>{job.jobPosition}</h1> 
                <ul>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.13249 14.3333H8.79916V8.99329H11.2018L11.4658 6.33996H8.79916V4.99996C8.79916 4.82315 8.8694 4.65358 8.99442 4.52855C9.11944 4.40353 9.28901 4.33329 9.46582 4.33329H11.4658V1.66663H9.46582C8.58177 1.66663 7.73392 2.01782 7.1088 2.64294C6.48368 3.26806 6.13249 4.1159 6.13249 4.99996V6.33996H4.79916L4.53516 8.99329H6.13249V14.3333Z" fill="white"/>
                        </svg>
                        <p>Facebook</p>
                    </li>
                    <li>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4366 4.24927L11.7851 5.89536C11.4569 9.71802 8.23037 12.6876 4.3749 12.6876C3.58193 12.6876 2.92568 12.5618 2.42803 12.3157C2.02881 12.1133 1.86475 11.9001 1.821 11.8344C1.7848 11.7794 1.76147 11.717 1.75276 11.6518C1.74404 11.5865 1.75016 11.5201 1.77066 11.4576C1.79117 11.395 1.82552 11.3379 1.87116 11.2905C1.9168 11.2431 1.97256 11.2065 2.03428 11.1836C2.04521 11.1782 3.33584 10.686 4.17256 9.7399C3.65365 9.37042 3.19756 8.91987 2.82178 8.40552C2.07256 7.38833 1.27959 5.62193 1.75537 2.98599C1.77033 2.90762 1.80617 2.83475 1.85911 2.77507C1.91205 2.71539 1.98013 2.67112 2.05615 2.64693C2.13242 2.62195 2.21408 2.61844 2.29221 2.63677C2.37033 2.65509 2.44192 2.69455 2.49912 2.75083C2.51553 2.77271 4.33662 4.56646 6.5624 5.14615V4.81255C6.56455 4.46568 6.635 4.12262 6.76973 3.80297C6.90446 3.48332 7.10084 3.19334 7.34764 2.94959C7.59444 2.70583 7.88684 2.51307 8.20814 2.38232C8.52943 2.25157 8.87334 2.18539 9.22021 2.18755C9.67548 2.19404 10.1213 2.31835 10.5142 2.54837C10.9072 2.77838 11.2338 3.10626 11.4624 3.50005H13.1249C13.2113 3.49978 13.2958 3.52508 13.3678 3.57277C13.4398 3.62046 13.4961 3.68839 13.5296 3.76802C13.5611 3.84883 13.5691 3.93691 13.5527 4.02208C13.5362 4.10725 13.496 4.18601 13.4366 4.24927Z" fill="white"/>
                        </svg>
                        <p>Twitter</p>
                    </li>
                    <li>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_519_29221)">
                            <path d="M7.71185 16.7164C7.11582 15.8399 7.30114 14.6428 8.05244 13.8915L9.51998 12.424C9.78043 12.1635 9.78043 11.7328 9.51998 11.4723C9.25953 11.2119 8.82878 11.2119 8.56833 11.4723L7.15088 12.8898C5.84362 14.197 5.63325 16.3207 6.81029 17.7482C7.12338 18.1305 7.51309 18.443 7.95431 18.6656C8.39554 18.8882 8.87849 19.0158 9.37206 19.0404C9.86563 19.0649 10.3589 18.9858 10.82 18.8081C11.2811 18.6304 11.6999 18.358 12.0494 18.0086L13.577 16.481C13.8375 16.2205 13.8375 15.7898 13.577 15.5293C13.3166 15.2689 12.8858 15.2689 12.6254 15.5293L11.0977 17.057C10.8669 17.2863 10.5882 17.4617 10.2816 17.5705C9.97499 17.6794 9.64807 17.7189 9.32434 17.6863C9.00062 17.6538 8.68812 17.5499 8.40932 17.3822C8.13051 17.2145 7.89232 16.9871 7.71185 16.7164ZM11.0476 15.0034L14.0528 11.9982C14.3283 11.7228 14.3283 11.272 14.0528 10.9965C13.7774 10.721 13.3266 10.721 13.0511 10.9965L10.0459 14.0017C9.77041 14.2772 9.77041 14.728 10.0459 15.0034C10.3214 15.2789 10.7721 15.2789 11.0476 15.0034ZM11.9392 8.10148L10.5217 9.51893C10.2613 9.77939 10.2613 10.2101 10.5217 10.4706C10.7822 10.731 11.2129 10.731 11.4734 10.4706L12.9409 9.00304C13.6922 8.25174 14.8893 8.06642 15.7658 8.66245C16.0365 8.84292 16.2639 9.08112 16.4316 9.35992C16.5993 9.63873 16.7032 9.95122 16.7357 10.2749C16.7683 10.5987 16.7288 10.9256 16.6199 11.2322C16.5111 11.5388 16.3357 11.8175 16.1064 12.0483L14.5787 13.576C14.3183 13.8364 14.3183 14.2672 14.5787 14.5276C14.8392 14.7881 15.2699 14.7881 15.5304 14.5276L17.058 13C18.5206 11.5374 18.4354 9.10822 16.8026 7.75588C15.3751 6.57884 13.2464 6.79422 11.9392 8.10148Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_519_29221">
                            <rect width="17" height="17" fill="white" transform="translate(0.0292969 13) rotate(-45)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Copy</p>

                    </li>
                </ul>
            </div>
            <div className="jobDetailsBg">
                <div className="jobDetailsWrapper">
                    <div className="cardContainer">
                        <div className="card">
                            <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.92117 24C5.54339 24 5.2265 23.872 4.9705 23.616C4.71539 23.3609 4.58783 23.0444 4.58783 22.6667V21.1333C3.58783 20.9111 2.71006 20.5222 1.9545 19.9667C1.19895 19.4111 0.587834 18.6333 0.121167 17.6333C-0.0343884 17.3222 -0.0401662 16.9947 0.103834 16.6507C0.248723 16.3058 0.510056 16.0556 0.887834 15.9C1.19894 15.7667 1.52117 15.7724 1.8545 15.9173C2.18783 16.0613 2.44339 16.3 2.62117 16.6333C2.99895 17.3 3.47672 17.8058 4.0545 18.1507C4.63228 18.4947 5.34339 18.6667 6.18783 18.6667C7.09895 18.6667 7.87139 18.4613 8.50517 18.0507C9.13806 17.6391 9.4545 17 9.4545 16.1333C9.4545 15.3556 9.21006 14.7387 8.72117 14.2827C8.23228 13.8276 7.09895 13.3111 5.32117 12.7333C3.41006 12.1333 2.09894 11.4169 1.38783 10.584C0.676723 9.75022 0.321167 8.73333 0.321167 7.53333C0.321167 6.08889 0.787834 4.96667 1.72117 4.16667C2.6545 3.36667 3.61006 2.91111 4.58783 2.8V1.33333C4.58783 0.955556 4.71539 0.638667 4.9705 0.382667C5.2265 0.127555 5.54339 0 5.92117 0C6.29894 0 6.61583 0.127555 6.87183 0.382667C7.12695 0.638667 7.2545 0.955556 7.2545 1.33333V2.8C8.09894 2.93333 8.83228 3.20578 9.4545 3.61733C10.0767 4.028 10.5878 4.53333 10.9878 5.13333C11.1878 5.42222 11.2269 5.74444 11.1052 6.1C10.9825 6.45556 10.7323 6.71111 10.3545 6.86667C10.0434 7 9.72117 7.00533 9.38783 6.88267C9.0545 6.76089 8.74339 6.54445 8.4545 6.23333C8.16561 5.92222 7.82695 5.68311 7.4385 5.516C7.04917 5.34978 6.56561 5.26667 5.98783 5.26667C5.01006 5.26667 4.26561 5.48356 3.7545 5.91733C3.24339 6.35022 2.98783 6.88889 2.98783 7.53333C2.98783 8.26667 3.32117 8.84444 3.98783 9.26667C4.6545 9.68889 5.81006 10.1333 7.4545 10.6C8.98783 11.0444 10.1492 11.7498 10.9385 12.716C11.7269 13.6831 12.1212 14.8 12.1212 16.0667C12.1212 17.6444 11.6545 18.8444 10.7212 19.6667C9.78784 20.4889 8.63228 21 7.2545 21.2V22.6667C7.2545 23.0444 7.12695 23.3609 6.87183 23.616C6.61583 23.872 6.29894 24 5.92117 24Z" fill="#168656"/>
                            </svg>
                            <h3>Salary</h3>
                            <p>{job.salary.toLocaleString("en-US", {style: "currency", currency: "CAD"})}/year</p>
                        </div>
                        <div className="card">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9175 0C22.1537 0 25 2.9725 25 7.395V17.605C25 22.0275 22.1537 25 17.9163 25H7.08125C2.845 25 0 22.0275 0 17.605V7.395C0 2.9725 2.845 0 7.08125 0H17.9175ZM17.9175 1.875H7.08125C3.91875 1.875 1.875 4.04125 1.875 7.395V17.605C1.875 20.9587 3.91875 23.125 7.08125 23.125H17.9163C21.08 23.125 23.125 20.9587 23.125 17.605V7.395C23.125 4.04125 21.08 1.875 17.9175 1.875ZM17.6119 8.87125C17.9781 9.2375 17.9781 9.83 17.6119 10.1962L11.6794 16.1287C11.4969 16.3125 11.2569 16.4037 11.0169 16.4037C10.7781 16.4037 10.5369 16.3125 10.3544 16.1287L7.38688 13.1625C7.02063 12.7962 7.02063 12.2038 7.38688 11.8375C7.75313 11.4713 8.34562 11.4713 8.71187 11.8375L11.0169 14.14L16.2869 8.87125C16.6531 8.505 17.2456 8.505 17.6119 8.87125Z" fill="#168656"/>
                            </svg>
                            <h3>Expertise</h3>
                            <p>{job.expertise}</p>
                        </div>
                        <div className="card">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.78344 12.2293C10.4561 12.2293 11.0321 11.9896 11.5114 11.5102C11.99 11.0316 12.2293 10.4561 12.2293 9.78344C12.2293 9.11083 11.99 8.53483 11.5114 8.05544C11.0321 7.57687 10.4561 7.33758 9.78344 7.33758C9.11083 7.33758 8.53524 7.57687 8.05666 8.05544C7.57727 8.53483 7.33758 9.11083 7.33758 9.78344C7.33758 10.4561 7.57727 11.0316 8.05666 11.5102C8.53524 11.9896 9.11083 12.2293 9.78344 12.2293ZM9.78344 21.2178C12.2701 18.935 14.1146 16.8609 15.3172 14.9956C16.5197 13.131 17.121 11.4752 17.121 10.028C17.121 7.80637 16.4125 5.98706 14.9956 4.57009C13.5794 3.15394 11.842 2.44586 9.78344 2.44586C7.72484 2.44586 5.98706 3.15394 4.57009 4.57009C3.15394 5.98706 2.44586 7.80637 2.44586 10.028C2.44586 11.4752 3.04713 13.131 4.24968 14.9956C5.45223 16.8609 7.29682 18.935 9.78344 21.2178ZM9.78344 24C9.62038 24 9.45732 23.9694 9.29427 23.9083C9.13121 23.8471 8.98853 23.7656 8.86624 23.6637C5.89045 21.0344 3.66879 18.5938 2.20127 16.342C0.733758 14.0894 0 11.9847 0 10.028C0 6.9707 0.983643 4.53503 2.95093 2.72102C4.9174 0.907006 7.1949 0 9.78344 0C12.372 0 14.6495 0.907006 16.6159 2.72102C18.5832 4.53503 19.5669 6.9707 19.5669 10.028C19.5669 11.9847 18.8331 14.0894 17.3656 16.342C15.8981 18.5938 13.6764 21.0344 10.7006 23.6637C10.5783 23.7656 10.4357 23.8471 10.2726 23.9083C10.1096 23.9694 9.9465 24 9.78344 24Z" fill="#168656"/>
                            </svg>
                            <h3>Location</h3>
                            <p>{job.location}</p>
                        </div>
                        <div className="card">
                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.301 0C16.675 0 19.4261 2.40345 19.4629 5.36868L19.7618 5.36991C23.5281 5.36991 26.5908 8.06392 26.5908 11.3759V17.9952C26.5908 21.306 23.5281 24 19.7618 24H6.82907C3.06408 24 0 21.306 0 17.9952V11.3759C0 8.06392 3.06408 5.36991 6.82907 5.36991L7.10725 5.36883L7.1159 5.13545C7.20153 3.77409 7.83866 2.52521 8.93193 1.57321C10.1019 0.552003 11.6728 0.0420002 13.301 0ZM19.7618 7.16992L19.4631 7.16884L19.4633 9.06725C19.4633 9.56405 19.0051 9.96725 18.4405 9.96725C17.876 9.96725 17.4178 9.56405 17.4178 9.06725L17.4177 7.16884H9.15134L9.15147 9.06725C9.15147 9.56405 8.69329 9.96725 8.12875 9.96725C7.56421 9.96725 7.10602 9.56405 7.10602 9.06725L7.10589 7.16884L6.82907 7.16992C4.19181 7.16992 2.04545 9.05633 2.04545 11.3759V17.9952C2.04545 20.3136 4.19181 22.2 6.82907 22.2H19.7618C22.399 22.2 24.5454 20.3136 24.5454 17.9952V11.3759C24.5454 9.05633 22.399 7.16992 19.7618 7.16992ZM13.2969 1.80001C12.191 1.83361 11.1546 2.16961 10.3719 2.85121C9.60056 3.52411 9.16822 4.41611 9.15192 5.36871L17.4149 5.36883L17.4108 5.21598C17.2853 3.31418 15.4889 1.80001 13.2969 1.80001Z" fill="#168656"/>
                            </svg>
                            <h3>Job Type</h3>
                            <p>{job.employmentType}</p>
                        </div>
                        <div className="card">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.988 0C5.364 0 0 5.376 0 12C0 18.624 5.364 24 11.988 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 11.988 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6ZM11.736 6H11.664C11.184 6 10.8 6.384 10.8 6.864V12.528C10.8 12.948 11.016 13.344 11.388 13.56L16.368 16.548C16.776 16.788 17.304 16.668 17.544 16.26C17.6043 16.1628 17.6443 16.0545 17.6619 15.9416C17.6794 15.8286 17.674 15.7132 17.646 15.6024C17.618 15.4915 17.568 15.3874 17.4989 15.2963C17.4299 15.2052 17.3432 15.1289 17.244 15.072L12.6 12.312V6.864C12.6 6.384 12.216 6 11.736 6Z" fill="#168656"/>
                            </svg>
                            <h3>Experience</h3>
                            <p>1-3 years</p>
                        </div>
                    </div>
                
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
                            <ul className="responsibilities">
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
            </div>
            <Footer />
        </div>
    )
}