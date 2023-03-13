import React, { css } from "react";
import "../css/App.css";
import "../css/styles-form.css";

const IngresoDatos = ({
	estado,
	cambiarestado,
	tipo,
	id,
	placeholder,
	name,
	sms,
	autocom,
	expregular,
	fun,
}) => {
	const onChange = (e) => {
		cambiarestado({ ...estado, campo: e.target.value });
	};

	const validacion = () => {
		if (expregular) {
			if (expregular.test(estado.campo)) {
				cambiarestado({ ...estado, valido: 'true' });
			} else {
				cambiarestado({ ...estado, valido: 'false' });
			}
		}

		if (fun) {
			fun();
		}

		return (
			<div className="campos">
				<div className="user-klinik">
					<input
						type={tipo}
						placeholder={placeholder}
						id={id}
						value={estado.campo}
						onKeyUp={validacion}
						onBlur={validacion}
						valido={estado.valido}
						onChange={onChange}
						autoComplete={autocom}
					></input>
					<p className="text-error" valido={estado.valido}>{sms}</p>
				</div>
			</div>

		);
	};
};

export default IngresoDatos;