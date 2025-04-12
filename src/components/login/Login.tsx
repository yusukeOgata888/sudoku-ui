import { useHistory } from "react-router";
import classes from "./Login.module.css";
import { PAGE_PATH_URL, PAGE_TITLE } from "../../utilities/const";
import { Button, Row } from "react-bootstrap";
import Password from "../common/formInput/Password";
import UserId from "../common/formInput/UserId";
import Title from "../common/title/Title";
import { auth, provider } from "../../utilities/firebase/firebase";

const Login = (): JSX.Element=> {
  const history = useHistory();
  const handleLogin = async (event: any) => {
    try {
      await auth.signInWithPopup(provider);
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.main}>
    <Title titleName={PAGE_TITLE.LOGIN} />
      <div className={classes.contents}>
        <div>
          <Button className="btn-secondary" onClick={handleLogin}>Googleログイン</Button>
          <UserId />
          <Password />
          <Row>
            <Button
              className="btn-secondary"
              onClick={() => history.push(PAGE_PATH_URL.MATCH_MAKING)}
            >
              ログイン
            </Button>
            <Button
              className={`btn-secondary ${classes.margin_left_5}`}
              onClick={() => history.push(PAGE_PATH_URL.CREATE_ACCOUNT)}
            >
              アカウント作成
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login;
