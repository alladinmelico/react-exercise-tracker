import React from 'react'
import axios from 'axios'

export default class CreateExercises extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e){
        this.setState({username: e.target.value})
    }

    render() {
        return (
            <div>
                <p>Create exercises</p>
            </div>
        )
    }
}