import React from "react";
import { Loginn, Nombre } from "../styledComponents/sty-com-login.js";

export const Login = ({email}) => {
    console.log({email});
	return (
		<>
			<Loginn>
				<h1>Bienvenid@</h1>
				<br />
				<p>Has ingresado a tu cuenta... </p>
				<Nombre>Hola, {email.valueOf().slice(0,-10)}</Nombre>
			</Loginn>
		</>
	);
};
