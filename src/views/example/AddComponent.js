import React from "react";

class AddComponent extends React.Component {
    render() {
        return (
            <>
                <div>Hello World</div>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                    <br />
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                </form>
            </>
            
        )
    }
}
export default AddComponent