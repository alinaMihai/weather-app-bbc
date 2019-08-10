import React from 'react';
import { connect } from 'react-redux';
import { requestWeatherLocation } from '../actions';
import { Locations, iLocation } from '../constants';
import { AppState } from '../store';
import { StyledWeatherPage } from './styles';
import { LocationsComponent } from '../components/locationsComponent/Locations';
import { WeatherSummary } from '../components/weatherSummary/weatherSummary';

interface iProps extends AppState {}

interface iDispatch {
    requestWeatherLocation: (location: iLocation) => any;
}

const mapStateToProps = (state: AppState): iProps => state;
const mapDispatchToProps = (dispatch: any): iDispatch => ({
    requestWeatherLocation: (location: iLocation) => dispatch(requestWeatherLocation(location)),
});

export class WeatherPage extends React.Component<iProps & iDispatch> {
    selectLocation = (location: iLocation) => {
        this.props.requestWeatherLocation(location);
    };
    render = () => {
        const { currentLocation, weatherInfo } = this.props.location;
        return (
            <StyledWeatherPage>
                <div>
                    <span>Choose location to see weather summary:</span>
                    <LocationsComponent locations={Locations} handleClick={this.selectLocation} />
                </div>
                {currentLocation && weatherInfo && (
                    <WeatherSummary location={currentLocation} weatherSummary={weatherInfo} />
                )}
            </StyledWeatherPage>
        );
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WeatherPage);
