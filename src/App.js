import './App.css';
import img2 from './img2.jpg';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
  
      <h1 className="title">Hamdi ben jemaa  </h1>
  <br />
<img  style={{padding:"50px 440px"}}  src= "./img1.jpg" alt="Informatique1"/>
<br />
<img  style={{height:"400px", paddingLeft:"370px"}} src={img2} alt="Informatique2" />
<br />
<ReactPlayer style={{padding:"50px 350px"}} className="sequence" url='https://youtu.be/isa3fk_oSUQ' />
    </div>
  );
}

export default App;
