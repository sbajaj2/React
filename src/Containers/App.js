import React, {PureComponent} from 'react';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import styles from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
//import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent { //stateful component
    constructor (props) {
        super(props);
        console.log("[App.js] inside App constructor", props)
        this.state = {
            persons: [
                {id:'id1', name: 'Max', age: '28'},
                {id:'id2', name: 'Manu', age: '29'},
                {id:'id3', name: 'Bajaj', age: '32'}
            ],
            title: 'mr',
            showPersons: false
        }
    }

    componentDidMount() {
        console.log("[App.js] inside App componentDidMount");
    }

    componentWillMount() {
        console.log("[App.js] inside App componentWillMount");
    }

    // shouldComponentUpdate(nextProps, nextState) { using PureComponent
    //     console.log("[UPDATE App.js] inside App shouldComponentUpdate", nextProps, nextState);
    //     //return true; //return false will not update the dom
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE App.js] inside App componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE App.js] inside App componentDidUpdate");
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
            });

        const localperson = {
            ...this.state.persons[personIndex]
        };

        //const person = Object.assign({}, this.state.persons[personIndex]);

        localperson.name = event.target.value;

        const personChanged = [...this.state.persons];
        personChanged[personIndex] = localperson;

        this.setState({persons: personChanged});


    }

switchNameHandler  = (newname) => {
        //console.log('was Clicked');
    this.setState({
            persons: [
                {name: newname, age: '28'},
                {name: 'Manu', age: '29'},
                {name: 'Bajaj', age: '31'}
            ]
        });
}

deleteNameHandler = (personIndex) => {
        //const persons = this.state.persons;
    const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
}

togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
}

    render() {
        // let btnClass = '';
        //
        // const classes = [];
        // if(this.state.persons.length <= 2){
        //     classes.push(styles.red); // classes = ['red']
        // }
        // if(this.state.persons.length <= 1){
        //     classes.push(styles.bold); // classes = ['red', 'bold']
        // }
        console.log("[App.js] inside App render");

         let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        click={this.deleteNameHandler}
                        change={this.nameChangeHandler}/>
                </div>
            );
            // btnClass = styles.Red;
        }
        return (
            <WithClass classes={styles.App}>
                {/*another hoc example*/}
                <button onClick={() => {this.setState({showPersons : true})}}>Show Persons</button>
                <Cockpit
                    addTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons = {this.state.persons}
                    clicked ={this.togglePersonHandler}/>
                {/*<h1>Hello There, Susheel Bajaj</h1>*/}
                {/*<p className={classes.join(' ')}>To Test the classes bold and color</p>*/}
                {/*<button className={btnClass}*/}
                    {/*onClick={this.togglePersonHandler}>Toggle Persons</button>*/}
                {persons}
            </WithClass>
        );
    }
}


export default App