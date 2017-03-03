import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import asideLeft from './asideRight.css';

export default class AsideRight extends React.Component {
    render() {
        return (
            <div className='asideRight'>
                <div className='topBlock'>
                    <p>So fresh and so pink</p>
                </div>
                <div className="secondBlock"></div>
                <div className="thirdBlock">
                    <div className='leftBlock'></div>
                    <div className='rightBlock'>
                        <p className='text'>Shop color</p>
                        <p className='text2'>of the</p>
                        <p className='text2'>month </p>
                        <div className='blackbutton'></div>
                    </div>
                </div>
                <div className="fourthBlock"></div>
            </div>
        );
    }
}
