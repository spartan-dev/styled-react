//PASO UNO DECLARAR NUESTRAS ACCIONES
//actions || ACTION.TYPE
import { loginEndpoint } from "../services/user-ws";
const LOADING = "foggyStore/user/LOADING";
const LOGIN_SUCCESS = "foggyStore/user/LOGIN_SUCCESS";
const LOGIN_ERROR = "foggyStore/user/LOGIN_ERROR";
const LOGOUT = "foggyStore/user/LOGOUT";

//PASO DOS ESTADO INICIAL

const initialState = {
  data: JSON.parse(localStorage.getItem("user")),
  /**
   * data:{
   *  email:"benito@gmail.com",
   * profile_pic:url
   * }
   */
  status: "",
  error: undefined,
};

//PASO TRES REDUCER

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state, //no borrar lo que sea que tengas antes
        status: "pending",
      };
    case LOGIN_SUCCESS:
      return { status: "success", data: { ...action.payload } };

    case LOGIN_ERROR:
      return { status: "error", error: action.error };
    default:
      return state;
  }
}

//PASO 4  FUNCIONES DE ACCION

export const loadingUser = () => ({ type: LOADING });
export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const loginError = (error) => ({ type: LOGIN_ERROR, error });
export const logOut = () => ({ type: LOGOUT });

export const loginProcess = (credential, navigate) => (dispatch) => {
  dispatch(loadingUser()); // este es el que permite la carga y que es una funcion de redux
  return loginEndpoint(credential).then((response) => {
    const { data, status, messageError } = response;
    if (status) {
      localStorage.setItem("user", JSON.stringify(data.result));
      dispatch(loginSuccess(data.result));
      navigate("/profile"); //ejecuta a donde ir una ves que todo salio bien
    } else {
      dispatch(loginError(messageError)); // estamos utilizando la funcion loginError para hacer un
      //dispatch de error a nuestro reducer y hacemos feedback al user
    }
  });
};
