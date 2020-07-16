import React, { Component } from 'react';



class Counter extends Component {

    state={
        count:0,
    }

    styles=
    {
    }

    render() { 
        const classes="";

        return (
            <React.Fragment>
                <span style={{fontSize:10}} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn-secondary btn-small">Increment</button>
             </React.Fragment>
                );
    }


    formatCount()
    {
        const {count}=this.state;
        return count===0? <h1>Zero</h1> :count;
    }
}
 
export default Counter;