import React from "react";
import ToDo from "./ToDo";
import FormToDo from "./FormTodo";
// Luồng: thay đổi state --> render lại

class ListToDo extends React.Component {
    // state chưa công việc
    // khi state thay đổi thì thứ thay đổi theo là thẻ input vì 
    // chúng ta đang quản lý thẻ input thông qua state và thuộc tính value ăn theo state
    state = {
        ds: [],
        todo: {
            time: '',
            activity: ''
        }
    }
    
    // Hàm create công việc
    HandleOncChangeTime = (e) => {
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                time: e.target.value
            }
        }));
    }
    HandleOncChangeActivity = (e) => {
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                activity: e.target.value
            }
        }));
    }
    HandleOnclick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            ds: [...prevState.ds, prevState.todo],
            todo: { time: '', activity: '' }  // Reset todo after adding to ds
        }));
    }
    // Hàm delete công việc

    // Hàm update công việc
    // Khi thực hiện re-render chỉ lấy giá trị được gán lúc đầu, không lấy giá trị được cập nhật
    render() {
        return (
            <>
                <p> Simple to do app with react.js </p>
                <FormToDo 
                    ToDo = {this.state.todo} 
                    HandleOncChangeTime = {this.HandleOncChangeTime} 
                    HandleOncChangeActivity = {this.HandleOncChangeActivity} 
                    HandleOnclick = {this.HandleOnclick}>
                </FormToDo>
                <ToDo ListToDo={this.state}></ToDo>     
            </>
        )
    }
}

export default ListToDo



