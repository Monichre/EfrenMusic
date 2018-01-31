import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

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
                        <li className="col-1 col-offset-1">
                            <Dropdown text='Audio' className='nav-link undefined audio'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Dropdown text='Releases'>
                                            <Dropdown.Menu>
                                                <Dropdown.Item className="text__inner">Pye Luis</Dropdown.Item>
                                                <Dropdown.Item className="text__inner">Collaborations</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="col-1 col-offset-1">
                            <Dropdown text='Visual' className='nav-link undefined visual'>
                                <Dropdown.Menu>
                                    <Dropdown.Item className="text__inner" onClick={props.showModal}>Photography</Dropdown.Item>
                                    <Dropdown.Item className="text__inner">Video</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)

