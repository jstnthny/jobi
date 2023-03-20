import {Link, Route, Routes} from "react-router-dom"

export default function Header(){
    return(
        <div>
            <h1>Header</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/JobList">Job</Link></li>
                <li><Link to="#">Explore</Link></li>
                <li><Link to="#">Category</Link></li>
                <li><Link to="#">Pages</Link></li>
            </ul>
        </div>
    )
}