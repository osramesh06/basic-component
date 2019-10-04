import React, { Component } from "react";
import { Input, Button, Row, Col } from "antd";

import "./SortingFilter.css"

class SortingFilter extends Component {
    state= {
        keyWords: ""
    }

    render() {
        const cards = [
            {
                name: "Oppo Fll",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5JdsSaDsMkRjJsLErbbMD-h8N66y-J9ZHI7XNw77G5xfw0xPI_PIG4L1dUq8jYgvU_baN0lytL_2EjY1sglo33coqzvC0pR9sSyi3YYxC2KFZ6TxToPny&usqp=CAc",
                Price: 12000
            },
            {
                name: "Oppo F11 Pro",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5JdsSaDsMkRjJsLErbbMD-h8N66y-J9ZHI7XNw77G5xfw0xPI_PIG4L1dUq8jYgvU_baN0lytL_2EjY1sglo33coqzvC0pR9sSyi3YYxC2KFZ6TxToPny&usqp=CAc",
                Price: 18000
            },
            {
                name: "One Plus 7",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5JdsSaDsMkRjJsLErbbMD-h8N66y-J9ZHI7XNw77G5xfw0xPI_PIG4L1dUq8jYgvU_baN0lytL_2EjY1sglo33coqzvC0pR9sSyi3YYxC2KFZ6TxToPny&usqp=CAc",
                Price: 33000
            },
            {
                name: "Oppo K3",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5JdsSaDsMkRjJsLErbbMD-h8N66y-J9ZHI7XNw77G5xfw0xPI_PIG4L1dUq8jYgvU_baN0lytL_2EjY1sglo33coqzvC0pR9sSyi3YYxC2KFZ6TxToPny&usqp=CAc",
                Price: 8000
            },
            {
                name: "One Plus 7T",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5JdsSaDsMkRjJsLErbbMD-h8N66y-J9ZHI7XNw77G5xfw0xPI_PIG4L1dUq8jYgvU_baN0lytL_2EjY1sglo33coqzvC0pR9sSyi3YYxC2KFZ6TxToPny&usqp=CAc",
                Price: 38000
            },
            {
                name: "One Plus 6",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5JdsSaDsMkRjJsLErbbMD-h8N66y-J9ZHI7XNw77G5xfw0xPI_PIG4L1dUq8jYgvU_baN0lytL_2EjY1sglo33coqzvC0pR9sSyi3YYxC2KFZ6TxToPny&usqp=CAc",
                Price: 23000
            },
            {
                name: "One Plus 6T",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5JdsSaDsMkRjJsLErbbMD-h8N66y-J9ZHI7XNw77G5xfw0xPI_PIG4L1dUq8jYgvU_baN0lytL_2EjY1sglo33coqzvC0pR9sSyi3YYxC2KFZ6TxToPny&usqp=CAc",
                Price: 28000
            },
        ]
        return (
            <div>
                <Input
                    placeholder="Search"
                    onChange={(e) => this.setState({keyWords : e.target.value})}
                    style={{ width: "30%" }}
                    addonAfter={
                        <Button icon="search" type="primary"></Button>
                    }
                />
                <Row>
                    {cards.sort((a, b) => (a.Price - b.Price)).filter(list => list.name.toLowerCase().includes(this.state.keyWords)).map((list, index) => (
                        <Col md={4}>
                            <div className="card">
                                <img src={list.image} />
                                <h3>{list.name}</h3>
                                <p>$ {list.Price}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default SortingFilter;