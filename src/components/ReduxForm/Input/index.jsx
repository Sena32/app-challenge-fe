import React from "react";

const Input = ({
	input,
	min,
	step,
	placeholder,
	type,
	disabled,
	meta: { touched, error }
}) => (
	<div className="input-group flex-nowrap">
		<input
			{...input}
			placeholder={placeholder}
			type={type}
			min={min}
			disabled={disabled}
			step={step}
			className="form-control"
		/>
		{touched && error && (
			<span className="form__form-group-error">{error}</span>
		)}
	</div>
);


export default Input;
