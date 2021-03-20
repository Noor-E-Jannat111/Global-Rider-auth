
import './Home.css';


import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import bike from '../../images/Frame.png';
import train from '../../images/Group.png';
import Heder from '../Heder/Heder';

// import Login from './Components/Login/Login';


function Home() {



  return (
     <div >
        <Heder></Heder>
   
    <div className="riders-detels">
     
      
     <div className="riders">
        <img src={bus} alt="" />
        <h2>BUS</h2>
     </div>

     <div className="riders">
        <img src={car} alt="" />
        <h2>Car</h2>
     </div>
     <div className="riders">
        <img src={bike} alt="" />
        <h2>BILE</h2>
     </div>
     <div className="riders">
        <img src={train} alt="" />
        <h2>TRAIN</h2>
     </div>


     
     </div>
  </div>
  );
}

export default Home;
