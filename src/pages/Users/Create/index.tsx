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
import { User } from '../../../store/ducks/users/types';
import { createRequest } from '../../../store/ducks/users/actions';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import CreateForm from '../components/CreateForm';

interface Message {
  code: string,
  message: string
}
const Create: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error} = useSelector((state: ApplicationState) => state.users);
  const [message, setMessage] = useState({} as Message)
  const [close, setClose] = useState(false)
  const nav = useHistory();

  const onSubmit = data => {
		// const errors = validate(data);

		// if (Object.keys(errors).length > 0) {
		// 	throw new SubmissionError(errors);
		// }

    const values = {
      username: data.name,
      email:data.email,
      password:data.password
    }

      dispatch(createRequest(values as User))
    if(error){
      setClose(true)
      setMessage({code: 'Error', message: "Oooops algo deu errado :("})
    }else{
      setClose(true)
      setMessage({code: 'Ok', message: "Usuário criado com sucesso"})
    }

	};
  
 return (
   <>

    {message && close && (
      <Alert variant={message.code === 'Ok' ? "success":"danger"} onClick={()=>setClose(false)}>{message.message}</Alert>
    )}

   <Container>

      <CreateForm
        onSubmit={onSubmit}
        loading={loading}
      />
		</Container>
   </>
   
 );
};

export default Create;