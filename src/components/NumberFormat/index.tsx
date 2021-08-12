import React from "react";
import NumberFormat from "react-number-format";

export default function NumberFormatCustom(props) {
	const { inputRef, placeholder, type, input, meta, ...other } = props;

	const { onChange, ...rest } = input || {};

	const { touched, error } = meta || {};

	return (
		<div className="form__form-group-input-wrap">
			<NumberFormat
				{...other}
				{...rest}
				className="form-control"
				getInputRef={inputRef}
				placeholder={placeholder}
				type={type}
				onValueChange={values => {
					onChange && onChange(values.value);
				}}
			/>
			{((touched && error) || props.errors) && (
				<span className="form__form-group-error">{error || props.errors}</span>
			)}
		</div>
	);
}

export function NumberFormatCustomFloat(props) {
	const { inputRef, placeholder, type, input, meta, ...other } = props;

	const { onChange, ...rest } = input || {};

	const { touched, error } = meta || {};

	return (
		<div className="form__form-group-input-wrap">
			<NumberFormat
				{...other}
				{...rest}
				getInputRef={inputRef}
				placeholder={placeholder}
				type={type}
				onValueChange={values => onChange && onChange(values.floatValue)}
			/>
			{((touched && error) || props.errors) && (
				<span className="form__form-group-error">{error || props.errors}</span>
			)}
		</div>
	);
}

export const CPF = props => (
	<NumberFormatCustom {...props} format="###.###.###-##" />
);

export const CNPJ = props => (
	<NumberFormatCustom {...props} format="##.###.###/####-##" />
);

export const CPFCNPJ = props => (
	<NumberFormatCustom
		{...props}
		format={
			props.input.value && props.input.value.match(/\d/g).join("").length <= 11
				? "###.###.###-###"
				: "##.###.###/####-##"
		}
	/>
);

export const IE = props => (
	<NumberFormatCustom {...props} format="###.###.###" />
);

export const CEP = props => (
	<NumberFormatCustom {...props} format="#####-###" />
);

export const CFOP = props => <NumberFormatCustom {...props} format="####" />;

export const CSOSN = props => <NumberFormatCustom {...props} format="###" />;
export const CST = props => <NumberFormatCustom {...props} format="###" />;

export const PHONE = props => {
	return <NumberFormatCustom {...props} format="(##) ####-#####" />;
};

export const MONEY = props => {
	return (
		<NumberFormatCustomFloat
			prefix={"R$"}
			decimalSeparator=","
			thousandSeparator="."
			decimalScale={2}
			fixedDecimalScale
			{...props}
		/>
	);
};

export const PERCENTAGE = props => {
	return (
		<NumberFormatCustomFloat
			suffix={"%"}
			decimalSeparator=","
			thousandSeparator="."
			decimalScale={1}
			fixedDecimalScale
			{...props}
		/>
	);
};

export const PERCENTAGE2 = props => {
	return (
		<NumberFormatCustomFloat
			suffix={"%"}
			decimalSeparator=","
			thousandSeparator="."
			decimalScale={2}
			fixedDecimalScale
			{...props}
		/>
	);
};

export const DATE = props => (
	<NumberFormatCustom {...props} format="##/##/####" />
);

export const CARDVALIDATE = props => (
	<NumberFormatCustom {...props} format="##/##" />
);

export const CARDCODE = props => (
	<NumberFormatCustom {...props} format="####" />
);