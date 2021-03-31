import Axios from '../../Axios'
import React, { Component } from 'react'
import { decryption } from 'helpers/encryption';

export class ContactUs extends Component {

    state = {
        contactList: [],
        alerts: []
    }

    componentDidMount = async () => {
        const response = await Axios.get('/api/contact')
        this.setState({
            contactList: response.data
        })
    }

    deleteContactHandler = async (id) => {

        // eslint-disable-next-line no-restricted-globals
        var Delete = confirm("Delete this Contact Detail?")
        if (Delete) {
            const config = {
                headers: {
                    'auth-token': decryption(localStorage.getItem('token')),
                }
            }

            await Axios.delete('api/contact/' + id, config)

            const message = {
                message: 'Contact Info Deleted',
                classes: 'alert-danger'
            }
            const alerts = []
            alerts.push(message)
            setTimeout(() => {
                this.setState({
                    alerts: []
                })
            }, 3000);
            this.setState({ alerts: alerts })
            this.componentDidMount()
        }

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

                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contactList.map(contact => {
                                return (
                                    <tr key={contact._id}>
                                        <td>{contact.name}</td>
                                        <td><a href={"mailto:" + contact.email}>{contact.email}</a></td>
                                        <td><a href={"tel:" + contact.phone_number}>{contact.phone_number}</a></td>
                                        <td><button className="btn btn-danger" onClick={this.deleteContactHandler.bind(this, contact._id)}>Delete</button></td>
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

export default ContactUs
