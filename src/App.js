import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import './App.css'
import './Core.css'
import { BrowserRouter, Route } from 'react-router-dom'
import AppStore from './Store/AppStore'
import AppDispatcher from './Dispatch/Dispatcher'
import routes from './routes'


const Loader = () => (
	<div id="Loader">
		<div className="circ">
			<div className="load">Loading...</div>
			<div className="hands"></div>
			<div className="body"></div>
			<div className="head">
				<div className="eye"></div>
			</div>
		</div>
	</div>
)

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}
	
	componentDidMount() {
		AppStore.addChangeListener(this._onChange.bind(this))
	}

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange.bind(this))
	}

	getStore() {
		AppDispatcher.dispatch({
			action: 'get-app-store'
		})
	}
	componentWillMount() {
		this.getStore()
	}

	_onChange() {
		this.setState(AppStore)
	}
	render() {

		const data = AppStore.data

		if (!data.ready) {
			this.getStore()
			return <div><Loader /></div>
		} else {
			return (
				<BrowserRouter>
					{routes}
				</BrowserRouter>
			)
		}

	}
}


