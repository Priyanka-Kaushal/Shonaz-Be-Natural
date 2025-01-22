import {EMAIL, PASSWORD, NAME, LASTNAME, } from './actionType';



export const email = (emailId) => ({
    type: EMAIL,
    payload: emailId,
  });

  export const password_user = (password) => ({
    type: PASSWORD,
    payload: password,
  });
