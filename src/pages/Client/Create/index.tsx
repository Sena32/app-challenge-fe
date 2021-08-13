/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import BreadCrumb from '../../../components/BreadCrumb';
import SubHeader from '../../../components/SubHeader';
import { SubmissionError } from "redux-form";
import { ApplicationState } from '../../../store';
import { createRequest, updateRequest } from '../../../store/ducks/clients/actions';
import { Client } from '../../../store/ducks/clients/types';
import CreateForm from '../components/CreateForm';
import validate from '../components/CreateForm/validate';

interface ParamTypes {
  id: string;
}

const Create: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();
  const {clientSelected, loading, error} = useSelector((state: ApplicationState) => state.clients);
  const [message, setMessage] = useState("")
  const [close, setClose] = useState(false)
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
        city:data.city, 
        state:data.state, 
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
          city:data.city, 
          state:data.state, 
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


	const initialValues = {
    name: id && clientSelected.name,
    phone:id && clientSelected.phone,
    address:id && clientSelected.address.address, 
    number:id && clientSelected.address.number, 
    city:id && clientSelected.address.city, 
    state:id && clientSelected.address.state, 
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
   {/* <Container>

      <CardWrapper>

        <h1>{id? 'EDITAR CLIENTE' : 'CADASTRAR CLIENTE'}</h1>
        <form onSubmit={formik.handleSubmit} >
        <InputCustom name='name' label='Nome' value={formik.values.name} placeholder='NOME' onChange={formik.handleChange} error={Boolean(formik.errors.name)} helperText={formik.errors.name} />
        <InputCustom name='phone' label='Telefone' value={formik.values.phone} placeholder='Telefone' onChange={formik.handleChange} error={Boolean(formik.errors.phone)} helperText={formik.errors.phone} />
  
        <Button color='primary' disabled={!(formik.isValid && formik.dirty && !formik.isSubmitting)}>
          {formik.isSubmitting ? <Spinner /> : 'Cadastrar'}
        </Button>
        </form>
      </CardWrapper>
   </Container> */}

   <Container>

      <CreateForm
        onSubmit={onSubmit}
        loading={loading}
        initialValues={initialValues}
      />
		</Container>
   </>
   
 );
};

export default Create;