import React, { Component } from 'react'
import Axios from '../../Axios'

export class Feedbacks extends Component {

    state = {
        feedbacks: []
    }

    componentDidMount = async () => {
        const feedbacks = await Axios.get('api/feedback')
        console.log(feedbacks.data)
        this.setState({
            feedbacks: feedbacks.data
        })
    }

    deleteFeedbackHandler=async (id)=>{
        console.log(id)
        // eslint-disable-next-line no-restricted-globals
        var Delete = confirm("Delete this feedback?")
        if(Delete){
            const res = await Axios.delete('api/feedback/'+id)
            this.componentDidMount()
            console.log(res)
        }
    }



    render() {
        return (
            <div style={{overflowX:'scroll'}}>
                <table className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Mobile</th>
                            <th>Company</th>
                            <th>Address</th>
                            <th>Message</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbacks.map(feedback => {
                            return (
                                <tr>
                                    <td>{feedback.name}</td>
                                    <td>{feedback.email_id}</td>
                                    <td>{feedback.mobile_no}</td>
                                    <td>{feedback.company_name}</td>
                                    <td>{feedback.address}</td>
                                    <td>{feedback.message}</td>
                                    <td><button className="btn btn-success">Hide</button></td>
                                    <td><button className="btn btn-danger" onClick={this.deleteFeedbackHandler.bind(this,feedback._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Feedbacks
