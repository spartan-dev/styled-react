import { api } from "./api";
import { successStatus, internalServerError } from "../utils/clear-res";

export const loginEndpoint = (credential) =>
  api
    .post("/auth/login", credential)
    .then(successStatus)
    .catch(internalServerError);

export const signupEndpoint = (credentials) =>
  api
    .post("/auth/signup", credentials)
    .then(successStatus)
    .catch(internalServerError);

export const logoutEndpoint = () => {
  //... code
  return api
    .post("/auth/logout")
    .then(successStatus)
    .catch(internalServerError);
};
