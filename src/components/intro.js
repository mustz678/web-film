import { Col, Container, Row, Button } from 'react-bootstrap';

const intro = () => {
    return (
        <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
            <div className='title'>Streaming Film</div>
            <div className='title'>Jamin anti iklan</div>
            <div className='introButton mt-4 text-center'>
                <Button variant='dark' href='#trending'>Lihat semua list</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default intro