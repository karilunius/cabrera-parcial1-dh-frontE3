import React,{ useState } from "react";
import { Loginn, Nombre } from "../styledComponents/sty-com2.js"


export const Login = (props) => {
	
	const { email, password, visibilidad } = props;
 
	/* const valor = { visibilidad } ? { display: "initial" } : { display: "none" };  */

	return (
		<>
			<Loginn /*  style={{display: "none"}}  */
			>
				<h1>Bienvenid@</h1>
				<br />
				<p>Has ingresado a tu cuenta... </p>
				<Nombre>{email}</Nombre>
				
			</Loginn>
		</>
	);
};


