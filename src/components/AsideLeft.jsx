import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import asideLeft from './asideLeft.css';

export default class AsideLeft extends React.Component {
    render() {

        return (
            <div className='asideLeft'>
                <div className='block3'>
                    <div className='leftBlock'></div>
                    <div className='topBlock'>
                        <div className='topLeftBlock'></div>
                        <div className='topRightBlock'></div>
                    </div>
                    <div className='downBlock'>
                        <p>Shop color of the month</p>
                        <div className='blackbutton'></div>
                    </div>
                    <div className='downBlock2'>
                        <div className='firstBlock'></div>
                        <div className="secondBlock"></div>
                        <div className="thirdBlock"></div>
                    </div>
                    <div className='downBlock3'>
                        <div className='firstBlock'>
                            <p className='text'>Always be in pink condition</p>
                        </div>
                        <div className="secondBlock"></div>
                    </div>
                </div>
                <div className='block4'>
                    <div className='firstBlock'></div>
                    <div className='downBlock4'>
                        <div className='secondBlock'></div>
                        <div className='thirdBlock'></div>
                        <div className='fourthBlock'></div>
                    </div>
                </div>
            </div>
        );
    }
}
