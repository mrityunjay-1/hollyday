import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink } from 'react-router-dom';
import CompA from './CompA';
import './index.css';

ReactDOM.render(
    <>

        <BrowserRouter>
            <div style={{display: 'flex', justifyContent: 'center', backgroundImage: 'linear-gradient(to top right, cyan, lightblue)', fontSize: '2.2rem'}}>
                <NavLink to="/compb" style={{textDecoration: 'none', border: '1px solid grey', padding: '0 2rem'}}> Goto Component B </NavLink> 
            </div>
            <CompA />
        </BrowserRouter>

    </>, document.getElementById("root")
);