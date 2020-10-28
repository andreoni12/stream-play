import React, { Component } from 'react';
import './styles.css'

export default class Loader extends Component {
    render() {
        return (
            <div className="wrapper">
                <span className="circle circle-1"></span>
                <span className="circle circle-2"></span>
                <span className="circle circle-3"></span>
                <span className="circle circle-4"></span>
                <span className="circle circle-5"></span>
                <span className="circle circle-6"></span>
                <span className="circle circle-7"></span>
                <span className="circle circle-8"></span>
            </div>
        )
    }

}