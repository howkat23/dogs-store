import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {
  <div>
    <h1>A Breed Show</h1>
  </div>
  const [dog, setDog] = useState(0);
  const {id, name, description, breed, image} = data[dog];
  const [showMore, setShowMore] = useState(false);

  const previousDog = () => {
    setDog((dog => {
      dog --;
      if (dog < 0) {
        return data.length - 1;
      }
      return dog;
    }))
  }

  const nextDog = () => {
    setDog((dog => {
      dog ++;
      if (dog > data.length - 1) {
        dog = 0;
      }
      return dog;
    }))
  }

return (<div>

  <div className="container">
    <img src={image} width="300px" alt="dogs"/>
  </div>

  <div className="container">
  <h2>{breed} (Dog's Breed)</h2>

</div>


<div className="container">
  <h1>{id} - {name}</h1>
</div>


  <div className='container'>
  <p>{showMore ? description : description.substring(0,220) + "...."}
          <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
          </p>
</div>

<div className="btn container">
  <button onClick={previousDog}>Previous</button>
  <button onClick={nextDog}>Next</button>

</div>
</div>)   

}

export default App;
