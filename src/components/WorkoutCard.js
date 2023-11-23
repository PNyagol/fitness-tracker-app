import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WorkoutCard({
  workout,
  handleDelete,
  isModalOpenned,
  setIsModalOpenned,
  setWorkoutId,
}) {
  const handleClick = () => {
    setWorkoutId(workout?.id);
    setIsModalOpenned(!isModalOpenned);
  };
  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Body>
        <Card.Title>{workout.exercise}</Card.Title>
        <Card.Text>
          <strong>Duration:</strong> {workout.duration} minutes
        </Card.Text>
        <Card.Text>
          <strong>Date:</strong> {workout.date}
        </Card.Text>
        <Card.Text>
          <strong>Notes:</strong> {workout.notes}
        </Card.Text>
        <Button
          id={workout?.id}
          onClick={handleClick}
          variant="warning"
          style={{ marginLeft: "30px" }}
        >
          Edit
        </Button>
        <Button
          id={workout?.id}
          onClick={() => handleDelete(workout?.id)}
          variant="danger"
          style={{ marginLeft: "60px" }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;
