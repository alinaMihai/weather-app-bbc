import React from 'react';
import { connect } from 'react-redux';
import { requestWeatherLocation } from '../actions';
import { Locations, iLocation } from '../constants';
import { AppState } from '../store';

interface iProps {
    location?: AppState;
}

interface iDispatch {
    requestWeatherLocation: (location: iLocation) => any;
}

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any): iDispatch => ({
    requestWeatherLocation: (location: iLocation) => dispatch(requestWeatherLocation(location)),
});

export class WeatherPage extends React.Component<iProps & iDispatch> {
    render() {
        return (
            <div>
                <p>Please select a location</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WeatherPage);
