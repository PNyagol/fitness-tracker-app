import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WorkoutCard({ exercise, duration, date, notes }) {
  function handleDeleteClick() {
    fetch('http://localhost:3001/workouts', {
      method: "DELETE", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        exercise, 
        duration,
        date,
        notes
      })
    })
      .then((response) => response.json()) 
      .then((deletedItem) => console.log(deletedItem))
      .catch((error) => console.error('Error deleting item:', error));
  }

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
        <Button onClick={handleDeleteClick} variant="danger" style={{ marginLeft: '60px' }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;
