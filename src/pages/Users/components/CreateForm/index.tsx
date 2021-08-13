import React from "react";
import { Button, ButtonToolbar, Col, Container, Row } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
// import Button from "../../../../components/Button";
import InputCustom from "../../../../components/Input";
import { CEP, PHONE } from "../../../../components/NumberFormat";
import Input from "../../../../components/ReduxForm/Input";
import InputNumber from "../../../../components/ReduxForm/InputNumber";
// import Input from "../../../../components/ReduxForm/Input";
import { CardWrapper, HeadBarTitle, Title, ButtonContainer } from "./styles";
import validate from "./validate";

const CreateForm = ({
	handleSubmit,
	reset,
	loading,
    initialValues
}) => {

	return (
        <CardWrapper>
        <HeadBarTitle >
            <Title >Cadastrar usuário</Title>
        </HeadBarTitle>
		<form className="form" onSubmit={handleSubmit}>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="form__form-group">
						<span className="form__form-group-label">Nome</span>
						<div className="form__form-group-field">
							<Field
								name="name"
								component={Input}
								type="text"
								placeholder="August"
							/>
						</div>
					</Col>

                    <Col xs={12} sm={12} md={12} lg={12} className="form__form-group">
						<span className="form__form-group-label">Email</span>
						<div className="form__form-group-field">
							<Field
								name="email"
								component={Input}
								type="text"
								placeholder="test@example.com"
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12} className="form__form-group">
						<span className="form__form-group-label">Senha</span>
						<div className="form__form-group-field">
							<Field
								name="password"
								component={Input}
								type="password"
								placeholder="12345678a#"
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12} className="form__form-group">
						<span className="form__form-group-label">Repete a Senha</span>
						<div className="form__form-group-field">
							<Field
								name="password2"
								component={Input}
								type="password"
								placeholder="12345678a#"
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<ButtonContainer className="btn-toolbar">
				<Button className="btn btn-outline-secondary" type="submit" disabled={loading}>
					{loading ? (
						<span
							className="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						></span>
					) : (
						"Salvar"
					)}
				</Button>
				<Button className="btn btn-outline-secondary" type="button" onClick={reset}>
					Limpar
				</Button>
			</ButtonContainer>
            
		</form>
        </CardWrapper>
	);
};

export default reduxForm({
	form: "user_create",
	validate
})(CreateForm);