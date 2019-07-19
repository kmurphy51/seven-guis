import * as React from 'react';

class Counter extends React.Component {
    count: number;

    constructor(props: any) {
        super(props);
        this.count = 0;
    }

    render() {
        return (
            <div>
                <input value={this.count} readOnly/>
                <button onClick={() => this.setState({count: this.count++})}>Increase</button>
            </div>
        );
    }    
}

export default Counter;