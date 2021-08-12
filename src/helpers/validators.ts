export function validateCpf(value) {
	if (!value) return false;

	value = value
		.replace(".", "")
		.replace("-", "")
		.replace(" ", "");

	if (value.length !== 11) return false;

	var Soma;
	var Resto;
	Soma = 0;

	if (value === "00000000000") return false;

	for (let i = 1; i <= 9; i++)
		Soma = Soma + parseInt(value.substring(i - 1, i), 10) * (11 - i);
	Resto = (Soma * 10) % 11;

	if (Resto === 10 || Resto === 11) Resto = 0;
	if (Resto !== parseInt(value.substring(9, 10), 10)) return false;

	Soma = 0;
	for (let i = 1; i <= 10; i++)
		Soma = Soma + parseInt(value.substring(i - 1, i), 10) * (12 - i);
	Resto = (Soma * 10) % 11;

	if (Resto === 10 || Resto === 11) Resto = 0;
	if (Resto !== parseInt(value.substring(10, 11), 10)) return false;
	return true;
}

export function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}