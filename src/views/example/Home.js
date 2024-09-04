import React from "react";
// import { withRouter } from "react-router-dom"
import Color from "../HOC/color";

class Home extends React.Component {
    render() {
        return (
            <div>Hello World from Home Page With Quang Nguyễn Đẹp Trai</div>
        )
    }
}


export default Color(Home)

// tìm hiểu lại life cycle