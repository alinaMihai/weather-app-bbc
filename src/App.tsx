import React from 'react';
import WeatherPage from './containers/WeatherPage';
import { Header } from './components/header/Header';

function App() {
    return (
        <div className='App'>
            <Header />
            <WeatherPage />
        </div>
    );
}

export default App;
