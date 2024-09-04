import React from "react";
import "./Nav.scss"
import {
    Link, NavLink
  } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return(
            <div className="topnav">
                {/* bản chất link là render ra thẻ a nhưng chặng việc load lại trang  */}
                {/* <Link className="active" to='/'>Home</Link>
                <Link to='/todo'>To do</Link> */}
                {/* <Link to="/dormitory">Dormitory</Link> */}
                
                {/* tự động thêm class active */}
                <NavLink activeClassName="active" to='/' exact={true}>Home</NavLink>
                <NavLink activeClassName="active" to='/todo'>To do</NavLink>
                <NavLink activeClassName="active" to="/user" >User</NavLink>
                
                {/* <a className="active" href='/' exact={true}>Home</a>
                <a href='/todo'>To do</a>
                <a href="/dormitory">Dormitory</a> */}
            </div>
        )
    }    
}

export default Nav