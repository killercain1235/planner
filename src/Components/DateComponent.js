import React, { Component } from 'react';
import './DateComponent.css'

class DateComponent extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDate(),
            month = today.toLocaleString('default', { month: 'long' }),
            year = today.getFullYear();

        this.state = {
            date: date,
            month: month,
            year: year
        };
    }

    
    render() {
        return (
            <div className='todaydate'>
                {this.state.date} {this.state.month} {this.state.year}
            </div>
        )
    }
}

export default DateComponent
