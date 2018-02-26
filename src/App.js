import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppStore from "./Flux/Store/AppStore";
import AppDispatcher from "./Flux/Dispatch/Dispatcher";
import Home from "./Containers/Main/Home";
import routes from "./routes";
import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import "./css/Core.css";

const Loader = () => (
  <div id="Loader">
    <div className="circ">
      <div className="load">Loading...</div>
      <div className="hands" />
      <div className="body" />
      <div className="head">
        <div className="eye" />
      </div>
    </div>
  </div>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

  getStore() {
    AppDispatcher.dispatch({
      action: "get-app-store"
    });
  }
  componentWillMount() {
    this.getStore();
  }

  _onChange() {
    this.setState(AppStore);
  }

  render() {
    const { data } = AppStore;
    console.log(data);
    if (!data.ready) {
      this.getStore();
    }
    return (
      <BrowserRouter {...data}>
        <Route path="/" render={props => <Home key="home" {...data} {...props} />} />
      </BrowserRouter>
    );
  }
}
