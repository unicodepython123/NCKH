import React from "react";
// truyền vào trực tiếp dưới dạng tha số mới lấy được props
// dùng hàm nặc danh để hứng lại giá trị
const FunctionComponentExample = function(props) {
    let jobs = props.jobs
    console.log(props)
    return (
        <div>
            {jobs.map(function(item,index) {
                return (
                    <div>
                        {item.id} - {item.title}
                    </div>
                )
            })}
        </div>
    )
}
export default FunctionComponentExample