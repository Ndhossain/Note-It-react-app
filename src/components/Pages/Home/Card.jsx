import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Cards({ image, title, descriptiton }) {
    console.log(image);
    return (
        <Col className="d-flex align-items-stretch" style={{ backaground: '#f8f9fc' }}>
            <Card className="p-3">
                <Card.Body className="my-3">
                    <Card.Title className="fs-4">{title}</Card.Title>
                    <Card.Text className="mt-3 text-muted">{descriptiton}</Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={image} />
            </Card>
        </Col>
    );
}

export default Cards;
