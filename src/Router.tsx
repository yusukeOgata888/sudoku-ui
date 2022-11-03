import React from "react";
import { Route, Switch } from "react-router";
import CreateAccount from "./components/createAccount/CreateAccount";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { PAGE_PATH_URL } from "./utilities/const";

const Router = () => {
  return (
    <Switch>
      <Route exact path={PAGE_PATH_URL.HOME} component={Home} />
      <Route exact path={PAGE_PATH_URL.LOGIN} component={Login} />
      <Route exact path={"/"} component={Login} />
      <Route exact path={PAGE_PATH_URL.CREATE_ACCOUNT} component={CreateAccount} />
    </Switch>
  );
};

export default Router;
