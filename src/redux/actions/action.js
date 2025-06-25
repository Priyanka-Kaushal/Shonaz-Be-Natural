import {EMAIL, PASSWORD } from './actionType';

export const email = (email) => ({
    type: EMAIL,
    payload: email,
  });

  export const password_user = (password) => ({
    type: PASSWORD,
    payload: password,
  });
