import React, { css } from 'react';
import '../css/App.css'
import '../css/styles-form.css'

const Boton = ({idb, formb,btnb, typeb,txtb,smsb}) => {
	return (
		<>
			<button
				className="button-kli "
				id={idb}
				form={formb}
				btn={btnb}
				type={typeb}
			>
				{txtb}
			</button>
			<p className="link-kli-forget">{smsb}</p>
		</>
	);
}

export default Boton;