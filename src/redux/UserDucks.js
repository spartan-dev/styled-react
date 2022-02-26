///endpoint import{} from './user-ws'

import { loginEndpoint } from "../services/user-ws";

//3 tipos
//action.type
const LOADING = "foggyStore/user/LOADING";
const LOGIN_SUCCESS = "foggyStore/user/LOGIN_SUCCESS";
const LOGIN_ERROR = "ironcommerce/user/LOGIN_ERROR";
const LOGOUT = "ironcommerce/user/LOGOUT";

// el estado inicial o por defecto!!
const initialState = {
  data: JSON.parse(localStorage.getItem("user")),
  /**
   * data:{
   *  profile_pic:url
   *  email:"",
   * }
   */
  status: "",
  error: undefined,
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state, //no borrar los otros valores
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

// action func

export const loadingUser = () => ({
  type: LOADING,
});

//esta se va ejcutar cuando el then cargue
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});


//thunk
//es donde se van activar nuestras peticiones!!!! 
//muy muy nuevo


export const loginProcess = (creadential,navigate) => ( dispatch) =>{
    dispatch(loadingUser()) //es el que permite decir que es una funcion para redux;
    return loginEndpoint(creadential)
            .then(response => {
                const {data,status,messageError} = response
                if(status){
                    localStorage.setItem("user",JSON.stringify(data.result))
                    dispatch(loginSuccess(data.result))
                    navigate("/profile") //ejecutamos el navigate para ir a la pagina
                }else{
                    dispatch(loginError(messageError)) // estamos utilizando la funcion loginError para guardar el error y darselo al cliente hacer feedback
                }
            })
}



