import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor (props) {
        super(props);
        console.log("[Persons.js] inside App constructor")
    }

    componentDidMount() {
        console.log("[Persons.js] inside App componentDidMount");
    }

    componentWillMount() {
        console.log("[Persons.js] inside App componentWillMount");
    }
    render () {
        console.log("[Persons.js] inside App render");
        return this.props.persons.map((person, index) => { //stateless component or functional
            return <Person
                click={() => this.props.click(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.change(event, person.id)} />
        });
    }
}

export default Persons;
