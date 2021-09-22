import './App.css';


import Banner from './components/Banner';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Link from './components/Link';

import './responsive.css'


function App() {
  return (
    <>
      <Banner />
      <div id="content">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Link />
      </div>
    </>
  );
}

export default App;
