import React from 'react';
import ConnectedWeatherPage from './containers/WeatherPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function App() {
    return (
        <div className='App'>
            <Header />
            <ConnectedWeatherPage />
            <Footer />
        </div>
    );
}

export default App;
