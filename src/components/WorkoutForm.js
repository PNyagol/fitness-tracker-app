import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function WorkoutForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Excersice Type</Form.Label>
        <Form.Control type="text" placeholder="Enter the type of excersice" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDuration">
        <Form.Label>Duration</Form.Label>
        <Form.Control type="text" placeholder="Duration for the excersice" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter the date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDuration">
        <Form.Label>Notes</Form.Label>
        <Form.Control type="textarea" placeholder="Enter notes about the excersice" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default WorkoutForm;