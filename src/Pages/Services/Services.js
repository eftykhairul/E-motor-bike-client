import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import "./Services.css"
const Services = () => {
    return (
        <div>
            <div>
                <h1 className='text-info my-5 middle'>Our Services</h1>
            </div>
            <div>
            <CardGroup>
        <Card>
        <Card.Img variant="top" src="https://media.zigcdn.com/media/content/2022/May/1004768148-mt15v2roadtest1-1_640x480.png" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/continental-gt-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </CardGroup>
            </div>
        </div>
    );
};

export default Services;