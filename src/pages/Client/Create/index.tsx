/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import BreadCrumb from '../../../components/BreadCrumb';
import SubHeader from '../../../components/SubHeader';
import { SubmissionError } from "redux-form";
import { ApplicationState } from '../../../store';
import { createRequest, updateRequest } from '../../../store/ducks/clients/actions';
import { Client } from '../../../store/ducks/clients/types';
import CreateForm from '../components/CreateForm';
import states from '../../../assets/states.json'
import validate from '../components/CreateForm/validate';
import Axios from 'axios';
import { Container } from './styles';

interface ParamTypes {
  id: string;
}

const Create: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();
  const {clientSelected, loading, error} = useSelector((state: ApplicationState) => state.clients);
  const [message, setMessage] = useState("")
  const [close, setClose] = useState(false)
  const [cities, setCities] = useState([])
  const [selectedState, setSelectedState] = useState(true)
  const nav = useHistory();

  const onSubmit = data => {
		const errors = validate(data);

		if (Object.keys(errors).length > 0) {
			throw new SubmissionError(errors);
		}

    const values = {
      name: data.name,
      phone:String(data.phone).match(/\d/g).join(""),
      address: {
        address:data.address, 
        number:String(data.number).match(/\d/g).join(""), 
        city:data.city.label, 
        state:data.state.label, 
        country:data.country, 
        zipCode:String(data.zipCode).match(/\d/g).join(""), 
      } 

    }
    if(id){
      const values = {
        id,
        name: data.name,
        phone:String(data.phone).match(/\d/g).join(""),
        address: {
          id: clientSelected.address.id,
          address:data.address, 
          number:String(data.number).match(/\d/g).join(""), 
          city:data.city.label, 
          state:data.state.label, 
          country:data.country, 
          zipCode:String(data.zipCode).match(/\d/g).join(""), 
        } 
  
      }
      dispatch(updateRequest(values as Client))
    }else{
      dispatch(createRequest(values as Client))
    }
    if(error){
      setClose(true)
      setMessage("Oooops algo deu errado :(")
    }else{
      setClose(false)
      nav.push('/app/clients')
    }

	};

  const getCities = async(state)=>{
    const response = await Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.value}/municipios`)
    if(response.status===200){
      setCities(response.data.map(c=>({value: c.id, label: c.nome})))
    }
  }

  const onChange = values=>{
    if (values.state && values.state.value) {
			setSelectedState(false)
      getCities(values.state)
		}
  }

	const initialValues = {
    name: id && clientSelected.name,
    phone:id && clientSelected.phone,
    address:id && clientSelected.address.address, 
    number:id && clientSelected.address.number, 
    city:id && {value: clientSelected.address.city, label: clientSelected.address.city}, 
    state:id && states.find(state=> state.label===clientSelected.address.state), 
    country:id && clientSelected.address.country, 
    zipCode:id && clientSelected.address.zipCode, 
	};
  
 return (
   <>
    <SubHeader>
    <BreadCrumb
          items={[
            { text: 'Home', to: '/app' }
          ]}
          itemActual={{
            text: 'Cadastro',
            to: '/app/clients/new',
          }}
          isNext
        />
    </SubHeader>
    {message && close && (
      <Alert variant="danger" onClick={()=>setClose(false)}>{message}</Alert>
    )}

   <Container>

      <CreateForm
        onSubmit={onSubmit}
        loading={loading}
        initialValues={initialValues}
        states={states}
        selectedState={selectedState}
        cities={cities}
        onChange={onChange}
      />
		</Container>
   </>
   
 );
};

export default Create;