import React, { createContext } from 'react';
import {Route, Switch} from 'react-router-dom';
import CompB from './CompB';

const Context1 = createContext();
const CompA = () => {
    
    return (
        <>
            
            <Context1.Provider value={{name: "Mrityunjay", roll: 25}}>
                
                <Switch>
                    <Route exact path="/compb" component={CompB} />
                </Switch>
            </Context1.Provider>
        </>
    );
}

export default CompA;
export { Context1 };