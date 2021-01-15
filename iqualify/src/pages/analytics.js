import React, { Component } from 'react'
import axios from "axios";

export default class analytics extends Component {
    render() {
        console.log(1);
        axios.post('/', {
            status: "eligible",
            compensation: "40",
            state: "CA"
        }).then((res) => console.log(res.data)).catch((error) => console.log(error.response))
    console.log(2);
        return (
            <div>
                hello
            </div>
        )
    }
}
