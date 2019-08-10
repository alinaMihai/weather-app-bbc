import React from 'react';
import WeatherPage from './containers/WeatherPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <WeatherPage />
            <Footer />
        </div>
    );
}

export default App;
