import React from "react";
import { Button, Card, Image } from "react-bootstrap";

const Player =(prop)=>{ 
    const name=prop.name;
    const age=prop.age;
    const team=prop.team;
    const nationality=prop.nationality;
    const jerseyNumber=prop.jerseyNumber;
    const imageUrl=prop.imageUrl;
    const my=(prop)=>{
        alert( `my name ${prop.name}`)
    }
  return (
    <Card>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>
        {team}, {nationality}, {jerseyNumber}, {age}
      </Card.Subtitle>
      <Image style={{height:"40%",width:"40%"}} src={imageUrl} />
      
    </Card.Body>
  </Card>
  )
}

export default Player;