import * as React from 'react';

class TempConverter extends React.Component<{}, {fahrenheit: any, celcius: any}> {     

    constructor(props: any) {
        super(props);
        this.state = {
            fahrenheit: '',
            celcius: ''
        }
        
        this.cToF = this.cToF.bind(this);
        this.fToC = this.fToC.bind(this);
    }

    fToC (event: any) {
        let cel = Math.round((event.target.value - 32) * 5/9);

        this.setState({
            fahrenheit: event.target.value,
            celcius: cel
        });
    }

    cToF (event: any) {
        let fahr = Math.round((event.target.value * 9/5) + 32);

        this.setState({
            fahrenheit: fahr,
            celcius: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.fahrenheit} onChange={this.fToC}/>
                <input value={this.state.celcius} onChange={this.cToF}/>
            </div>
        );
    }    
}

export default TempConverter;