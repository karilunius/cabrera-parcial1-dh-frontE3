import React, { Fragment, useState } from "react";
import GlobalCss from "../styledComponents/global.css";
import {
	Form,
	Help,
	Title,
	Subtitle,
	Campos,
	UseryPass,
	Buttonkli,
	Linkisya,
	Errxr,
} from "../styledComponents/sty-com";
import { Login } from "./Login.jsx";
import "../../src/index.css";
import { edadValidator } from "../js/validations.js";

const FormsLogin = () => {
	//se coloca el estado (1)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [visibilidad, setVisibilidad] = useState(false);
	const [validar, setValidar] = useState(false);

	// se controla el evento
	const handleSubmit = (e) => {
		e.preventDefault();


		console.log({ email }, { password }, { visibilidad });

		/* const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i; */
		/* const passwordRegex = /^[0-9a-zA-Z]{6,}$/i; */

        
		let validacionEmail = false;
		let validacionPassword = false;

		if (email.length >= 5) {
			console.log("Email es mayor a 5");
			validacionEmail = true;
		} else {
			console.log("Email no puede ser menor a 5 caracteres.");
			validacionEmail = false;
		}

		if (password.length >= 3) {
			console.log("Contraseña es mayor a 3");
			validacionPassword = true;
		} else {
			console.log("Contraseña no puede ser menor a 3 caracteres.");
			validacionPassword = false;
		}

		if (validacionEmail === true && validacionPassword === true) {
			setValidar(false);
			setVisibilidad(true);
		} else {
			setValidar(true);
			setVisibilidad(false);
		}
	};

	return (
		<Fragment>
			<GlobalCss />
			<Form id="login-form" from="login" onSubmit={handleSubmit}>
				<Help>?</Help>
				<Title>Odonto Klinik</Title>
				<Subtitle>La clínica odontológica para tu familia</Subtitle>
				<Campos>
					<UseryPass>
						<input
							placeholder="ingresa tu email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="email"
						></input>
						{validar && <Errxr>Email no tiene el formato correcto.</Errxr>}
					</UseryPass>
					<br></br>
					<br></br>
					<UseryPass>
						<input
							placeholder="ingresa tu contraseña"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
						></input>
						{validar && <Errxr>La contraseña tiene el formato incorrecto.</Errxr>}
					</UseryPass>
					<br></br>
					<br></br> 
					<Buttonkli
						id="buttonf"
						form="login-form"
						btn="submit"
						type="submit"
						onClick={(e) => setVisibilidad(true)}
					>
						Ingresar
					</Buttonkli>
				</Campos>
				<Linkisya>
					<br></br>
					<p href="#">Olvidé la contraseña</p>
				</Linkisya>
			</Form>
			{visibilidad && <Login email={email}/>}
		</Fragment>
	);
};

export default FormsLogin;
