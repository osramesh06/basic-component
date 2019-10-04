import React, { Component } from 'react';
import { Col, Row, Input } from 'antd';

class Forms extends Component {
    state = {
        data: null
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, ()=> console.log("this.state", this.state))
    }
    render() {
        return (
            <div>
                <Col md={20}>
                    <Row gutter={12}>
                        <Col md={12}>
                            <label>User Name</label>
                            <Input type="text" placeholder="User Name" name="username" onChange={(e) => this.handleChange(e)}></Input>
                        </Col>
                        <Col md={12}>
                            <label>Email</label>
                            <Input type="email" placeholder="Email" name="email" onChange={(e) => this.handleChange(e)}></Input>
                        </Col>
                        <Col md={12}>
                            <label>Phone Number</label>
                            <Input type="number" placeholder="Phone Number" name="phoneNumber" onChange={(e) => this.handleChange(e)}></Input>
                        </Col>
                        <Col md={12}>
                            <label>Password</label>
                            <Input type="password" placeholder="Password" name="password" onChange={(e) => this.handleChange(e)}></Input>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Forms;