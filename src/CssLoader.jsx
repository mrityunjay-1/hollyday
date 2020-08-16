import React from 'react';
import './index.css';

const CssLoader = () => {
    return (
    <>
        <div className="Loader_Div">
            <div className="mover1" style={{display: 'grid', placeItems: 'center', width: '6rem', height: '6rem', background: 'transparent', border: '7px solid white', borderRadius: '50px', borderTop: '7px solid green', borderBottom: '7px solid green'}}> 
                <div  className="mover2" style={{width: '4rem', height: '4rem', background: 'transparent', border: '7px solid white', borderRadius: '50px', borderTop: '7px solid green', borderBottom: '7px solid green'}}>  </div>
             </div>
        </div>
    </>
    );
}

export default CssLoader;