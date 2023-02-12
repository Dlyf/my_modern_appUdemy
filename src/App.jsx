import "bulma/css/bulma.css";
import "rsuite/dist/rsuite.css";
import { Panel, Placeholder, Row, Col } from "rsuite";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);
function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <Row>
          <Col md={5}>
            <ProfileCard
              title="Alexa" 
              handle="@alexa99" 
              image={AlexaImage}
              description="Cortana was made by Microsoft. Who knows what it odes?" />
          </Col>
          <Col md={5}>
            <ProfileCard
              title="Cortana"
              handle="@cortana32"
              image={CortanaImage}
              description="Alexa was created by Amazon and helps you buy things."
            />
          </Col>
          <Col md={5}>
            <ProfileCard
              title="Siri" 
              handle="@siri01" 
              image={SiriImage} 
              description="Siri was made by Apple and is being phased out."
            />
          </Col>
        </Row>
      </div>

      {/* <img src={AlexaImage} />
            <img src={SiriImage} /> */}
      {/* Adding props */}
    </div>
  );
}

export default App;
