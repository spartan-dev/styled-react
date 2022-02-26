import axios from 'axios';

//valida si la aplicion esta en produccion nos retorna un true or false
const isProduction = process.env.NODE_ENV === "production";

//si la app esta ya en prodccion colocar la ruta del backend hosteado 

const baseURL = isProduction ? "https://foggystore.herokuapp.com/api" : "http://localhost:5005/api";

export const api = axios.create({
    //baseURL : baseURL
    baseURL,
    withCredentials:true,
    timeout:10000
})