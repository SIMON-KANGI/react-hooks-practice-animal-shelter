import React from "react";
import { useState } from "react";
import Pet from "./Pet";

function PetBrowser({pets}) {
  const [isAdopted,setIsAdopted]=useState([])

function handleAdopted(id){
if(!isAdopted.includes(id)){
  setIsAdopted([...isAdopted,id])
}else{
  setIsAdopted(isAdopted.filter(petId=>petId !==id))
}

  fetch(`http://localhost:3001/pets/${id}`,{
    method:"PATCH"
  })
  
}


  return <div className="ui cards">
    {
      pets.map(pet=>{
        return(
          <Pet
            key={pet.id}
            name={pet.name}
            type={pet.type}
            gender={pet.gender}
            weight={pet.weight}
            age={pet.age}
          onAdoptPet={isAdopted.includes(pet.id)}
          handleAdopted={()=>handleAdopted(pet.id)}
          id={pet.id}
          />
        )
      })
    }
  </div>;
}

export default PetBrowser;