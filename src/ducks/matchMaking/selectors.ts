
/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { RootStateType } from "../RootReducer";

export const fetchSessionId = () =>
    useSelector((state: RootStateType) => state.session.sessionId);