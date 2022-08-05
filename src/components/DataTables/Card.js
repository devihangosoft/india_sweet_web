import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
  
export default function Cards() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="holder.js/100px270" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>

<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<>
  {[
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{variant} Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</>
    </>
  );
}