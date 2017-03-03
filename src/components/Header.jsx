import React, { Component } from 'react';
import one from './img/one.jpg';
import ReactDOM from 'react-dom';
import header from './header.css';



export default class Header extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="navbar">
                    <h1>color of the month</h1>
                </div>
                <div className="header">
                    <div className="block1" >
                    </div>
                    <div className="block2">
                        <aside className='tintsOfRose'>
                            <p className='title'>Tint</p>
                            <p className='title2'>s of p</p>
                            <p className='title'>ink</p>
                        </aside>
                        <aside className="smallText">
                            <p>We're giving the pink light on these springy styles</p>
                        </aside>
                        <aside className="smallText2" >
                            <p className="shopAll">Shop All</p>
                            <p className="blackbutton"></p>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}
