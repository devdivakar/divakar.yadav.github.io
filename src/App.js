import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import './App.css';
import Detail from './views/Detail/Detail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>
      <Header/>
    <Router>
      <ScrollToTop/>
    {/* <div className="App"> */}
<Routes>
<Route  path="/" element={<HomePage/>}/>
<Route exact  path="/project/detail" element={<Detail/>}/>

</Routes>
    {/* </div> */}
  </Router>
            <Footer/>
    </div>

  );
}

export default App;
