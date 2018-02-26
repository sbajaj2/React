import React, { Component } from 'react';
import styles from './Person.css'



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
        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;