import React, { Component } from 'react'
import Axios from '../../Axios'
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { decryption } from 'helpers/encryption';
import { Paper } from '@material-ui/core';
var FormData = require('form-data');

const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-center rounded-t-lg`}
`;

export class SlideShow extends Component {

    state = {
        slideshow: [],
        mode: 'add',
        name: '',
        image: "",
        show: true,
        editModal: false,
        modalContent: null,
        alerts: []
    }

    componentDidMount = async () => {
        const slideshow = await Axios.get('api/slideshow')
        this.setState({
            slideshow: slideshow.data
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

    deleteImageHandler = async (id) => {
        console.log(id)
        // eslint-disable-next-line no-restricted-globals
        var Delete = confirm("Delete this Application?")
        if (Delete) {
            const config = {
                headers: {
                    'auth-token': decryption(localStorage.getItem('token')),
                }
            }
            const res = await Axios.delete('/api/slideshow/' + id, config)
            this.componentDidMount()
            console.log(res)
            const message = {
                message: 'Image deleted Successfully',
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

        this.setState({ name: e.target.value })

    }

    modalHandler = (Image) => {
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
                                        <label className="form-label">Current Image</label>
                                        <img src={'http://3.7.254.237:8080/' + Image.image} style={{ height: 100, width: 'auto' }} className="img-thumbnail" />
                                        <input type="file" className="form-control" id="exampleInputEmail1" onChange={this.imageInputHandler} />
                                        <div id="emailHelp" className="form-text">Try Landscape Image</div>
                                    </div>
                                    {/* <div className="mb-3">
                                        <label className="form-label">Make Image visible</label>
                                        <input type="checkbox" className="form-control" id="description" placeholder={Image.show} onChange={this.inputHandler} />
                                    </div> */}
                                </form>
                            </>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => this.setState({ editModal: false })}>Close</button>
                            <button type="button" className="btn btn-success" onClick={this.editImageHandler.bind(this, Image)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        this.setState({
            modalContent: modalContent,
            editModal: true,
            title: Image.title,
            description: Image.description
        })

    }

    toggleVisiblity = async (id, currentShow) => {

        const config = {
            headers: {
                'auth-token': decryption(localStorage.getItem('token')),
            }
        }
        var slideshow = this.state.slideshow

        const response = await Axios.put('api/slideshow/' + id,
            {
                show: !currentShow
            }
            , config)
        console.log(response)
        slideshow.map(Image => {
            if (Image._id === id) {
                Image.show = !currentShow
            }
        })

        const message = {
            message: !currentShow ? 'Image is Visible' : 'Image is hidden',
            classes: !currentShow ? 'alert-success' : 'alert-danger'
        }
        this.alertsHandler(message)

        this.setState({
            slideshow: slideshow
        })



    }


    editImageHandler = async (Image) => {

        var data = new FormData();
        if (typeof this.state.image !== 'string') {
            data.append('image', this.state.image);
        }

        console.log(Image._id)
        const config = {
            headers: {
                'auth-token': decryption(localStorage.getItem('token')),
            }
        }
        const response = await Axios.put('api/slideshow/' + Image._id, data, config)
        console.log(response)
        const message = {
            message: 'Edit saved Successfully',
            classes: 'alert-success'
        }
        this.alertsHandler(message)
        this.setState({
            editModal: false
        })

        this.componentDidMount()
    }

    submitImageHandler = async () => {
        var data = new FormData();
        data.append('image', this.state.image);
        data.append('title', this.state.title);
        data.append('description', this.state.description);
        data.append('show', false);
        const config = {
            headers: {
                'auth-token': decryption(localStorage.getItem('token')),
            }
        }
        console.log(this.state)
        const response = await Axios.post('/api/slideshow', data, config)
        console.log(response)
        const message = {
            message: 'Image saved Successfully',
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
                <ul className="nav nav-pills nav-fill mb-5">
                    <li className="nav-item">
                        <a className={this.state.mode === "add" ? "btn btn-sm nav-link active" : "btn btn-sm nav-link"}
                            onClick={() => this.setState({ mode: 'add' })}
                        >
                            Add New Slideshow Image
                             </a>
                    </li>
                    <li className="nav-item">
                        <a className={this.state.mode === "edit" ? "btn btn-sm nav-link active" : "btn btn-sm nav-link"}
                            onClick={() => this.setState({ mode: 'edit' })}
                        >
                            Edit Slideshow
                             </a>
                    </li>
                </ul>
                {
                    this.state.mode === 'add'
                        ?
                        <>
                            <form>

                                <div className="mb-3">
                                    <label className="form-label">Current Image</label>
                                    <input type="file" className="form-control" id="exampleInputEmail1" onChange={this.imageInputHandler} />
                                    <div id="emailHelp" className="form-text">Try Landscape Image</div>
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={this.state.show} onChange={(e)=>this.setState({show: e.target.checked})} />
                                    <label className="form-check-label">Make Image Visible</label>
                                </div> */}
                            </form>
                            <button className="btn btn-primary" onClick={this.submitImageHandler}>Add Image</button>
                        </>
                        :
                        <div style={{ overflowX: 'scroll' }}>
                            <table className="table table-striped table-bordered" >
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th colSpan="3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.slideshow.map(Image => {
                                        return (

                                            <tr key={Image._id}>
                                                <td><img src={'http://3.7.254.237:8080/' + Image.image} className="img-thumbnail" style={{ height: 100, width: 'auto' }} /></td>
                                                {/* <td>{Image.description}</td> */}
                                                <td>
                                                    {
                                                        this.state.editModal
                                                            ?
                                                            this.state.modalContent
                                                            :
                                                            <button
                                                                className="btn btn-primary" onClick={this.modalHandler.bind(this, Image)}>
                                                                Edit
                                                            </button>
                                                    }
                                                </td>
                                                <td><button
                                                    className={Image.show ? "btn btn-danger" : "btn btn-success"}
                                                    onClick={this.toggleVisiblity.bind(this, Image._id, Image.show)}>
                                                    {Image.show ? "Hide" : "Show"}
                                                </button>
                                                </td>
                                                <td><button className="btn btn-danger" onClick={this.deleteImageHandler.bind(this, Image._id)}>Delete</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                }

            </>
        )
    }
}

export default SlideShow
