/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { SubmissionError } from 'redux-form';
import AuthContext from '../../../contexts/auth';
// import api from '../../../services/api';
import { ApplicationState } from '../../../store';
import { createRequest } from '../../../store/ducks/users/actions';
import { User } from '../../../store/ducks/users/types';
import CreateForm from '../components/CreateForm';
import validate from '../components/CreateForm/validate';

interface Message {
  code: string,
  message: string
}
const Create: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error} = useSelector((state: ApplicationState) => state.users);
  const [message, setMessage] = useState({} as Message)
  const [close, setClose] = useState(false)
  const { userFacebook } = useContext(AuthContext);
  const nav = useHistory();

  const onSubmit = data => {
		const errors = validate(data);

		if (Object.keys(errors).length > 0) {
			throw new SubmissionError(errors);
		}

    const values = {
      username: data.name,
      email:data.email,
      password:data.password,
      password2:data.password2
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
  const initialValues = {
    name: userFacebook.name,
    email: userFacebook.email
  }
  
 return (
   <>

    {/* {message && close && (
      <Alert variant={message.code === 'Ok' ? "success":"danger"} onClick={()=>setClose(false)}>{message.message}</Alert>
    )} */}

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