interface Props {
	name: string,
	phone: string
}
const validate = (values:Props) => {
	const errors = {name: '', phone:''};

	if (!values.name) {
		errors.name = "Informe um nome ";
	}

	if (!values.phone) {
		errors.phone = "Informe um Telefone";
	}

	return errors;
};

export default validate;