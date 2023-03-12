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
} from "../styledComponents/sty-com-form-log";
import { Login } from "./Login.jsx";
import "../../src/index.css";
/* import { validacionEmail, validacionPassword, validaciones } from "../js/validations.js";  */

const FormsLogin = () => {
	//se coloca el estado
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [visibilidad, setVisibilidad] = useState(false);
	const [smserrar, setSmserrar] = useState(false);

	// se controla el evento
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log({ email }, { password }, { visibilidad }, { smserrar });

		let validacionEmail = false;
		let validacionPassword = false;

		//email
		if (email.length >= 15) {
			console.log("Email es correcto.");
			validacionEmail = true;
		} else {
			console.log("Email no puede ser menor a 5 caracteres.");
			validacionEmail = false;
		}

		//password
		if (password.length >= 3) {
			console.log("Contraseña es correcta.");
			validacionPassword = true;
		} else {
			console.log("Contraseña no puede ser menor a 3 caracteres.");
			validacionPassword = false;
		}

		//validacion
		if (validacionEmail === true && validacionPassword === true) {
			console.log("validación completada.");
			setSmserrar(false);
			setVisibilidad(true);
		} else {
			console.log("validación no es correcta.");
			setSmserrar(true);
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
						{smserrar && <Errxr>Email no tiene el formato correcto.</Errxr>}
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
						{smserrar && (
							<Errxr>La contraseña no tiene el formato correcto.</Errxr>
						)}
					</UseryPass>
					<br></br>
					<Buttonkli id="buttonf" form="login-form" btn="submit" type="submit">
						Ingresar
					</Buttonkli>
				</Campos>
				<Linkisya>
					<br></br>
					<p href="#">Olvidé la contraseña</p>
				</Linkisya>
			</Form>
			{visibilidad && <Login email={email} />}
		</Fragment>
	);
};

export default FormsLogin;
