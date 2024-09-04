import React from "react";
import axios from "axios";

class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    
    // rồi mới chạy đi mount
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(res => {
        //     console.log('check: ', {res})
        // })
        const res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    // chạy render lần đầu trước
    render() {
        let listUsers = this.state.listUsers
        console.log(listUsers)
        return (
            <div>
                <div>Danh sách users</div>
                <div>
                    {
                        listUsers.map((item, index) => {
                            return (
                                <div>
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListUser


// xem lại life cycle và thứ tự chạy did mount