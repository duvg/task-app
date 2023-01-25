import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Swal from 'sweetalert2';
import { AuthPayload, RegisterPayload, types } from '../types/types';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPasswordAction = (
  email: string,
  password: string
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const authenticatedUser: AuthPayload = {
        uid: user?.uid,
        displayName: user?.displayName,
      };

      dispatch(loginAction(authenticatedUser));
      dispatch(finishLoading());
    } catch (e: any) {
      dispatch(finishLoading());
      await Swal.fire('Error', e.message, 'error');
    }
  };
};

export const startGoogleLoginAction = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    await firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        const googleuser = {
          uid: user?.uid,
          displayName: user?.displayName,
        };
        dispatch(loginAction(googleuser));
      })
      .catch((e: any) => {
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordName = (
  registerUser: RegisterPayload
) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(startLoading());
    firebase
      .auth()
      .createUserWithEmailAndPassword(registerUser.email, registerUser.password)
      .then(async ({ user }) => {
        await user?.updateProfile({ displayName: registerUser.name });

        dispatch(finishLoading());
        dispatch(
          loginAction({ uid: user?.uid, displayName: user?.displayName })
        );
      })
      .catch(e => {
        dispatch(finishLoading());
      });
  };
};

export const loginAction = (authUser: AuthPayload): types => ({
  type: '[Auth] Login',
  payload: authUser,
});

export const startLogOutAction = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      await firebase.auth().signOut();
      dispatch(logOutAction());
    } catch (e: any) {
      await Swal.fire('Error', e.message, 'error');
    }
  };
};

export const logOutAction = (): types => {
  return {
    type: '[Auth] Logout',
    payload: { uid: '', displayName: '' },
  };
};
