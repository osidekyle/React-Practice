import React, { Component } from 'react';



class Counter extends Component {

    state={
        count:0,
    }

    styles=
    {
    }

    render() { 
        let classes="badge m-2 badge-";
        classes+=(this.state.count===0) ? "warning" : "primary";

        return (
            <React.Fragment>
                <span style={{fontSize:10}} className={classes}>{this.formatCount()}</span>
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