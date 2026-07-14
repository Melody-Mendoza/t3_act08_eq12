import { useState } from "react";
import { loginRequest } from "../services/api";

export const usarLogin = (onLogin) => 
{
    const [userName, SetUserName] = useState ("");
    const [contraseña, SetContraseña] = useState ("");
    const [error, SetError] = useState ("");

    const handleSubmit = async (e) => {
        e.preventDefault ();

        if(!contraseña.trim() || !userName.trim())
        {
            SetError ("Llena todos los campos")

            return;
        }

        try
        {
            SetError ("");

            const DataUsuario = await loginRequest(userName, contraseña);

            console.log ("Login exitoso: ", DataUsuario);
            onLogin(DataUsuario);
        }
        catch (err)
        {
            SetError(err.message);
        }
    };

    return{
        userName,
        SetUserName,
        contraseña,
        SetContraseña,
        error,
        handleSubmit
    };
};