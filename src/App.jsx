import { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState({
    Score: 76,
    Wicket: 2,
    Ball: 50,
  });
  const handleScore = (value)=>{
    if(count.Score>=100){
      return;
    }
    setCount({...count, Score:count.Score+value});
  }
  const handleWicket = (value)=>{
    if(count.Score>=100){
      return;
    }
    if(count.Wicket >=12){
      return;
    }
    setCount({...count, Wicket:count.Wicket+value});
  }
  const handleBall = (value)=>{
    if(count.Score>=100){
      return;
    }
    if(count.Ball >= count.Ball+0.6){
      return
    }
    setCount({...count, Ball:count.Ball+value});
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              count.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              count.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              count.Ball.toFixed(1)
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=> {handleScore(+1)}}>Add 1</button>
        <button className="addScore4" onClick={()=> handleScore(+4)}>Add 4</button>
        <button className="addScore6" onClick={()=> handleScore(+6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=> {handleWicket(+1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{handleBall(+0.1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1>{count.Score>=100? "India Won": ""}</h1>
    </div>
  );
}

export default App;