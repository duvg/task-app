import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AuthPayload, types } from '../types/types';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';

export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const user = {
      uid: '',
      displayName: '',
    };

    setTimeout(() => {
      dispatch(login(user));
    }, 3000);
  };
};

export const startGoogleLogin = () => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        const googleuser = {
          uid: user?.uid,
          displayName: user?.displayName,
        };
        dispatch(login(googleuser));
      })
      .catch(e => {
        console.error(e.message);
      });
  };
};

export const login = (authUser: AuthPayload): types => ({
  type: '[Auth] Login',
  payload: authUser,
});
