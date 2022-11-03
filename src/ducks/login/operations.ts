import { signInAction } from "./actions";
import { push } from "connected-react-router";
export const signIn = () => { 
    return async (dispatch: any, getState: any) => {
    
        const state = getState();
        const isSignedIn = state.Login.isSignedIn;

        if (!isSignedIn) {
            const url = 'https://api.github.com/users/deatiger';

            const response = await fetch(url).then(res => res.json()).catch(() => null);

            const userName = response.login;
            dispatch(signInAction({
                isSignedIn: true,
                userId: '00001',
                userName: userName,
            }));
            dispatch(push('/'));
         }
    }
}
