import React from "react";

const InputNumber = ({
	input,
	min,
	step,
	placeholder,
	type,
	meta: { touched, error }
}) => {

	const onChange = () => {
		const phoneRegex = /^(\-|\+)?([0-9]+|Infinity)$/;
		input.value.replace(phoneRegex);
		// if (/^(\-|\+)?([0-9]+|Infinity)$/.test(input.value)) {
		// 	input.onChange(input.value);
		// }
	};
	return (
		<div
			className="input-group flex-nowrap"
			style={{ display: "flex", alignItems: "center" }}
		>
			<input
				{...input}
				placeholder={placeholder}
				onChange={onChange}
				type={type}
				min={min}
				step={step}
				className="form-control"
			/>

			{touched && error && (
				<span className="form__form-group-error">{error}</span>
			)}
		</div>
	);
};


export default InputNumber;
