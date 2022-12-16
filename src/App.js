import './App.css';
import React from 'react'
import Header from './Components/Header'
import Features from './Components/Features';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Features
        image = "referral.jpeg"
        heading = "Refer your friends!"
        desc = "Earn Rs.100 per referral!!"
      /> 
      <hr style={{ border: "3px solid red" }} />
      <Features
        image = "task.jpeg"
        heading = "Task Offers"
        desc = "Complete tasks to get coins!"
      /> 
      <hr style={{ border: "3px solid red" }} />
      <Features
        image = "limited.jpeg"
        heading = "Limited offers!"
        desc = "Hurry up and grab up the limited offers!!"
      />  
      <Footer/>
    </div>
  );
}

export default App;
