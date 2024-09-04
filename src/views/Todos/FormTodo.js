import React from "react";

class FormToDo extends React.Component {
    render() {
        console.log(this.props)
        return (
            <form action="">
                    <label htmlFor="time">Thời gian: </label>
                    <input 
                        type="text" 
                        name="time" 
                        value={this.props.ToDo.time} 
                        onChange={this.props.HandleOncChangeTime}/> <br />
                    <label htmlFor="activity">Công việc: </label>
                    <input 
                        type="text" 
                        name="activity" 
                        value={this.props.ToDo.activity} 
                        onChange={this.props.HandleOncChangeActivity}/> <br />
                    <input 
                        type="submit" 
                        name="" 
                        value={'Lên lịch'} 
                        onClick={this.props.HandleOnclick}/>
            </form>
        )
    }
}

export default FormToDo