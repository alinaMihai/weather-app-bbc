import React from 'react';
import { connect } from 'react-redux';
import { requestWeatherLocation } from '../actions';
import { Locations, iLocation } from '../constants';
import { AppState } from '../store';
import { StyledWeatherPage } from './styles';
import { LocationsComponent } from '../components/locationsComponent/Locations';

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
    selectLocation = (location: iLocation) => {
        this.props.requestWeatherLocation(location);
    };
    render = () => {
        return (
            <StyledWeatherPage>
                <p>Please select a location</p>
                <LocationsComponent locations={Locations} handleClick={this.selectLocation} />
            </StyledWeatherPage>
        );
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WeatherPage);
