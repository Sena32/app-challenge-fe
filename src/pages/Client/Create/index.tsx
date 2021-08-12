/* eslint-disable jsx-a11y/alt-text */
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import BreadCrumb from '../../../components/BreadCrumb';
import Button from '../../../components/Button';
import InputCustom from '../../../components/Input';
import { Spinner } from '../../../components/Spinner/styles';
import SubHeader from '../../../components/SubHeader';
// import api from '../../../services/api';
import { ApplicationState } from '../../../store';
import { Client } from '../../../store/ducks/clients/types';
import { createRequest, updateRequest } from '../../../store/ducks/clients/actions';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import CreateForm from '../components/CreateForm';
import { HeadBarTitle, Title } from './styles';
// import { CardWrapper, Container } from './styles';

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

      
  // const formik = useFormik({
  //   initialValues: {
  //     name: id? clientSelected.name: '',
  //     phone: id? clientSelected.phone: '',
  //     // description: id? clientSelected.description: ''
  //   },

  //   onSubmit: async values => {

  //     if(id){
  //       const data = {
  //         id: clientSelected.id,
  //         name: values.name,
  //         phone:values.phone, 
          
  //       }
  //       formik.setSubmitting(true);
  //       dispatch(updateRequest(data as Client))
  //       formik.setSubmitting(false);
  //       nav.push('/app/books')
  //     }else{
  //       const data = {
  //         name: values.name,
  //         phone:values.phone, 
  //       }
  //       formik.setSubmitting(true);
  //       dispatch(createRequest(data as Client))
  //       formik.setSubmitting(false);
  //       nav.push('/app/clients')
  //     }


  //   },
  //   validate: values => {
      
  //     const errors: any = {};

  //     // if (!values.description || values.description.trim()==='' ) {
  //     //   errors.description = '*Campo descrição vazio ou inválido';
  //     // }

  //     if (!(values.name)) {
  //       errors.name = '*Campo nome vazio ou inválido';
  //     }

  //     else if (!(values.phone)) {
  //       errors.phone = '*Campo autor vazio ou inválido';
  //     }

  //     return errors;
  //   },
  // });

  const onSubmit = data => {
		// const errors = validate(data);

		// if (Object.keys(errors).length > 0) {
		// 	throw new SubmissionError(errors);
		// }

    const values = {
      name: data.name,
      phone:data.phone.match(/\d/g).join(""),
      address: {
        address:data.address, 
        number:data.number.match(/\d/g).join(""), 
        city:data.city, 
        state:data.state, 
        country:data.country, 
        zipCode:data.zipCode.match(/\d/g).join(""), 
      } 

    }
    if(id){
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