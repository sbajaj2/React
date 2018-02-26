import React from 'react';
import cockpitStyles from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';

    if(props.showPersons) {
        btnClass = cockpitStyles.Red;
    }

    const classes = [];
    if(props.persons.length <= 2){
        classes.push(cockpitStyles.red); // classes = ['red']
    }
    if(props.persons.length <= 1){
        classes.push(cockpitStyles.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={cockpitStyles.Cockpit}>
            <h1>Hello There, Susheel Bajaj from cockpit</h1>
            <h1>{props.addTitle}</h1>
            <p className={classes.join(' ')}>To Test the classes bold and color</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>

    );
}

export default cockpit;