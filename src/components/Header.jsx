import {Link} from "react-router-dom";
import React, {useState} from 'react';



const Header = (props) => {

    const {backgroundColor, color, aColor} = props;



    const styles ={
        header:{
            backgroundColor,
            color,
        },
        a:{
            color: aColor,
        },
    }

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () =>{
        setIsClicked(!isClicked);
    }


    return(
        <header style={styles.header}>
            <nav>
                <div className="navLogo">
                    <svg width="119" height="42" viewBox="0 0 119 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.5" cy="22.5" r="15.5" fill="#00D462" fillOpacity="0.34"/>
                        <circle cx="30.5" cy="22.5" r="15.5" fill="#00D462"/>
                        <path d="M63.768 33L62.94 36.744L60.168 39.624L56.82 41.748L56.136 40.308L58.296 38.652L59.808 36.384L60.24 33L60.276 27.42V20.508L59.952 16.764L57.468 16.872L57.288 15.612L62.256 14.64L64.056 15.036L63.804 19.932L63.66 23.532L63.768 33ZM59.736 7.512L61.392 6.72L63.12 7.296L63.912 9.24L62.904 10.824L61.212 11.508L59.628 10.536L58.872 8.916L59.736 7.512ZM67.7907 26.16V21.444L69.9147 17.16L73.9827 14.46L78.9147 14.28L83.4147 16.98L85.7547 21.3L85.3227 27.888L82.6587 32.136L77.0787 33.72L72.3987 32.82L68.9787 29.724L67.7907 26.16ZM71.7507 20.22L71.5707 24.252L72.0027 28.428L73.5507 31.128L77.3667 32.064L80.8947 30.516L81.9387 24.9L81.5787 20.22L80.2467 17.232L77.6187 15.9L74.0187 16.296L71.7507 20.22ZM93.0689 16.548L93.3209 16.8L97.0649 14.748L100.989 14.64L104.805 17.556L106.317 23.568L105.237 28.932L102.645 32.208L97.4609 33.72L90.6569 32.82L89.3969 31.56L89.6849 19.68L89.6489 11.508L89.4689 7.908L86.9129 8.016L86.7329 6.756L91.7009 5.784L93.5009 6.18L93.0689 16.548ZM92.9969 27.492L93.2849 30.84L97.9649 31.884L101.529 29.652L102.573 25.692L102.429 20.94L99.8729 17.232L97.6409 16.692L93.0689 18.528L92.9969 27.492ZM110.826 7.512L112.482 6.72L114.21 7.296L115.002 9.24L113.994 10.824L112.302 11.508L110.718 10.536L109.962 8.916L110.826 7.512ZM114.894 19.932L114.678 23.532L114.786 27.024L114.93 31.2L117.558 31.92L117.378 33.18L113.13 33L108.738 33.18L108.81 31.92L111.186 31.2L111.366 27.42L111.294 20.508L111.114 16.764L108.558 16.872L108.378 15.612L113.346 14.64L115.146 15.036L114.894 19.932Z" fill="#252525"/>
                    </svg>
                </div>
                
                <ul className={`navMenu ${isClicked ? 'active' : ''}`} onClick={handleClick} >
                    <li><Link to="/" style={styles.a}>Home</Link></li>
                    <li><Link to="/JobList" style={styles.a}>Job</Link></li>
                    <li><Link to="#" style={styles.a}>Explore</Link></li>
                    <li><Link to="#" style={styles.a}>Category</Link></li>
                    <li><Link to="#" style={styles.a}>Pages</Link></li>
                    <li className="login"><Link to="#" style={styles.a}>Login</Link></li>
                    <li className="register"><Link to="#" style={styles.a}>Register</Link></li>
                </ul>
                <button className={`hamburger ${isClicked ? 'active' : ''}`} onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className="loginRegContainer">
                    <li className="login">Login</li>
                    <li className="register">Register</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;