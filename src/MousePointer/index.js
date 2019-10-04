import React, { Component } from "react";

import "./index.css"

class MousePointer extends Component {
    state = {
        activePlace: null,
        top: 0,
        left: 0
    }

    handleMouse = e => {
        this.setState({
            top: e.clientY,
            left: e.clientX
        })
    }

    render() {
        const { top, left } = this.state
        return (
            <div className="screen" onMouseMove={e => this.handleMouse(e)}>
                <div className="active" style={{ top: top, left: left }}></div>
            </div>
        );
    }
}

export default MousePointer;