import { auth } from './firebase';


export const signInWithCustomToken = (token) => 
  auth.signInWithCustomToken(token).then(res => {
    console.log("success custom auth+++++", res);
    return res;
  }).catch(err => {
    console.log("error custom auth++++++", err);
    throw err;
  });