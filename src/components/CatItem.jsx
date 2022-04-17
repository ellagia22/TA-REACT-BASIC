import { Container, InputGroup, Card, Row, Col } from "react-bootstrap";

function CatItem(item) {

    const handleClick = (event) => {
        event.preventDefault();
        alert(item.name + " : " + item.description);
    }

    return (
        <>
            <Card.Body style={{ background: "darkblue" }}>
                <hr />
                <Card.Title className="title" style={{ textTransform: "uppercase", textAlign: "center", color: "white" }}>{item.name}</Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "center", color: "white" }}>{item.origin}</Card.Text>
                <a onClick={handleClick} style={{ background: "secondary" }} class="btn btn-warning btn-md">Info</a>
            </Card.Body>
        </>
    )
}

export default CatItem;