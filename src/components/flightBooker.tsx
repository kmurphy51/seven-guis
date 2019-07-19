import * as React from 'react';
import './flightBooker.css';

class FlightBooker extends React.Component<{}, {flightOption: string, departure: string, returnFlight: string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            flightOption: 'oneway',
            departure: '',
            returnFlight: ''
        }

        this.changeFlightOption = this.changeFlightOption.bind(this);
        this.setDepartureDate = this.setDepartureDate.bind(this);
        this.setReturnDate = this.setReturnDate.bind(this);
    }

    changeFlightOption(event: any) {
        this.setState({flightOption: event.target.value});
    }

    setDepartureDate(event: any) {
        this.setState({departure: event.target.value});
    }

    setReturnDate(event: any) {
        this.setState({returnFlight: event.target.value});
    }

    checkFlight() {
        if(this.state.flightOption === 'oneway') {
            return new Date(this.state.departure) <= new Date();
        } else {
            return (new Date(this.state.departure) <= new Date()) || (new Date(this.state.returnFlight) <= new Date(this.state.departure));
        }
    }

    bookFlight() {
        if(this.state.flightOption === 'oneway') {
            alert(`Your one way flight departs on ${this.state.departure}`);
        } else {
            alert(`Your round trip flight departs on ${this.state.departure} and returns on ${this.state.returnFlight}`);
        }
    }

    render() {
        const flight = this.state.flightOption;
        const departure = this.state.departure;
        const returnFlight = this.state.returnFlight;
        const invalidFlight = this.checkFlight();
        const invalidReturn = new Date(this.state.returnFlight) <= new Date(this.state.departure);
        return(
            <section>
                <select onChange={this.changeFlightOption}>
                    <option value="oneway">One Way Flight</option>
                    <option value="roundtrip">Round Trip</option>
                </select>
                <input type="date" value={departure} onChange={this.setDepartureDate}/>
                <input type="date" value={returnFlight} onChange={this.setReturnDate} disabled={flight ==='oneway'}/>
                <button disabled={(!departure) || invalidFlight} onClick={this.bookFlight}>Book Flight</button>
            </section>
        );
    }
}

export default FlightBooker;