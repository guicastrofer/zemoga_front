// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Home = () => (
  <Row>
    <Col m={4} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h4 className="subtitle"><center>Name</center></h4>
        <Card>
          <div>
            <h5><center><p><b>Experience</b></p></center></h5>
            <h10><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></h10>
            <br/>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
      
        {/* <Experience /> */}
        {/* <Experience /> */}
    </Col>
  </Row>
);

export default Home;