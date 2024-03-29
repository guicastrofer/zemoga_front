//Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
//import avatar from 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={100} m={100} offset="s1 m1">
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" className="responsive-img" alt="cat"/>
        </Col>
      </Row>

  </Card>
);

export default UserProfile;