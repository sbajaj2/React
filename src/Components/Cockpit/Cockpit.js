import React from 'react';
import cockpitStyles from './Cockpit.css';
import Aux from "../../hoc/Aux";
// in react 16.2, we can just use <> </> instead of aux for HOC high order component

const cockpit = (props) => {
    let btnClass = cockpitStyles.Button;

    if(props.showPersons) {
        btnClass = [cockpitStyles.Button,cockpitStyles.Red].join(' ');
    }

    const classes = [];
    if(props.persons.length <= 2){
        classes.push(cockpitStyles.red); // classes = ['red']
    }
    if(props.persons.length <= 1){
        classes.push(cockpitStyles.bold); // classes = ['red', 'bold']
    }
    return (
        <Aux>
            <h1>Hello There, Susheel Bajaj from cockpit</h1>
            <h1>{props.addTitle}</h1>
            <p className={classes.join(' ')}>To Test the classes bold and color</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </Aux>

    );
}

export default cockpit;