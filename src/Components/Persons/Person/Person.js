import React, { Component } from 'react';
import styles from './Person.css';
//import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/anotherwithClass';
import PropTypes from 'prop-types';



class Person extends Component {
    constructor (props) {
        super(props);
        console.log("[Person.js] inside App constructor")
    }

    componentDidMount() {
        console.log("[Person.js] inside App componentDidMount");
    }

    componentWillMount() {
        console.log("[Person.js] inside App componentWillMount");
    }
    render () {
        console.log("[Person.js] inside App render");
        return (<Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};

export default withClass(Person,styles.Person);