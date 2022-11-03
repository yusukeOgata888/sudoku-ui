import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import classes from "./CreateAccount.module.css";
import { PAGE_TITLE, PAGE_PATH_URL } from "../../utilities/const";
import Password from "../common/formInput/Password";
import UserId from "../common/formInput/UserId";
import EmailEx from "../common/formInput/Email";
import UserName from "../common/formInput/UserName";
import Title from "../common/title/Title";
import { useState } from "react";
import { setEmail } from "../../ducks/email/operations";
import { fecthEmailSelector } from "../../ducks/email/selectors";
import { useDispatch } from "react-redux";

/**
 * アカウント作成コンポーネント
 * @returns 
 */
const CreateAccount = (): JSX.Element => {
   const history = useHistory();
   const dispatch = useDispatch();
   const [ email, setStateEmail ] = useState('');
   const selectEmail = fecthEmailSelector();
   
   const onChange = (param: string) => {
    setStateEmail(param);
   } 

   const onClickSubmit = () => {
     if (selectEmail) {
      dispatch(setEmail(email));
     }
    }

    return  (
    <div className={classes.main}>
    <Title titleName={PAGE_TITLE.CREATE_ACCOUNT} />
    <div className={classes.contents}>
      <div>
        <EmailEx onChange={(param: string) => {onChange(param)}} />
        <UserId />
        <UserName />
        <Password />
        <Button
          className="btn-secondary"
          onClick={() => {
            onClickSubmit();
            history.push(PAGE_PATH_URL.LOGIN);
          }}
        >
          登録
        </Button>
      </div>
    </div>
  </div>
  );
};

export default CreateAccount;
