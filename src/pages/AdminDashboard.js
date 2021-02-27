import React, { Component } from 'react'
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import tw from "twin.macro";
import Slideshow from 'components/dashboard/Slideshow';
import Applications from 'components/dashboard/Applications';
import Feedbacks from 'components/dashboard/Feedbacks';
import ContactUs from 'components/dashboard/ContactUs';
import Users from 'components/dashboard/Users';
const Subheading = tw(SubheadingBase)`mb-4 text-xl text-left mt-6 text-gray-900`;

export class AdminDashboard extends Component {

    state = {
        pageIndex: 2,
        dashboardPage: <Slideshow/>,
        pageHeading: "Slideshow"
    }

    componentDidMount() {
        const temp = {
            target:{
                parentElement:{
                    id: this.state.pageIndex
                }
            }
        }
        this.pageChangeHandler(temp)
    }
    

    pageChangeHandler = (e) => {
        const pageIndex = parseInt(e.target.parentElement.id)
        var dashboardPage = null
        var pageHeading = null
        switch (pageIndex) {
            case 0:
                dashboardPage= <Slideshow />;
                pageHeading = "Slideshow"
                break;
            case 1:
                dashboardPage= <Applications />;
                pageHeading = "Applications"
                break;
            case 2:
                dashboardPage= <Feedbacks />;
                pageHeading = "Feedbacks"
                break;
            case 3:
                dashboardPage= <ContactUs />;
                pageHeading = "Contact Us"
                break;
            case 4:
                dashboardPage= <Users />;
                pageHeading = "Users"
                break;
        }
        this.setState({
            dashboardPage: dashboardPage,
            pageHeading: pageHeading
        })
    }


    render() {
        return (
            <div>

                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" >Shyam Chemicals</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="btn btn-danger btn-sm" >Sign out</a>
                        </li>
                    </ul>
                </header>

                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column" >
                                    <li className="nav-item" id="0" onClick={this.pageChangeHandler} style={{cursor: 'pointer'}}>
                                        <Subheading>Slideshow</Subheading>
                                    </li>
                                    <li className="nav-item" id="1" onClick={this.pageChangeHandler} style={{cursor: 'pointer'}} >
                                        <Subheading>Applications</Subheading>
                                    </li>
                                    <li className="nav-item" id="2" onClick={this.pageChangeHandler} style={{cursor: 'pointer'}}>
                                        <Subheading>Feedbacks</Subheading>
                                    </li>
                                    <li className="nav-item" id="3" onClick={this.pageChangeHandler} style={{cursor: 'pointer'}}>
                                        <Subheading>Contact Us</Subheading>
                                    </li>
                                    <li className="nav-item" id="4" onClick={this.pageChangeHandler} style={{cursor: 'pointer'}}>
                                        <Subheading>Users</Subheading>
                                    </li>


                                </ul>


                            </div>
                        </nav>

                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">{this.state.pageHeading}</h1>
                            </div>
                            {this.state.dashboardPage}




                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDashboard
