import React, { css, Fragment, useState } from "react";
import Boton from "./Boton.jsx";
import "../css/App.css";
import "../css/styles-form.css";
import IngresoDatos from './IngresoDatos.jsx';

const FormsLogin = () => {
	const [email, setEmail] = useState({ campo: "", valido: null });
	const [password, setPassword] = useState({ campo: "", valido: null });
	const [formularioValido, setFormularioValido] = useState(null);
    const [visibilidad, setVisibilidad] = useState(null);
	const [smserrar, setSmserrar] = useState(null);



	const expresionesRegex = {
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	};

	const onSubmit = (e) => {
		e.preventDefault();

		console.log({ email }, { password }, {setFormularioValido},{ visibilidad }, { smserrar });
		
		if (email.valido === "true" && password.valido === "true") {
			setFormularioValido(true);
			setEmail({ campo: "", valido: null });
			setPassword({ campo: "", valido: null });
		} else {
			setFormularioValido(false);
		}
	};

	return (
		<>
			<form
				className="form-klinik"
				action=""
				onSubmit={onSubmit}
				id="login-form"
			>
				<div className="help-klinik">?</div>
				<div className="title-klinik">Odonto Klinik</div>
				<div className="subtitle-klinik">
					La clínica odontológica para tu familia
				</div>
				<div className="campos">
					<div className="user-klinik">
						<input
							estado={email}
							cambiarestado={setEmail}
							type="email"
							placeholder="escribe tu correo"
							name="email"
							sms={"El email debe tener el formato válido . y @."}
							expresionregular={expresionesRegex.correo}
							autoComplete="email"
						></input>
					</div>
					<br></br>
					<div className="password-klinik">
						<input
							estado={password}
							cambiarestado={setPassword}
							type="password"
							placeholder="escribe tu contraseña"
							sms={"La contraseña debe ser de 4 a 12 dígitos."}
							expresionregular={expresionesRegex.password}
							autoComplete="current-password"
						></input>
					</div>
				</div>
				<Boton
					form="login-form"
					btn="submit"
					type="submit"
					txtb={"Ingresar"}
					smsb={"Ingreso exitoso."}
				></Boton>
			</form>
			{formularioValido === true && <p>bien</p>}
		</>
	);
};

export default FormsLogin;
