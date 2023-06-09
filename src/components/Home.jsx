import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Accordion from "./Accordion.jsx"
import QAndA from "./QAndA.jsx"
import lookingForExpertData from "./LookingForExpertData.jsx"
import mondayLogo from "../assets/images/mondayLogo.png"
import testimonialsPlaceholder from "../assets/images/testimonialsImage.jpg"
import QAndAData from "./QAndAData.jsx"
import {Link} from "react-router-dom"
import guySittingDown from "../assets/images/guySittingDownOnDesk.jpg"

export default function Home(){

    return(
        <div>
            <Header backgroundColor="#E9EAEC" aColor="black" color="black"/>
            <div className="homepage">
                <div className="homePageHeader">
                    <h1>Find your job without <span>any hassle.</span></h1>
                    <p className="headerText">Jobs & Job search. Find jobs in global. Executive jobs & work.</p>
                    <div className="searchMenu">
                        <div>
                            <label htmlFor="jobCategories">Job Categories</label>
                            <select name="jobCategories" id="">
                                <option value="">Designer</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <select name="location" id="">
                                <option value="">California, CA</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="keywordsTitle">Keywords or Title</label>
                            <input type="text" placeholder="Design, branding" />
                        </div>
                        <button>
                            Search
                        </button>
                    </div>
                    <div className="cvUpload">
                        <p>Upload your cv <span><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94406 0C9.98306 0 10.0213 0.00328987 10.0585 0.00960702L10.1809 0.0103295C10.3658 0.0103295 10.5425 0.0855356 10.6711 0.218732L15.2614 5.00021C15.3819 5.12616 15.45 5.2956 15.45 5.47048V13.7975C15.4644 16.0709 13.692 17.9185 11.415 18H4.03939C1.8283 17.9525 0.0550035 16.1657 0.000331331 13.9771L0 4.06874C0.0534598 1.82071 1.90915 0.0103295 4.13996 0.0103295L9.82963 0.00960702C9.86684 0.00328987 9.90507 0 9.94406 0ZM9.26395 1.36911L4.14268 1.36948C2.64128 1.36948 1.39448 2.58546 1.35915 4.08505V13.7975C1.32653 15.3388 2.5407 16.6073 4.06747 16.6409H11.3915C12.9037 16.5865 14.1007 15.3388 14.0908 13.802L14.0907 6.32728L12.2709 6.32819C10.6119 6.32366 9.26449 4.97176 9.26449 3.31541L9.26395 1.36911ZM7.376 6.48667C7.56356 6.48667 7.73346 6.56278 7.85646 6.68578L7.85741 6.68637L9.98312 8.82114C10.2477 9.08753 10.2468 9.51702 9.9813 9.7816C9.71491 10.0462 9.28451 10.0462 9.01993 9.77979L8.05521 8.8109L8.05557 12.64C8.05557 13.0151 7.75112 13.3195 7.376 13.3195C7.00088 13.3195 6.69643 13.0151 6.69643 12.64L6.69606 8.8109L5.73261 9.77979C5.60032 9.91389 5.42544 9.98003 5.25147 9.98003C5.07841 9.98003 4.90444 9.91389 4.77215 9.7816C4.50666 9.51702 4.50485 9.08753 4.77033 8.82114L6.89423 6.68637L6.92454 6.65843C6.93764 6.64676 6.95121 6.6356 6.96519 6.62497L6.89423 6.68637C6.9195 6.66101 6.9467 6.63816 6.97545 6.61781C7.08736 6.53533 7.22603 6.48667 7.376 6.48667ZM10.6231 2.13114L10.6236 3.31541C10.6236 4.22514 11.363 4.96632 12.2727 4.96904L13.3459 4.96814L10.6231 2.13114Z" fill="black"/>
                            </svg>
                            </span>
                        </p>
                    </div>
                </div>
                {/* Start Of Categories Div */}
                <div className="categories wrapper">
                    <div className="categoriesTitle">
                        <h2>Most Demanding Categories.</h2> 
                        <a href="#">Explore all fields <span>{">"}</span></a>
                    </div>
                    <div>
                    <div className="cardContainer">
                        {/* Start Of Card */}
                        <div className="card">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7603 22.0991C24.2849 22.0991 24.7107 22.5249 24.7107 23.0495C24.7107 23.5741 24.2849 23.9999 23.7603 23.9999H14.5694C14.0448 23.9999 13.619 23.5741 13.619 23.0495C13.619 22.5249 14.0448 22.0991 14.5694 22.0991H23.7603ZM17.8879 0.828285C17.9513 0.877705 20.0713 2.52504 20.0713 2.52504C20.8417 2.98376 21.4436 3.80363 21.6717 4.77429C21.8985 5.73482 21.7338 6.72576 21.2054 7.56336C21.2019 7.56895 21.1984 7.57447 21.1861 7.59089L21.1766 7.60358C21.0908 7.71662 20.718 8.18808 18.8361 10.5458C18.8187 10.5767 18.7988 10.6056 18.7772 10.6337C18.7455 10.6752 18.711 10.7133 18.6741 10.748C18.5457 10.9096 18.4102 11.0794 18.2676 11.258L17.9788 11.6197C17.3828 12.366 16.676 13.251 15.8373 14.3008L15.4069 14.8394C13.7879 16.8659 11.7144 19.4604 9.05818 22.7835C8.47654 23.5083 7.60472 23.9303 6.66827 23.9417L2.05699 24H2.04431C1.6046 24 1.22191 23.6984 1.11927 23.2688L0.0814473 18.8704C-0.132707 17.9593 0.0801801 17.0191 0.664352 16.2892L12.6012 1.35924C12.6063 1.35417 12.6101 1.34783 12.6152 1.34276C13.9242 -0.22221 16.2913 -0.452837 17.8879 0.828285ZM11.2703 6.06601L2.14822 17.4765C1.93154 17.7477 1.8517 18.0975 1.93154 18.4333L2.79449 22.0891L6.64546 22.0409C7.01167 22.0371 7.35001 21.8737 7.5743 21.5949C8.72932 20.1498 10.181 18.3335 11.6735 16.4658L12.2015 15.805L12.7304 15.1431C14.1301 13.3915 15.5129 11.6607 16.67 10.2121L11.2703 6.06601ZM14.0788 2.55546L12.4577 4.58087L17.8569 8.72574C18.8961 7.42405 19.5798 6.56672 19.643 6.48499C19.8508 6.14792 19.9319 5.67146 19.8229 5.21274C19.7114 4.74261 19.4187 4.34345 18.9967 4.08875C18.9067 4.02666 16.7715 2.36918 16.7056 2.31723C15.9022 1.6735 14.7301 1.78501 14.0788 2.55546Z" fill="black"/>
                                </svg>
                                <h3>UI/UX Design</h3>
                                <p>12k+ Jobs</p>
                        </div>
                        {/* End Of Card */}
                        {/* Start Of Card */}
                        <div className="card">
                                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.33126 15.0831C7.01777 15.0836 6.71506 14.9687 6.48081 14.7604L0 8.99936L6.84071 2.91816C7.09569 2.70003 7.42609 2.59068 7.76086 2.61362C8.09562 2.63655 8.40802 2.78995 8.63086 3.04082C8.85371 3.29169 8.9692 3.61999 8.95251 3.95512C8.93582 4.29026 8.78827 4.60546 8.5416 4.83294L3.85519 8.99936L8.1817 12.8443C8.37608 13.0168 8.51339 13.2443 8.57542 13.4966C8.63744 13.749 8.62124 14.0142 8.52896 14.2571C8.43668 14.5001 8.2727 14.7092 8.05877 14.8567C7.84485 15.0042 7.59112 15.0832 7.33126 15.0831ZM18.7879 15.0806L25.6287 8.99936L19.1478 3.23836C18.8939 3.0128 18.5608 2.89736 18.2218 2.91741C17.8827 2.93747 17.5656 3.09139 17.34 3.3453C17.1145 3.59922 16.999 3.93233 17.0191 4.27137C17.0391 4.61041 17.193 4.92759 17.447 5.15314L21.7735 8.99936L17.0871 13.1645C16.833 13.39 16.6789 13.7073 16.6587 14.0465C16.6385 14.3856 16.7539 14.7189 16.9795 14.973C17.205 15.2271 17.5223 15.3811 17.8614 15.4013C18.2006 15.4215 18.5339 15.3061 18.7879 15.0806ZM12.7964 16.8954L15.358 1.52594C15.3907 1.35796 15.3895 1.18513 15.3543 1.01765C15.3192 0.850161 15.2508 0.691421 15.1533 0.550802C15.0557 0.410183 14.931 0.290538 14.7864 0.198934C14.6419 0.10733 14.4804 0.0456236 14.3116 0.0174613C14.1428 -0.0107011 13.9701 -0.00474883 13.8036 0.0349666C13.6372 0.074682 13.4804 0.147355 13.3425 0.248693C13.2045 0.350031 13.0883 0.477978 13.0007 0.624978C12.9131 0.771977 12.8558 0.935047 12.8323 1.10456L10.2707 16.4741C10.2379 16.642 10.2392 16.8149 10.2743 16.9824C10.3095 17.1498 10.3778 17.3086 10.4754 17.4492C10.5729 17.5898 10.6977 17.7095 10.8422 17.8011C10.9868 17.8927 11.1482 17.9544 11.317 17.9825C11.4858 18.0107 11.6586 18.0047 11.825 17.965C11.9915 17.9253 12.1483 17.8526 12.2862 17.7513C12.4241 17.65 12.5403 17.522 12.6279 17.375C12.7156 17.228 12.7728 17.065 12.7964 16.8954Z" fill="black"/>
                                </svg>
                                <h3>Development</h3>
                                <p>8k+ Jobs</p>
                        </div>
                        {/* End Of Card */}
                        {/* Start Of Card */}
                        <div className="card">
                                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.301 0C16.675 0 19.4261 2.40345 19.4629 5.36868L19.7618 5.36991C23.5281 5.36991 26.5908 8.06392 26.5908 11.3759V17.9952C26.5908 21.306 23.5281 24 19.7618 24H6.82907C3.06408 24 0 21.306 0 17.9952V11.3759C0 8.06392 3.06408 5.36991 6.82907 5.36991L7.10725 5.36883L7.1159 5.13545C7.20153 3.77409 7.83866 2.52521 8.93193 1.57321C10.1019 0.552003 11.6728 0.0420002 13.301 0ZM19.7618 7.16992L19.4631 7.16884L19.4633 9.06725C19.4633 9.56405 19.0051 9.96725 18.4405 9.96725C17.876 9.96725 17.4178 9.56405 17.4178 9.06725L17.4177 7.16884H9.15134L9.15147 9.06725C9.15147 9.56405 8.69329 9.96725 8.12875 9.96725C7.56421 9.96725 7.10602 9.56405 7.10602 9.06725L7.10589 7.16884L6.82907 7.16992C4.19181 7.16992 2.04545 9.05633 2.04545 11.3759V17.9952C2.04545 20.3136 4.19181 22.2 6.82907 22.2H19.7618C22.399 22.2 24.5454 20.3136 24.5454 17.9952V11.3759C24.5454 9.05633 22.399 7.16992 19.7618 7.16992ZM13.2969 1.80001C12.191 1.83361 11.1546 2.16961 10.3719 2.85121C9.60056 3.52411 9.16822 4.41611 9.15192 5.36871L17.4149 5.36883L17.4108 5.21598C17.2853 3.31418 15.4889 1.80001 13.2969 1.80001Z" fill="black"/>
                                </svg>
                                <h3>Marketing</h3>
                                <p>12k+ Jobs</p>
                        </div>
                        {/* End Of Card */}
                        {/* Start Of Card */}
                        <div className="card">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2671 5.76001L6.60217 1.5296C6.17967 1.0421 5.40509 1.04426 4.91434 1.5361L1.9005 4.55535C1.0035 5.45343 0.746752 6.78701 1.26567 7.85626C4.36576 14.275 9.54239 19.4589 15.9568 22.5679C17.0249 23.0868 18.3574 22.8301 19.2544 21.932L22.2964 18.8846C22.7893 18.3917 22.7904 17.6128 22.2986 17.1903L18.0519 13.5448C17.6078 13.1635 16.9177 13.2133 16.4724 13.6597L14.9948 15.1395C14.9191 15.2188 14.8195 15.2711 14.7113 15.2883C14.6031 15.3055 14.4922 15.2867 14.3957 15.2348C11.9803 13.844 9.97674 11.8378 8.589 9.4206C8.53703 9.32391 8.51821 9.21284 8.53543 9.10443C8.55265 8.99602 8.60496 8.89625 8.68434 8.82043L10.1577 7.34601C10.604 6.89751 10.6528 6.20418 10.2671 5.75893V5.76001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3>Telemarketing</h3>
                                <p>3k+ Jobs</p>
                        </div>
                        {/* End Of Card */}
                        {/* Start Of Card */}
                        <div className="card">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.75 5H17.75M13.75 3V7M13.75 5H2.75M6.75 12H2.75M10.75 10V14M21.75 12H10.75M20.75 19H17.75M13.75 17V21M13.75 19H2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3>Editing</h3>
                                <p>12k+ Jobs</p>
                        </div>
                        {/* End Of Card */}
                        {/* Start Of Card */}
                        <div className="card">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.55468 12.6328C2.70976 12.6328 2.35702 11.5473 3.04335 11.0469L13.4859 3.45079C13.6351 3.34153 13.8151 3.28262 14 3.28262C14.1849 3.28262 14.3649 3.34153 14.5141 3.45079L24.9566 11.0469C25.643 11.5445 25.2902 12.6328 24.4426 12.6328H22.75V22.8594H24.7187C24.8391 22.8594 24.9375 22.9578 24.9375 23.0781V24.5C24.9375 24.6203 24.8391 24.7188 24.7187 24.7188H3.28124C3.16093 24.7188 3.06249 24.6203 3.06249 24.5V23.0781C3.06249 22.9578 3.16093 22.8594 3.28124 22.8594H5.24999V12.6328H3.55468ZM14 5.37852L6.5871 10.7707H21.4129L14 5.37852ZM20.7812 12.6328H17.582V22.8594H20.7812V12.6328ZM15.6133 12.6328H12.4141V22.8594H15.6133V12.6328ZM7.21874 22.8594H10.4453V12.6328H7.21874V22.8594Z" fill="black"/>
                                </svg>
                                <h3>Accounting</h3>
                                <p>17k+ Jobs</p>
                        </div>
                        {/* End Of Card */}
                     </div>
                    </div>
                    <div className="homePageExplore">
                        <div className="homePageExplorerFlexContainer">
                            <div className="exploreImageContainer">
                                <img src={guySittingDown} alt="An image of a guy sitting on a desk" />
                            </div>
                            <div className="textContainer">
                                <h3>Get the job of your dreams quickly.</h3>
                                <p>Commonly used in the graphic, print publishing industris for previewing visual mockups. limited social discrimination.</p>
                                <span>Find your job. <a href="#">Explore all</a></span>
                            </div>
                        </div>
                        <div className="features">
                            <div className="featureCard">
                                <h3>20million</h3>
                                <p>Doller Payout</p>
                            </div>
                              <div className="featureCard">
                                <h3>30k+</h3>
                                <p>Worldwide Client</p>
                            </div>
                              <div className="featureCard">
                                <h3>13billion</h3>
                                <p>Doller Payout</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Categories Div */}
                {/* Start of Job Listings Div */}
                <div className="jobListings wrapper">
                    <div className="jobListingsTitleContainer">
                        <h2>New job listing</h2>
                        <Link to="/JobList">Explore all jobs {">"}</Link>
                    </div>
                    <div className="listings">
                        {/* Start of Job Listing */}
                        <div className="jobListing">
                            <div className="positionAndLogo">
                                <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="47.2022" height="50" fill="black" fill-opacity="0.2"/>
                                </svg>
                                <h4>Developer & expert in java c++</h4>
                            </div>
                            <div className="jobDate">
                                <p className="employmentType">Fulltime</p>
                                <p>18 Jul 2018 by <span>slack</span></p>
                            </div>
                            <div className="jobLocation">
                                <p>Spain, Barcelona</p>
                                <p>Developer, Coder</p>
                            </div>
                            <div className="jobButtons">
                                <div className="bookmark">
                                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.4998 18.1501C34.4998 27.5419 26.8886 35.1551 17.4999 35.1551C8.11126 35.1551 0.5 27.5419 0.5 18.1501C0.5 8.7584 8.11126 1.14514 17.4999 1.14514C26.8886 1.14514 34.4998 8.7584 34.4998 18.1501Z" stroke="#D6D6D6"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3889 9.17383C23.0955 9.17383 24.6482 10.5522 24.6482 12.9535V24.8868C24.6482 25.3876 24.3977 25.8383 23.9764 26.0903C23.5567 26.3431 23.0508 26.3481 22.6263 26.1018L17.8707 23.3377L13.0712 26.1075C12.8638 26.2274 12.6364 26.2881 12.4082 26.2881C12.1728 26.2881 11.9374 26.2233 11.7235 26.0936C11.303 25.8415 11.0525 25.3908 11.0525 24.8909V12.8032C11.0525 10.4964 12.606 9.17383 15.315 9.17383H20.3889ZM20.3889 10.4053H15.315C13.2811 10.4053 12.2494 11.2114 12.2494 12.8032V24.8909C12.2494 24.9681 12.2925 25.0099 12.3284 25.0313C12.3643 25.0543 12.4209 25.0707 12.4864 25.0329L17.5787 22.0939C17.7606 21.9897 17.9832 21.9888 18.1659 22.0947L23.2144 25.0288C23.2806 25.0682 23.3372 25.0502 23.3732 25.028C23.4091 25.0058 23.4514 24.964 23.4514 24.8868L23.4511 12.8599C23.445 12.1534 23.3122 10.4053 20.3889 10.4053ZM20.7391 14.6976C21.0694 14.6976 21.3375 14.9734 21.3375 15.3133C21.3375 15.6532 21.0694 15.929 20.7391 15.929H14.8999C14.5696 15.929 14.3015 15.6532 14.3015 15.3133C14.3015 14.9734 14.5696 14.6976 14.8999 14.6976H20.7391Z" fill="#CBCBCB"/>
                                    </svg>
                                </div>
                                <button className="apply">
                                    Apply
                                </button>
                            </div>
                        </div>
                        {/* End of Job listing */}
                         {/* Start of Job Listing */}
                        <div className="jobListing">
                            <div className="positionAndLogo">
                                <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="47.2022" height="50" fill="black" fill-opacity="0.2"/>
                                </svg>
                                <h4>Animator & Expert in maya 3D</h4>
                            </div>
                            <div className="jobDate">
                                <p className="employmentType">Part time</p>
                                <p>18 Jul 2018 by <span>google</span></p>
                            </div>
                            <div className="jobLocation">
                                <p>USA, New York</p>
                                <p>Finance, Accounting</p>
                            </div>
                            <div className="jobButtons">
                                <div className="bookmark">
                                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.4998 18.1501C34.4998 27.5419 26.8886 35.1551 17.4999 35.1551C8.11126 35.1551 0.5 27.5419 0.5 18.1501C0.5 8.7584 8.11126 1.14514 17.4999 1.14514C26.8886 1.14514 34.4998 8.7584 34.4998 18.1501Z" stroke="#D6D6D6"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3889 9.17383C23.0955 9.17383 24.6482 10.5522 24.6482 12.9535V24.8868C24.6482 25.3876 24.3977 25.8383 23.9764 26.0903C23.5567 26.3431 23.0508 26.3481 22.6263 26.1018L17.8707 23.3377L13.0712 26.1075C12.8638 26.2274 12.6364 26.2881 12.4082 26.2881C12.1728 26.2881 11.9374 26.2233 11.7235 26.0936C11.303 25.8415 11.0525 25.3908 11.0525 24.8909V12.8032C11.0525 10.4964 12.606 9.17383 15.315 9.17383H20.3889ZM20.3889 10.4053H15.315C13.2811 10.4053 12.2494 11.2114 12.2494 12.8032V24.8909C12.2494 24.9681 12.2925 25.0099 12.3284 25.0313C12.3643 25.0543 12.4209 25.0707 12.4864 25.0329L17.5787 22.0939C17.7606 21.9897 17.9832 21.9888 18.1659 22.0947L23.2144 25.0288C23.2806 25.0682 23.3372 25.0502 23.3732 25.028C23.4091 25.0058 23.4514 24.964 23.4514 24.8868L23.4511 12.8599C23.445 12.1534 23.3122 10.4053 20.3889 10.4053ZM20.7391 14.6976C21.0694 14.6976 21.3375 14.9734 21.3375 15.3133C21.3375 15.6532 21.0694 15.929 20.7391 15.929H14.8999C14.5696 15.929 14.3015 15.6532 14.3015 15.3133C14.3015 14.9734 14.5696 14.6976 14.8999 14.6976H20.7391Z" fill="#CBCBCB"/>
                                    </svg>
                                </div>
                                <button className="apply">
                                    Apply
                                </button>
                            </div>
                        </div>
                        {/* End of Job listing */}
                    </div>
                    <p>Do you want to post a job for your company? <span>We can help. <a href="#">Click here</a></span> </p>
                </div>
                {/* End of Job Listings Div */}
                {/* Start of Testimonials Div */}
                <div className="testimonials wrapper">
                    <h2>Trusted by leading startups.</h2>
                    {/* Arrows */}
                    <div className="testimonialCardContainer">
                        <div className="testimonialCard">
                            <div className="testimonialLogoContainer">
                                <img src={mondayLogo} alt="Logo for the company called Monday" />
                            </div>
                            <p>"Seattle opera simplifies Performance planning with deski eSignature."</p>
                            <p>Rashed kabir, Lead Designer</p>
                            <div>
                                <span>4.5 Excellent</span>
                                <span>
                                    <svg width="104" height="21" viewBox="0 0 104 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.54894 2.92705C9.8483 2.00574 11.1517 2.00574 11.4511 2.92705L12.6329 6.56434C12.7668 6.97636 13.1507 7.25532 13.5839 7.25532H17.4084C18.3771 7.25532 18.7799 8.49494 17.9962 9.06434L14.9021 11.3123C14.5516 11.5669 14.405 12.0183 14.5389 12.4303L15.7207 16.0676C16.02 16.9889 14.9656 17.7551 14.1818 17.1857L11.0878 14.9377C10.7373 14.6831 10.2627 14.6831 9.91222 14.9377L6.81815 17.1857C6.03444 17.7551 4.97996 16.9889 5.27931 16.0676L6.46114 12.4303C6.59501 12.0183 6.44835 11.5669 6.09787 11.3123L3.00381 9.06434C2.22009 8.49494 2.62287 7.25532 3.59159 7.25532H7.41606C7.84929 7.25532 8.23324 6.97636 8.36712 6.56434L9.54894 2.92705Z" fill="white"/>
                                        <path d="M29.5489 2.92705C29.8483 2.00574 31.1517 2.00574 31.4511 2.92705L32.6329 6.56434C32.7668 6.97636 33.1507 7.25532 33.5839 7.25532H37.4084C38.3771 7.25532 38.7799 8.49494 37.9962 9.06434L34.9021 11.3123C34.5516 11.5669 34.405 12.0183 34.5389 12.4303L35.7207 16.0676C36.02 16.9889 34.9656 17.7551 34.1818 17.1857L31.0878 14.9377C30.7373 14.6831 30.2627 14.6831 29.9122 14.9377L26.8182 17.1857C26.0344 17.7551 24.98 16.9889 25.2793 16.0676L26.4611 12.4303C26.595 12.0183 26.4484 11.5669 26.0979 11.3123L23.0038 9.06434C22.2201 8.49494 22.6229 7.25532 23.5916 7.25532H27.4161C27.8493 7.25532 28.2332 6.97636 28.3671 6.56434L29.5489 2.92705Z" fill="white"/>
                                        <path d="M50.5489 2.92705C50.8483 2.00574 52.1517 2.00574 52.4511 2.92705L53.6329 6.56434C53.7668 6.97636 54.1507 7.25532 54.5839 7.25532H58.4084C59.3771 7.25532 59.7799 8.49494 58.9962 9.06434L55.9021 11.3123C55.5516 11.5669 55.405 12.0183 55.5389 12.4303L56.7207 16.0676C57.02 16.9889 55.9656 17.7551 55.1818 17.1857L52.0878 14.9377C51.7373 14.6831 51.2627 14.6831 50.9122 14.9377L47.8182 17.1857C47.0344 17.7551 45.98 16.9889 46.2793 16.0676L47.4611 12.4303C47.595 12.0183 47.4484 11.5669 47.0979 11.3123L44.0038 9.06434C43.2201 8.49494 43.6229 7.25532 44.5916 7.25532H48.4161C48.8493 7.25532 49.2332 6.97636 49.3671 6.56434L50.5489 2.92705Z" fill="white"/>
                                        <path d="M71.5489 2.92705C71.8483 2.00574 73.1517 2.00574 73.4511 2.92705L74.6329 6.56434C74.7668 6.97636 75.1507 7.25532 75.5839 7.25532H79.4084C80.3771 7.25532 80.7799 8.49494 79.9962 9.06434L76.9021 11.3123C76.5516 11.5669 76.405 12.0183 76.5389 12.4303L77.7207 16.0676C78.02 16.9889 76.9656 17.7551 76.1818 17.1857L73.0878 14.9377C72.7373 14.6831 72.2627 14.6831 71.9122 14.9377L68.8182 17.1857C68.0344 17.7551 66.98 16.9889 67.2793 16.0676L68.4611 12.4303C68.595 12.0183 68.4484 11.5669 68.0979 11.3123L65.0038 9.06434C64.2201 8.49494 64.6229 7.25532 65.5916 7.25532H69.4161C69.8493 7.25532 70.2332 6.97636 70.3671 6.56434L71.5489 2.92705Z" fill="white"/>
                                        <path d="M93.0245 3.08156C93.1741 2.6209 93.8259 2.62091 93.9755 3.08156L95.1574 6.71885C95.3582 7.33688 95.9341 7.75532 96.5839 7.75532H100.408C100.893 7.75532 101.094 8.37513 100.702 8.65983L97.6082 10.9078C97.0825 11.2898 96.8625 11.9668 97.0633 12.5848L98.2452 16.2221C98.3948 16.6828 97.8676 17.0659 97.4757 16.7812L94.3817 14.5332C93.8559 14.1512 93.1441 14.1512 92.6183 14.5332L89.5243 16.7812C89.1324 17.0659 88.6052 16.6828 88.7548 16.2221L89.9367 12.5848C90.1375 11.9668 89.9175 11.2898 89.3918 10.9078L86.2977 8.65983C85.9058 8.37513 86.1072 7.75532 86.5916 7.75532H90.4161C91.0659 7.75532 91.6418 7.33688 91.8426 6.71885L93.0245 3.08156Z" stroke="white"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="testimonialCardAlt">
                            <div className="testimonialLogoContainer">
                                <img src={mondayLogo} alt="Logo for the company called Monday" />
                            </div>
                            <p>"Seattle opera simplifies Performance planning with deski eSignature."</p>
                            <p>Rashed kabir, Lead Designer</p>
                            <div>
                                <span>4.5 Excellent</span>
                                <span>
                                    <svg width="104" height="21" viewBox="0 0 104 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.54894 2.92705C9.8483 2.00574 11.1517 2.00574 11.4511 2.92705L12.6329 6.56434C12.7668 6.97636 13.1507 7.25532 13.5839 7.25532H17.4084C18.3771 7.25532 18.7799 8.49494 17.9962 9.06434L14.9021 11.3123C14.5516 11.5669 14.405 12.0183 14.5389 12.4303L15.7207 16.0676C16.02 16.9889 14.9656 17.7551 14.1818 17.1857L11.0878 14.9377C10.7373 14.6831 10.2627 14.6831 9.91222 14.9377L6.81815 17.1857C6.03444 17.7551 4.97996 16.9889 5.27931 16.0676L6.46114 12.4303C6.59501 12.0183 6.44835 11.5669 6.09787 11.3123L3.00381 9.06434C2.22009 8.49494 2.62287 7.25532 3.59159 7.25532H7.41606C7.84929 7.25532 8.23324 6.97636 8.36712 6.56434L9.54894 2.92705Z" fill="white"/>
                                        <path d="M29.5489 2.92705C29.8483 2.00574 31.1517 2.00574 31.4511 2.92705L32.6329 6.56434C32.7668 6.97636 33.1507 7.25532 33.5839 7.25532H37.4084C38.3771 7.25532 38.7799 8.49494 37.9962 9.06434L34.9021 11.3123C34.5516 11.5669 34.405 12.0183 34.5389 12.4303L35.7207 16.0676C36.02 16.9889 34.9656 17.7551 34.1818 17.1857L31.0878 14.9377C30.7373 14.6831 30.2627 14.6831 29.9122 14.9377L26.8182 17.1857C26.0344 17.7551 24.98 16.9889 25.2793 16.0676L26.4611 12.4303C26.595 12.0183 26.4484 11.5669 26.0979 11.3123L23.0038 9.06434C22.2201 8.49494 22.6229 7.25532 23.5916 7.25532H27.4161C27.8493 7.25532 28.2332 6.97636 28.3671 6.56434L29.5489 2.92705Z" fill="white"/>
                                        <path d="M50.5489 2.92705C50.8483 2.00574 52.1517 2.00574 52.4511 2.92705L53.6329 6.56434C53.7668 6.97636 54.1507 7.25532 54.5839 7.25532H58.4084C59.3771 7.25532 59.7799 8.49494 58.9962 9.06434L55.9021 11.3123C55.5516 11.5669 55.405 12.0183 55.5389 12.4303L56.7207 16.0676C57.02 16.9889 55.9656 17.7551 55.1818 17.1857L52.0878 14.9377C51.7373 14.6831 51.2627 14.6831 50.9122 14.9377L47.8182 17.1857C47.0344 17.7551 45.98 16.9889 46.2793 16.0676L47.4611 12.4303C47.595 12.0183 47.4484 11.5669 47.0979 11.3123L44.0038 9.06434C43.2201 8.49494 43.6229 7.25532 44.5916 7.25532H48.4161C48.8493 7.25532 49.2332 6.97636 49.3671 6.56434L50.5489 2.92705Z" fill="white"/>
                                        <path d="M71.5489 2.92705C71.8483 2.00574 73.1517 2.00574 73.4511 2.92705L74.6329 6.56434C74.7668 6.97636 75.1507 7.25532 75.5839 7.25532H79.4084C80.3771 7.25532 80.7799 8.49494 79.9962 9.06434L76.9021 11.3123C76.5516 11.5669 76.405 12.0183 76.5389 12.4303L77.7207 16.0676C78.02 16.9889 76.9656 17.7551 76.1818 17.1857L73.0878 14.9377C72.7373 14.6831 72.2627 14.6831 71.9122 14.9377L68.8182 17.1857C68.0344 17.7551 66.98 16.9889 67.2793 16.0676L68.4611 12.4303C68.595 12.0183 68.4484 11.5669 68.0979 11.3123L65.0038 9.06434C64.2201 8.49494 64.6229 7.25532 65.5916 7.25532H69.4161C69.8493 7.25532 70.2332 6.97636 70.3671 6.56434L71.5489 2.92705Z" fill="white"/>
                                        <path d="M93.0245 3.08156C93.1741 2.6209 93.8259 2.62091 93.9755 3.08156L95.1574 6.71885C95.3582 7.33688 95.9341 7.75532 96.5839 7.75532H100.408C100.893 7.75532 101.094 8.37513 100.702 8.65983L97.6082 10.9078C97.0825 11.2898 96.8625 11.9668 97.0633 12.5848L98.2452 16.2221C98.3948 16.6828 97.8676 17.0659 97.4757 16.7812L94.3817 14.5332C93.8559 14.1512 93.1441 14.1512 92.6183 14.5332L89.5243 16.7812C89.1324 17.0659 88.6052 16.6828 88.7548 16.2221L89.9367 12.5848C90.1375 11.9668 89.9175 11.2898 89.3918 10.9078L86.2977 8.65983C85.9058 8.37513 86.1072 7.75532 86.5916 7.75532H90.4161C91.0659 7.75532 91.6418 7.33688 91.8426 6.71885L93.0245 3.08156Z" stroke="white"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="testimonialClientSearchContainer">
                        <div className="tcsmLeft">
                            <img src={testimonialsPlaceholder} alt="Placeholder image" />
                        </div>
                        <div className="tcsmRight">
                            <p>Looking for an expert?</p>
                            <h2>Find top talents from jobi.</h2>
                            <Accordion items={lookingForExpertData} keepOthersOpen={false} />
                            <a href="#">Find Talents</a>
                        </div>
                    </div>
                </div>
                {/* End of Testimonials Div */}
                {/* Q&A Div */}
                <div className="questionsAndAnswers wrapper">
                    <h2>Questions & Answers</h2>
                    <div className="qAndAContainer">
                     <QAndA items={QAndAData}/>
                    </div>
                    <p className="qAndAHelp">Can't find the answer? We can help. <a href="#">Click here</a></p>
                </div>
                {/* End of Q&A Div */}
            </div>
            <Footer />
        </div>
    )
}