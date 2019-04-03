import React from 'react';
import ReactDOM from 'react-dom';

import { Arduino } from './Body/arduino';
import { Game } from './Body/game';
import { Home } from './Body/home';
import { Simulation } from './Body/simulation';
import { Utilities } from './Body/utilities';
import { Web } from './Body/web';
import { Wood } from './Body/wood';

import './index.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "Personal Projects" };
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle(newName) {
        this.setState({
            title: newName
        })
    }

    render() {
        return (
            <div>
                <div className="main-header">
                    <h1><strong>{ this.state.title }</strong></h1>
                </div>
                <div className="dropdown">
                    <ul>
                        <li onClick={() => this.changeTitle("Personal Projects")}>Home Page</li>
                        <li onClick={() => this.changeTitle("Web Development")}>Web Development</li>
                        <li onClick={() => this.changeTitle("Utilities")}>Utilities</li>
                        <li onClick={() => this.changeTitle("Simulations")}>Simulation</li>
                        <li onClick={() => this.changeTitle("Game Development")}>Game Development</li>
                        <li onClick={() => this.changeTitle("Arduino")}>Arduino</li>
                        <li onClick={() => this.changeTitle("Woodworking")}>Woodworking</li>
                    </ul>
                </div>
                <Body title={this.state.title} />
            </div>
        )
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.updateBody = this.updateBody.bind(this);
    }

    updateBody() {
        if (this.props.title === "Personal Projects") {
            return (
                <div>
                    <Home />
                </div>
            )
        } else if (this.props.title === "Web Development") {
            return (
                <div>
                    <Web />
                </div>
            )
        } else if (this.props.title === "Utilities") {
            return (
                <div>
                    <Utilities />
                </div>
            )
        } else if (this.props.title === "Simulations") {
            return (
                <div>
                    <Simulation />
                </div>
            )
        } else if (this.props.title === "Game Development") {
            return (
                <div>
                    <Game />
                </div>
            )
        } else if (this.props.title === "Arduino") {
            return (
                <div>
                    <Arduino />
                </div>
            )
        } else if (this.props.title === "Woodworking") {
            return (
                <div>
                    <Wood />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.updateBody()}
            </div>
        )
    }
}

class ToRender extends React.Component {
    render() {
        return (
            <div>
                <Header />

            </div>
        )
    }
}


ReactDOM.render(<ToRender />, document.getElementById('root'));

