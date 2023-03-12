import styled from 'styled-components';


//form-klinik
export const Form = styled.form`
    margin-top: 70px;
	margin-bottom: 20px;
	width: 330px;
	height: 600px;
	border-radius: 55px;
	background: #ecf0f3;
	box-shadow: 7px 7px 14px #d0d3d6, -7px -7px 14px #ffffff;
	padding: 50px 35px 35px 35px;
	text-align:center;
	text-decoration: none;
`;

//help-klinik
export const Help = styled.div`
    width: 30px;
	height: 30px;
	text-align: center;
	padding: 5px;
	font-weight: 800;
	color: rgb(92, 159, 226);
	border-radius: 50%;
	background: #ecf0f3;
	box-shadow: 7px 7px 14px #d0d3d6, -7px -7px 14px #ffffff;
`;

//title-klinik
export const Title = styled.div`
    text-align: center;
	color: dodgerblue;
	font-size: 35px;
	font-weight: 800;
	letter-spacing: 0.3px;
	padding-top: 54px;
`;

//subtitle-klinik
export const Subtitle = styled.div`
    text-align: center;
	font-size: 15px;
	margin-top: 7px;
	color: dodgerblue;
`;


//campos
export const Campos = styled.div`
    margin-top: 40px;
    text-align: center;
`;


//user-klinik y password-klinik
export const UseryPass = styled.div`
    width: 250px;
	height: 50px;
	border-radius: 33px;
	background: #ecf0f3;
	box-shadow: inset 7px 7px 14px #d0d3d6, inset -7px -7px 14px #ffffff;
`;

//button-kli
export const Buttonkli = styled.button`
    background-color: dodgerblue;
	outline: none;
	border: none;
	cursor: pointer;
	width: 100%;
	height: 50px;
	font-size: 20px;
	font-weight: 700px;
	color: white;
	margin-top: 20px;
	border-radius: 25px;
	background:#86bbec;

	:hover {
	background: linear-gradient(145deg, #209aff, #1b82e6);
    box-shadow: 9px 9px 24px #7db5e9, -9px -9px 24px #9ad2f3;
	}
`;


//link-kli-forget a
export const Linkisya = styled.div`
    text-decoration: none;
    color: dodgerblue;
    font-size: 12px;
`;

export const Errxr = styled.p`
	text-decoration: none;
	margin: 10px;
	color: red;
	font-size: 10px;
	height: 20px;
`;