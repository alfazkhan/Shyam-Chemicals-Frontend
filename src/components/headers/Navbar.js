import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light" aria-label="Second navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Always expand</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        
                    </div>
                        <ul className="navbar-nav me-auto">
                        <button type="button" className="btn btn-danger">Sign Out</button>
                        </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
