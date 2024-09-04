// HOC là higher Order Compnents --> Thành phần yêu cầu cao
// Bọc một đối tượng khác nhằm thực hiện một yêu cầu gì đó
// HOC nhận 1 component và trả lại 1 component khác sau khi được xử lý gì đó

import React from "react";

function getRandonColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

const Color = (WrappedComponent) => {
    const colorRandom = getRandonColor();
    // để react hiểu đang viết 1 component thì phải nhả ra lại y nguyên đầu vào 
    // WrappedComponent có chưa props nên phải trả lại props nên khi đưa props vào lại y chang, 
    // tường minh thông qua code
    return (props) => (
        <div style={{color: colorRandom}}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )
}

export default Color