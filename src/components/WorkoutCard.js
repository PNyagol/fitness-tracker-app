import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WorkoutCard({ exercise, duration, date, notes }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>{exercise}</Card.Title>
        <Card.Text>
          <strong>Duration:</strong> {duration} minutes
        </Card.Text>
        <Card.Text>
          <strong>Date:</strong> {date}
        </Card.Text>
        <Card.Text>
          <strong>Notes:</strong> {notes}
        </Card.Text>
        <Button variant="warning" style={{ marginLeft: '30px' }}>Edit</Button>
        <Button variant="danger" style={{ marginLeft: '60px' }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;
