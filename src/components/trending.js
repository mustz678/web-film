import { Card, Container, Row, Col } from "react-bootstrap"
import shelby from "../assets/image/trending/shelby.png"
import gangstercop from "../assets/image/trending/gangstercop.png"
import johnwick from "../assets/image/trending/johnwick.png"
import sicario from "../assets/image/trending/sicario.png"

const trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <Row>
                    <Col md={3} className="movieWraper" id="trending">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={shelby} alt="Peaky Blinders" />
                            <Card.Title className="text-center">Peaky Blinders</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWraper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={gangstercop} alt="Gangster the cop the devil" />
                            <Card.Title className="text-center">The Gangster Cop Devil</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWraper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={johnwick} alt="John Wick" />
                            <Card.Title className="text-center">John Wick</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWraper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Card.Img src={sicario} alt="Sicario" />
                                <Card.Title className="text-center">Sicario</Card.Title>
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

export default trending