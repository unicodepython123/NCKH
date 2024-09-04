import React from "react";

class ToDo extends React.Component {
    // nhận danh sách công việc
    render() {
        let ListToDo = this.props.ListToDo.ds
        console.log(this.props.ListToDo.ds)
        return (
            <>
                <ol>
                    {
                        ListToDo.map(function(item, index) {
                            return (
                                <div>{item.time} - {item.activity} <span><button>delete</button> <button>update</button></span></div>
                            )
                        })            
                    }
                </ol>
            </>
        )
    }
}


export default ToDo