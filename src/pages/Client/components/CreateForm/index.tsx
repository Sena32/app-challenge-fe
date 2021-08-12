import React, { useEffect, useState } from "react";
import { Button, ButtonToolbar, Col, Container, Row } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
// import Button from "../../../../components/Button";
import InputCustom from "../../../../components/Input";
import Map from "../../../../components/Map";
import { CEP, PHONE } from "../../../../components/NumberFormat";
import Input from "../../../../components/ReduxForm/Input";
import InputNumber from "../../../../components/ReduxForm/InputNumber";
import api from "../../../../services/api";
// import Input from "../../../../components/ReduxForm/Input";
import { CardWrapper, HeadBarTitle, Title, ButtonContainer } from "./styles";
// import Input from "../../../components/ReduxForm/Input";

const CreateForm = ({
	handleSubmit,
	reset,
	loading,
    initialValues,
    ...props
}) => {
    const [zipCodeLoading, setZipCodeLoading] = useState(false);
    const [zipCodee, setZipCode] = useState('');
    const [localization, setLocalization] = useState({});

	const handleZipCodeChange = zipCode => {
		if (zipCode && zipCode.length === 8) {
			setZipCode(zipCode)
			setZipCodeLoading(true);
			fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
				.then(res => res.json())
				.then(json => {
					console.log(json)
					if (json) {
						props.change("address", json.logradouro);
						props.change("city", json.localidade);
						props.change(
							"state", json.uf
							// states.find(c => c.value === json.uf)
						);
					}
					setZipCodeLoading(false);
				})
				.catch(err => {
					console.log(err);
					setZipCodeLoading(false);
				});
		}
	};
const getLocation = async (code)=>{
	const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${code}&key=AIzaSyAO2prDBMuQLK97HIqojo2NlaAQ-s2zBBk`)
	return response;
}

useEffect(()=>{
	if(zipCodee.length===8){
		const location = getLocation(zipCodee)
		console.log(location)
		setLocalization(location)
	}
},[zipCodee])
	
	return (
        <CardWrapper>
        <HeadBarTitle >
            <Title >Cadastrar cliente</Title>
        </HeadBarTitle>
		<form className="form" onSubmit={handleSubmit}>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={8} lg={8} className="form__form-group">
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

                    <Col xs={12} sm={12} md={4} lg={4} className="form__form-group">
						<span className="form__form-group-label">Telefone</span>
						<div className="form__form-group-field">
							<Field
								name="phone"
								component={PHONE}
								type="text"
								placeholder="(##)####-####"
							/>
						</div>
					</Col>

                    <Row>
                    <HeadBarTitle><span>Endereço</span></HeadBarTitle>
                    <Col xs={12} sm={12} md={3} lg={3} className="form__form-group">
						<span className="form__form-group-label">Cep</span>
						<div className="form__form-group-field">
							<Field
								name="zipCode"
								component={CEP}
								type="text"
                                onChange={handleZipCodeChange}
								placeholder="00000-000"
							/>
						</div>
					</Col>
                    <Col xs={12} sm={12} md={7} lg={7} className="form__form-group">
						<span className="form__form-group-label">Rua</span>
						<div className="form__form-group-field">
							<Field
								name="address"
								component={Input}
								type="text"
								placeholder="Rua Augusta"
							/>
						</div>
					</Col>
                    <Col xs={12} sm={12} md={2} lg={2} className="form__form-group">
						<span className="form__form-group-label">Numero</span>
						<div className="form__form-group-field">
							<Field
								name="number"
								component={Input}
								type="number"
                                min="1"
								placeholder="200"
							/>
						</div>
					</Col>
                    <Col xs={12} sm={12} md={3} lg={3} className="form__form-group">
						<span className="form__form-group-label">Cidade</span>
						<div className="form__form-group-field">
							<Field
								name="city"
								component={Input}
								type="text"
								placeholder="São Paulo"
							/>
						</div>
					</Col>
                    <Col xs={12} sm={12} md={3} lg={3} className="form__form-group">
						<span className="form__form-group-label">Estado</span>
						<div className="form__form-group-field">
							<Field
								name="state"
								component={Input}
								type="text"
								placeholder="São Paulo"
							/>
						</div>
					</Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="form__form-group">
						<span className="form__form-group-label">País</span>
						<div className="form__form-group-field">
							<Field
								name="country"
								component={Input}
								type="text"
								placeholder="Brasil"
							/>
						</div>
					</Col>
                    </Row>
					
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
		<Map />
        </CardWrapper>
	);
};

export default reduxForm({
	form: "client_create",
	// validate
})(CreateForm);