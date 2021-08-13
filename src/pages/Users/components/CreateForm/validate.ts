import { validateEmail } from "../../../../helpers/validators";

interface Props {
	name: string,
	email: string,
	password: string,
	password2: string,
}

const validate = (values:Props) => {
	const errors = {} as Props;

	if (!values.name) {
		errors.name = "Informe um nome ";
	}

	if (!values.email || !validateEmail(values.email)) {
		errors.email = "Informe um Email válido";
	}
	if (!values.password) {
		errors.password = "Informe uma Senha";
	}
	if (!values.password2) {
		errors.password2 = "Informe uma Senha";
	}
	if (values.password2!==values.password || values.password!==values.password2) {
		errors.password2 = "Insira uma Senha igual";
	}

	return errors;
};

export default validate;