import { Form } from "react-bootstrap";
import classes from "./formInput.module.css";

const UserName = (): JSX.Element => {
  return (
    <>
      <Form.Group>
        <Form.Label className={classes.label}>ユーザー名:</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control className={classes.input}></Form.Control>
      </Form.Group>
    </>
  );
};

export default UserName;
