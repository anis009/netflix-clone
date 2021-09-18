import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        isLarge={true}
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Actions Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Documentries Movies' fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
