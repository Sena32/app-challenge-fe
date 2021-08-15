
interface Props {
	name: string,
	phone: string,
	address: string,
	number: string,
	city: any ,
	state: any ,
	country: string,
	zipCode: string,
}
const validate = (values:Props) => {
	const errors = {} as Props;

	if (!values.name) {
		errors.name = "Informe um nome ";
	}

	if (!values.phone) {
		errors.phone = "Informe um Telefone";
	}

	if (!values.address) {
		errors.address = "Informe uma rua";
	}
	if (!values.city) {
		errors.city = "Informe uma cidade";
	}
	if (!values.number) {
		errors.number = "Informe o numero da casa";
	}
	if (!values.state) {
		errors.state = "Informe o estado";
	}
	if (!values.country) {
		errors.country = "Informe o país";
	}
	if (!values.zipCode) {
		errors.zipCode = "Informe um CEP";
	}

	return errors;
};

export default validate;