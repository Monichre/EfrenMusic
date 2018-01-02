import React from 'react'
import AppStore from '../../Store/AppStore'



export const Header = (props) => (
    <header id="main-header">
        <div className="container">
            <div className="grid">
                <nav className="main-nav">
                    <div className="responsive-nav">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className="nav-links">
                        <li className="col-1 col-offset-1"><a href="profile.html" className="nav-link undefined">Audio</a></li>
                        <li className="col-1 col-offset-1"><a href="contact.html" className="nav-link undefined">Visual</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)