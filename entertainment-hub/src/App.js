
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNavigation';
import Container from '@mui/material/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Container >
        <Routes>
          <Route path="/" element={<Trending/>} exact />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
        {/* <h1>Hello</h1> */}
      </Container>
    </div>
    <SimpleBottomNavigation />
  </BrowserRouter>
  );

}

export default App;
