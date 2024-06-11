import { Card, Container, Row, Col } from "react-bootstrap"
import avenger from "../assets/image/superhero/avenger.png"
import batman from "../assets/image/superhero/batman.png"
import blackwidow from "../assets/image/superhero/blackwidow.png"
import captainamerica from "../assets/image/superhero/captainamerica.png"

const superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPER HERO MOVIES</h1>
                <Row>
                    <Col md={3} className="movieWraper" id="superhero">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={avenger} alt="The Avenger" />
                            <Card.Title className="text-center">The Avenger</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWraper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={batman} alt="Batman" />
                            <Card.Title className="text-center">Batman</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWraper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={blackwidow} alt="Black widow" />
                            <Card.Title className="text-center">Black Widow</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWraper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={captainamerica} alt="Captain America" />
                                <Card.Title className="text-center">Captain America</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default superhero