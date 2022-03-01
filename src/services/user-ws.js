import { api } from "./api";
import { successStatus, internalServerError } from "../utils/clear-res";

export const loginEndpoint = (credential) =>
  api
    .post("/auth/login", credential)
    .then(successStatus)
    .catch(internalServerError);
