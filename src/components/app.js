import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Header from './header';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div> <h1 className='title'>Five-day Weather Forecast </h1></div>
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}
