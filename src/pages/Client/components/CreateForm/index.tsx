import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import Map from "../../../../components/Map";
import { CEP, PHONE } from "../../../../components/NumberFormat";
import Input from "../../../../components/ReduxForm/Input";
import validate from "./validate";
// import Input from "../../../../components/ReduxForm/Input";
import { ButtonContainer, CardWrapper, HeadBarTitle, Title } from "./styles";
import Axios from "axios";
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
    const [localization, setLocalization] = useState({} as {lat:any, lng: any});

	const handleZipCodeChange = zipCode => {
		if (zipCode && zipCode.length === 8) {
			setZipCode(zipCode)
			setZipCodeLoading(true);
			fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
				.then(res => res.json())
				.then(json => {
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
const getLocation =  (code)=>{
	let response;

	return response
}

useEffect(()=>{
	if(zipCodee.length===8){
		// fetch(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zipCodee}&key=AIzaSyAO2prDBMuQLK97HIqojo2NlaAQ-s2zBBk`)
		// .then(resp=>{
		// 	setLocalization(resp.json)
		// })
		const getData = async()=>{
			const response = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zipCodee}&key=AIzaSyAO2prDBMuQLK97HIqojo2NlaAQ-s2zBBk`)
			setLocalization(response.data.results[0].geometry.location)
		}
		getData();
	}
},[zipCodee])
	console.log(localization)
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
                    <HeadBarTitle><span>Endere??o</span></HeadBarTitle>
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
								placeholder="S??o Paulo"
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
								placeholder="S??o Paulo"
							/>
						</div>
					</Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="form__form-group">
						<span className="form__form-group-label">Pa??s</span>
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
		<Map lat={localization.lat} lng={localization.lng} />
        </CardWrapper>
	);
};

export default reduxForm({
	form: "client_create",
	validate
})(CreateForm);