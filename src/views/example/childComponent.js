import React from 'react'
class ChildComponent extends React.Component { // kế thừa
    render() {
        console.log(this.props)
        let jobs = this.props.jobs
        return (
            // this.props là 1 object của react, this.props --> trỏ đến childcomponent lây props từ cha
            <>
                <div className='job-lists'>
                {
                    jobs.map(function(item, index) {
                        return (
                            <div key={item.id}>
                                {item.id} - {item.title}
                            </div> 
                        )
                    })
                }
            </div> 
            </> 
        )
    }
}
export default ChildComponent