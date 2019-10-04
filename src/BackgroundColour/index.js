import React, { Component } from "react";
import "./BackgroundColor.css"
import { Input, Button } from "antd";

class BackgroundComponent extends Component {
    state = {
        activeColor: null,
        colorList: [],
        activeTypeaHead: false,
        keyWords: "",
    }

    componentDidMount() {
        fetch("https://api.myjson.com/bins/19vrs7")
            .then(res => res.json())
            .then(result => {
                this.setState({
                    colorList: result.colorsList
                })
            })
    }

    handleChange = e => {
        console.log(e)
        this.setState({
            activeColor: e
        }, () => console.log("this.state.activeColor", this.state.activeColor))
    }

    renderList = () => {
        const { colorList, keyWords } = this.state;
        return (
            <ul className="dropdown">
                {colorList.filter(list => list.colorName.toLowerCase().includes(keyWords.toLowerCase())).map((list, i) => {
                    return <li key={i} onClick={e => this.handleChange(list.colorCode)}>{list.colorName}</li>
                })}
            </ul>
        )
    }

    render() {
        const { activeColor, activeTypeaHead } = this.state;

        return (
            <div className="backgroundContainer" style={{ backgroundColor: activeColor }}>
                <Input
                    placeholder="Search"
                    onChange={(e) => this.setState({ keyWords: e.target.value })}
                    onFocus={e => this.setState({ activeTypeaHead: true })}
                    onBlur={e => this.setState({ activeTypeaHead: true })}
                    style={{ width: "30%" }}
                    addonAfter={
                        <Button icon="search" type="primary"></Button>
                    }
                />
                {activeTypeaHead && this.renderList()}
            </div>
        );
    }
}

export default BackgroundComponent;