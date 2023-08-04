import React from "react";

function Home(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>${props.price}</p>
      <p>Description : {props.description}</p>
    </div>
  );
}

export default Home;
