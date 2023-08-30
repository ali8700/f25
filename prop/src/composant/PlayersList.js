import React from "react";
import players from "./data/players";
import Player from "./Player.js";
import { Container,Row,Col } from "react-bootstrap";

const PlayersList = () => {
 
    return (
          <>
          <Container>
          <Row>{players.map(({name,team,nationality,jerseyNumber,age,imageUrl})=>
          <Col>
          <Player
          name={name}
          team={team}
          nationality={nationality}
          jerseyNumber={jerseyNumber}
          imageUrl={imageUrl}
          age={age}
          />
          </Col>
          )}
           </Row>  
          </Container>
          </>
            
        );
      };
  export default PlayersList;
  