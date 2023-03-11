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
} from "../styledComponents/sty-com";
import { Login } from "./Login.jsx";
import "../../src/index.css";

const FormsLogin = () => {
	//se coloca el estado (1)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [visibilidad, setVisibilidad] = useState(false);

	// se controla el evento
	const handleSubmit = (e) => {
		e.preventDefault();

		setEmail("");
		setPassword("");
		setVisibilidad();

		console.log({ email }, { password }, { visibilidad });
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
					</UseryPass>
					<br></br>
					<UseryPass>
						<input
							placeholder="ingresa tu contraseña"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
						></input>
					</UseryPass>
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
			<Login email={email} visibilidad={visibilidad} />;
		</Fragment>
	);
};

export default FormsLogin;
