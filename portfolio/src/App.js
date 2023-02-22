import React, {useState, useEffect} from 'react';
import './App.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      }, 2000)
  }, [])
  return (
    <div className="App">
      { loading ? (
      <ClimbingBoxLoader size = {30} color = "#0C63E7" loading = {loading}/>
        ) : ( 
        
          
        <div className="container">
          <header className='header'>  <a href="https://github.com/Sseesh" target="_blank" rel="noopener noreferrer">Sseesh</a></header>
            <div className="text-container">
                <p className="text-name">Mark Dave Lorejo</p>
                <p className="text">Front-end Developer</p>
                <p className="text">I'm Experienced Front-end Developer with a demonstrated history of working in the information technology and services industry. Highly skilled in JavaScript(React/VueJS)</p>
            </div>
            <div className="shape"></div>
          </div>
      
     ) }
    </div>
  );
}

export default App;
