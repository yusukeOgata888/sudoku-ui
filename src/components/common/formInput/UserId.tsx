import { Form } from "react-bootstrap";
import classes from "./formInput.module.css";

const UserId = (): JSX.Element => {
  // バリデーション


  return (
    <>
      <Form.Group>
        <Form.Label className={classes.label}>ユーザーID:</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control className={classes.input}></Form.Control>
      </Form.Group>
    </>
  );
};

export default UserId;
