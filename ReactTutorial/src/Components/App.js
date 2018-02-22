import React, {Component} from 'react';
import Person from './Person/Person';
import styles from './App.css';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id:'id1', name: 'Max', age: '28'},
            {id:'id2', name: 'Manu', age: '29'},
            {id:'id3', name: 'Bajaj', age: '32'}
        ],
        title: 'mr',
        showPersons: false
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
        let btnClass = '';

        const classes = [];
        if(this.state.persons.length <= 2){
            classes.push(styles.red); // classes = ['red']
        }
        if(this.state.persons.length <= 1){
            classes.push(styles.bold); // classes = ['red', 'bold']
        }

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return 
                        //<ErrorBoundary key={person.id}>
                            <Person
                            click={() => this.deleteNameHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)} />
                        //</ErrorBoundary>
                    })}
                </div>
            );
            btnClass = styles.Red;
        }
        return (
            <div className={styles.App}>
                <h1>Hello There, Susheel Bajaj</h1>
                <p className={classes.join(' ')}>To Test the classes bold and color</p>
                <button className={btnClass}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}


export default App