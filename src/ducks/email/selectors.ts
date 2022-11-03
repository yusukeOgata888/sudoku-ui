/* eslint-disable react-hooks/rules-of-hooks */

import { useSelector } from "react-redux";
import { RootStateType } from "../RootReducer";

export const fecthEmailSelector = () => 
    useSelector((state:RootStateType) => state.email.email)
