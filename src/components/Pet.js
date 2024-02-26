import React from "react";

function Pet({name,type,gender,id,weight,age,onAdoptPet, handleAdopted}) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {gender==="female"?'♀':'♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age:{age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
      {onAdoptPet ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button onClick={() => handleAdopted(id)} className="ui primary button">
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;