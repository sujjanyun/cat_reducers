import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petName: '',
            petActivity: ''
        }
    }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <label>Pet Name <input type="text" name="petName" value={this.state.petName} onChange={this._handleChange}></input></label>
                <label>Pet Activity <input type="text" name="petActivity" value={this.state.petActivity} ></input></label>
            </form>
        )
    }
}