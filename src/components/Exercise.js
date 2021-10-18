import React, { Component } from 'react'

export default class Exercise extends Component {
    constructor(){
        super()
        this.state = {
            exercises: []
        }
    }

    componentDidMount(){
        fetch('/api/exercises')
            .then(res => res.json())
            .then(exercises => this.setState({exercises}, () => console.log('Exercises fetched..', exercises)))
    }

    render() {
        return (
            <div>
                <h1>Exercises</h1>
                <ul>
                    {this.state.exercises.map(exercise => 
                        <li key={exercise.id}>{exercise.exercise} {exercise.weight}</li>
                    )}
                </ul>
            </div>
        )
    }
}
