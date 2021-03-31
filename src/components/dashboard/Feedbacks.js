import { decryption } from 'helpers/encryption'
import React, { Component } from 'react'
import Axios from '../../Axios'

export class Feedbacks extends Component {

    state = {
        feedbacks: [],
        alerts: []
    }

    componentDidMount = async () => {
        const feedbacks = await Axios.get('api/feedback')
        console.log(feedbacks.data)
        this.setState({
            feedbacks: feedbacks.data
        })
    }

    alertsHandler = (message) => {
        const alerts = []
        alerts.push(message)
        this.setState({ alerts: alerts })
        setTimeout(() => {
            this.setState({
                alerts: []
            })
        }, 3000);
    }

    deleteFeedbackHandler = async (id) => {
        console.log(id)
        // eslint-disable-next-line no-restricted-globals
        var Delete = confirm("Delete this feedback?")
        if (Delete) {
            const res = await Axios.delete('api/feedback/' + id)
            this.componentDidMount()
            console.log(res)
            const message = {
                message: 'Feedback deleted Successfully',
                classes: 'alert-danger'
            }
            this.alertsHandler(message)
        }
    }

    toggleVisiblity = async (id, currentShow) => {

        const config = {
            headers: {
                'auth-token': decryption(localStorage.getItem('token')),
            }
        }
        var feedbacks = this.state.feedbacks
        console.log(feedbacks[0].show)
        console.log(!currentShow)

        const response = await Axios.put('api/feedback/' + id,
            {
                show: !currentShow
            }
            , config)
        console.log(response)
        feedbacks.map(feedback => {
            if (feedback._id === id) {
                feedback.show = !currentShow
            }
        })

        const message = {
            message: !currentShow ? 'Feedback is Visible' : 'Feedback is hidden',
            classes: !currentShow ? 'alert-success' : 'alert-danger'
        }
        this.alertsHandler(message)

        this.setState({
            feedbacks: feedbacks
        })

    }



    render() {
        return (
            <>
                {
                    this.state.alerts.map(alert => (
                        <div className={"alert container alert-dismissible fade show " + alert.classes} role="alert">
                            <div className="row">
                                <strong className="col-10">{alert.message}</strong>
                                <button type="button" className="close col-2" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ alerts: [] })}>
                                    <span className="font-weight-bold" aria-hidden="true">&#10060;</span>
                                </button>
                            </div>
                        </div>
                    ))
                }
                <div style={{ overflowX: 'scroll' }}>
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
                                    <tr key={feedback._id}>
                                        <td>{feedback.name}</td>
                                        <td><a href={"mailto:" + feedback.email_id}>{feedback.email_id}</a></td>
                                        <td><a href={"tel:" + feedback.mobile_no}>{feedback.mobile_no}</a></td>
                                        <td>{feedback.company_name}</td>
                                        <td>{feedback.address}</td>
                                        <td>{feedback.message}</td>
                                        <td><button
                                            className={feedback.show ? "btn btn-danger" : "btn btn-success"}
                                            onClick={this.toggleVisiblity.bind(this, feedback._id, feedback.show)}>
                                            {feedback.show ? "Hide" : "Show"}
                                        </button>
                                        </td>
                                        <td><button className="btn btn-danger" onClick={this.deleteFeedbackHandler.bind(this, feedback._id)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Feedbacks
