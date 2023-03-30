import Header from "./Header.jsx";
import errorSvg from "../assets/images/errorSvg.svg";
import {Link} from "react-router-dom";

export default function Error(){

    return(
        <div className="errorPage">
            <Header backgroundColor="#E9EAEC" aColor="black" color="black" />
            <div className="errorContainer wrapper">
                <div className="svgContainer">
                    <img src={errorSvg} alt="" />
                </div>
                <div className="errText">
                    <p className="fourOhfour">404</p>
                    <h1>Page Not Found</h1>
                    <p>Publishing industries for previewing layouts 
                        & visual mockups used.
                    </p>
                    <Link to="/">Go Back 
                        <svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.0607 13.0607C57.6464 12.4749 57.6464 11.5251 57.0607 10.9393L47.5147 1.3934C46.9289 0.807612 45.9792 0.807612 45.3934 1.3934C44.8076 1.97918 44.8076 2.92893 45.3934 3.51472L53.8787 12L45.3934 20.4853C44.8076 21.0711 44.8076 22.0208 45.3934 22.6066C45.9792 23.1924 46.9289 23.1924 47.5147 22.6066L57.0607 13.0607ZM0 13.5H56V10.5H0V13.5Z" fill="black"/>
                        </svg>
                    </Link>
                </div>
            </div>

        </div>
    )
}