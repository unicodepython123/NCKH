import React from 'react'
import ChildComponent from './childComponent'
import FunctionComponentExample from './functionComponentExample'
import AddComponent from './AddComponent'
// như chúng ta đang tạo 1 tag mới
// 2 loại component: class component và function component --> Component là những thành phần của 1 web
// Điều đặc biệt của component là sử dụng JSX --> Hàm nhưng trả về về HTML (code HTML bên trong JS)
// Trong ReactJS, component là một khối xây dựng cơ bản của ứng dụng. Một component có thể được hiểu như một hàm 
// hoặc một lớp trong JavaScript, có nhiệm vụ trả về một đoạn JSX (JavaScript XML) để hiển thị ra giao diện người dùng. 
// Mỗi component có thể chứa logic riêng, trạng thái riêng (state), và có thể tương tác với các component khác.
// JSX => return 1 block --> dùng fragment để có thể trả về nhiều block (gắn 2 div vào dom) 

// State của React:
// State --> dữ liệu có thể bị thay đổi và front end giúp cập nhật dữ liệu real time --> State là trạng thái của dữ liệu đó
// State như bộ nhớ giúp lưu lại dữ liệu
class MyComponent extends React.Component { // kế thừa
    state = { // giúp cần nhật lại dữ liệu mà không cần cập nhật lại trang (giống auto save, nhưng auto save là tính năng của VS code, bản chất auto save vẫn refresh lại trang)
        name: 'Quang',
        channel: 'Hoi dan IT',
        jobs: [
            {id: 'abc', title: 'dev'},
            {id: 'xyz', title: 'tester'},
            {id: 'kml', title: 'BA'}
        ]
    }
    handleCllckButton = () => {
        alert('Quang Nguyễn Đây')
    }
    // khi change là auto render
    handleChangeName = (event) => {
        // trả về value
        // console.log(event.target.value)
        // trả về thẻ
        // console.log(event.target)
        // trả về object
        // console.log(event)
        // khi state được set lại thì auto chạy lại render() --> re-render()
        this.setState ({
            name: event.target.value
        })
    }
    // khi change thì hàm này chạy đã gán lại giá trị thông qua abc, chạy abc thôi, ko render
    abc = (event) => {
        console.log('abc')
        this.test = {
            ten: event.target.value
        }
    }
    test = {
        ten: 'Doanh'
    }
    render() {
        console.log('Cập nhật lại, render lại', this.state.name)
        return (
            <>
            <AddComponent>
                
            </AddComponent>
            {/* this chính là chỉ đến cái class, khi muốn gọi đến 1 method bên trong chính nó thì dùng this*/}
                {/* Khi được render lại thì nó nhận giá trị */}
                hi {this.test.ten} <br />
                Hello {this.state['name']}
                <div className='first'>
                    <input type="text" value={this.test.name} onChange={(event) => this.abc(event)}/> 
                    <br />
                    <input type="text" value={this.state.name} onChange={(event) => this.handleChangeName(event)}/>
                    <br />
                    {/* Vì có thuộc tính value */}
                    <input type="text" value=""/>
                    <br />
                    <input type="text"/>
                    {/* type submit --> event tải lại trang */}
                    <input type="submit" />
                </div>
                <h1></h1>
                {/* cần phải xem xét thêm  */}
                <button onClick={() => this.handleCllckButton()}>Click me</button>
                <ChildComponent jobs={this.state.jobs}></ChildComponent>
                ------------------------------------------------------------------
                <FunctionComponentExample jobs = {this.state.jobs}>

                </FunctionComponentExample>
            
            </>
            
        )
    }
}
export default MyComponent


// DOM Event
// Nesting component
// Stateless/starefull component