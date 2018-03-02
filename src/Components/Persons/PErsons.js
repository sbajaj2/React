import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
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

    componentWillReceiveProps() {
        console.log("[UPDATE Persons.js] inside App componentWillReceiveProps");
    }

    // shouldComponentUpdate(nextProps, nextState) { //using pureComponent instead
    //     console.log("[UPDATE Persons.js] inside App shouldComponentUpdate", nextProps, nextState);
    //     //return true; //return false will not update the dom
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.change !== this.props.change ||
    //         nextProps.click !== this.props.click;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] inside App componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE Persons.js] inside App componentDidUpdate");
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
