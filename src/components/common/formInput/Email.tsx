import { Form } from "react-bootstrap";
import classes from "./formInput.module.css";

type Props = {
  onChange: (email: string) => void;
}

const EmailEx = ({ onChange }:Props): JSX.Element => {
  
  return (
    <>
      <Form.Group>
        <Form.Label className={classes.label}>メールアドレス:</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control className={classes.input} onChange={(e: any) => onChange(e.target.value)}></Form.Control>
      </Form.Group>
    </>
  );
};

export default EmailEx;
