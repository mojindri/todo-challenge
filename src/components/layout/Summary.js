import React, {Component} from 'react';
import axios from "axios";

class Summary extends Component {
    state = {
        completedCount: 0,
        UncompletedCount: 0
    }

    constructor(props) {
        super(props);
        this.base_uri = "https://jsonplaceholder.typicode.com/todos";
    }

    //NICE TO Have: implement count of completed and uncompleted tasks
    //axios.get(this.base_uri + '?_limit=10').then(res => {
    //        const data = res.data;
    //       //note: you can use https://jsonplaceholder.typicode.com/todos to look at json object structure.
    //   });


    render() {
        return (
            <div style={summaryStyle}>
                <p style={linkStyle}>{this.state.completedCount} Completed Tasks </p>
                <p style={linkStyle}>{this.state.UncompletedCount} Uncompleted Tasks </p>
            </div>
        )
    }
}

const summaryStyle = {
    background: '#806e6e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'

}
export default Summary;