import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  
  function onChangeType(e){
   return setFilters({type:e.target.value})
    
  }

  useEffect(()=>{
  let data="http://localhost:3001/pets"
  fetch(data)
  .then(res=>res.json())
  .then(pets=>setPets(pets))
  },[])

const FilterFunc=pets.filter(pet=>{
    if(filters.type==="all"){
      return true
    }else{
     return pet.type===filters.type
    }
  })

  function onFindPetsClick(e){
    
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChange={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={FilterFunc} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;