import React from "react";

const TextArea = ({
	input,
	min,
	step,
	placeholder,
	type,
	meta: { touched, error }
}) => (
	<div className="form__form-group-input-wrap">
		<textarea {...input} placeholder={placeholder} type={type} />
		{touched && error && (
			<span className="form__form-group-error">{error}</span>
		)}
	</div>
);


export default TextArea;
