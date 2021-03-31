import React, { Component } from 'react'
import Axios from '../../Axios'
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { decryption } from 'helpers/encryption';
var FormData = require('form-data');

const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-center rounded-t-lg`}
`;

export class Applications extends Component {

    state = {
        applications: [],
        mode: 'add',
        title: '',
        description: '',
        image: "",
        editModal: false,
        modalContent: null,
        alerts:[]
    }

    componentDidMount = async () => {
        const applications = await Axios.get('api/application')
        this.setState({
            applications: applications.data
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

    deleteApplicationHandler = async (id) => {
        console.log(id)
        // eslint-disable-next-line no-restricted-globals
        var Delete = confirm("Delete this Application?")
        if (Delete) {
            const res = await Axios.delete('/api/application/' + id)
            this.componentDidMount()
            const message = {
                message: 'Application deleted Successfully',
                classes: 'alert-danger'
            }
            this.alertsHandler(message)
        }
    }

    imageInputHandler = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    inputHandler = (e) => {
        console.log(this.state)
        if (e.target.id === "title") {
            this.setState({ title: e.target.value })
        } else {
            this.setState({ description: e.target.value })
        }
    }

    modalHandler = (application) => {
        var modalContent = <div>
            <div className="modal fade show" id="staticBackdrop" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => this.setState({ editModal: false })} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input type="email" className="form-control" id="title" aria-describedby="emailHelp" placeholder={application.title} onChange={this.inputHandler} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Current Image</label>
                                        <img src={'http://3.7.254.237:8080/' + application.image} style={{ height: 100, width: 'auto' }} className="img-thumbnail" />
                                        <input type="file" className="form-control" id="exampleInputEmail1" onChange={this.imageInputHandler} />
                                        <div id="emailHelp" className="form-text">Try Landscape Image</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <input type="text" className="form-control" id="description" placeholder={application.description} onChange={this.inputHandler} />
                                    </div>
                                </form>
                            </>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => this.setState({ editModal: false })}>Close</button>
                            <button type="button" className="btn btn-success" onClick={this.editApplicationHandler.bind(this, application)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        this.setState({
            modalContent: modalContent,
            editModal:true,
            title: application.title,
            description: application.description
        })

    }

    toggleVisiblity = async (id, currentShow) => {

        const config = {
            headers: {
                'auth-token': decryption(localStorage.getItem('token')),
            }
        }
        var applications = this.state.applications

        const response = await Axios.put('api/application/' + id,
            {
                show: !currentShow
            }
            , config)
        console.log(response)
        applications.map(application => {
            if (application._id === id) {
                application.show = !currentShow
            }
        })

        const message = {
            message: !currentShow ? 'Application is Visible' : 'Application is hidden',
            classes: !currentShow ? 'alert-success' : 'alert-danger'
        }
        this.alertsHandler(message)

        this.setState({
            applications: applications
        })

    }


    editApplicationHandler = async (application) => {

        var data = new FormData();
        if (typeof this.state.image !== 'string') {
            data.append('image', this.state.image);
        }

        data.append('title', this.state.title);
        data.append('description', this.state.description);
        data.append('show', true);
        console.log(application._id)
        const config = {
            headers: {
                'auth-token': decryption(localStorage.getItem('token')),
            }
        }
        const response = await Axios.put('api/application/' + application._id, data, config)
        console.log(response)
        this.setState({ editModal: false })
        const message = {
            message: 'Edit saved Successfully',
            classes: 'alert-success'
        }
        this.alertsHandler(message)
        this.componentDidMount()
    }

    submitApplicationHandler = async () => {
        var data = new FormData();
        data.append('image', this.state.image);
        data.append('title', this.state.title);
        data.append('description', this.state.description);
        data.append('show', true);
        const config = {
            headers: {
                'auth-token': decryption(localStorage.getItem('token')),
            }
        }
        console.log(this.state)
        const response = await Axios.post('/api/application', data, config)
        console.log(response)
        const message = {
            message: 'Application saved Successfully',
            classes: 'alert-success'
        }
        this.alertsHandler(message)
        this.componentDidMount()
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
            <div className="w-100">
                <ul className="nav nav-pills nav-fill mb-5">
                    <li className="nav-item">
                        <a className={this.state.mode === "add" ? "btn btn-sm nav-link active" : "btn btn-sm nav-link"}
                            onClick={() => this.setState({ mode: 'add' })}
                        >
                            Add New Application
                             </a>
                    </li>
                    <li className="nav-item">
                        <a className={this.state.mode === "edit" ? "btn btn-sm nav-link active" : "btn btn-sm nav-link"}
                            onClick={() => this.setState({ mode: 'edit' })}
                        >
                            Edit Applications
                             </a>
                    </li>
                </ul>
                {
                    this.state.mode === 'add'
                        ?
                        <>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="email" className="form-control" id="title" aria-describedby="emailHelp" onChange={this.inputHandler} />
                                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <input type="file" className="form-control" id="exampleInputEmail1" onChange={this.imageInputHandler} />
                                    <div id="emailHelp" className="form-text">Try Landscape Image</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" onChange={this.inputHandler} />
                                </div>
                            </form>
                            <button className="btn btn-primary" onClick={this.submitApplicationHandler}>Submit</button>
                        </>
                        :
                        <div style={{ overflowX: 'scroll' }}>
                            <table className="table table-striped table-bordered" >
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Image</th>
                                        <th>Description</th>
                                        <th colSpan="3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.applications.map(application => {
                                        return (

                                            <tr key={application._id}>
                                                <td>{application.title}</td>
                                                <td><img src={'http://3.7.254.237:8080/' + application.image} className=" h-auto w-100 img-thumbnail" /></td>
                                                <td>{application.description}</td>
                                                <td>
                                                    {
                                                        this.state.editModal
                                                            ?
                                                            this.state.modalContent
                                                            :
                                                            <button
                                                                className="btn btn-primary" onClick={this.modalHandler.bind(this,application)}>
                                                                Edit
                                                            </button>
                                                    }
                                                </td>
                                                <td><button
                                                    className={application.show ? "btn btn-danger" : "btn btn-success"}
                                                    onClick={this.toggleVisiblity.bind(this, application._id, application.show)}>
                                                    {application.show ? "Hide" : "Show"}
                                                </button>
                                                </td>
                                                <td><button className="btn btn-danger" onClick={this.deleteApplicationHandler.bind(this, application._id)}>Delete</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                }

            </div>
            </>
        )
    }
}

export default Applications
