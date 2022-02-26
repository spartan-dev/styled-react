
//Vamos mandar un respuesta mas limpia sin las demas llaves del req (header,status,config,...)
export const internalServerError = (err) => {
    //err ={texto:perro}
    //{} undefined   ? 
    if(err.response && err.response.data && err.response.data.errorMessage){ //<-- errorMessage si ustedes lo cambiaron van a colocar la variable que usan del backend
        return {
            status:false,
            errorMessage: err.response.data.errorMessage
        }
    }

    return {
        status:false,
        errorMessage:"Internal server errro, Please check your server"
    }
};


export const successStatus = (res) => {
    return{
        status:true,
        data:res.data,
        //statusCode:res.status
    }
}