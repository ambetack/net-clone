//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
//import Row from './Row.css'

function App() {
  return (
    <div className="App">
      {/* Nav */}
     <Banner/>

      { /* Banner */}
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title ="Comedey Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ="Documentation" fetchUrl={requests.fetchDocumentation}/>
      









    </div>
  );
}

export default App;
