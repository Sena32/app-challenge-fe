import { InputAdornment, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import FbBtn from '../../components/FbBtn';
import InputCustom from '../../components/Input';
import Input from '../../components/Input';
import { Spinner } from '../../components/Spinner/styles';
import AuthContext from '../../contexts/auth';
import { Container, Transition, Wrapper } from './styles';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string()
  .min(8)
  .required('Required'),
});

const Login: React.FC = () => {
    const {signIn} = useContext(AuthContext);
    const [type, setType] = useState('password')
    const [close, setClose] = useState(false)
    const nav = useHistory();
    
    const formik = useFormik({
      initialValues: {
        name: '',
        password: '',
      },
      validationSchema:schema,
      onSubmit: async values => {
        
        const user = {
           password:values.password, name: values.name
        }
        try {
          signIn(user)
          // notifySuccess('Especialidade cadastrada com sucesso!');
          formik.setSubmitting(false);
        } catch (error) {
          const message  = 'Oops algo deu errado';
          // notifyError(message);
          console.log(message);
          
          formik.setSubmitting(false);
        }
      },
    });

    useEffect(()=>{
      if(!!formik.errors.name || !!formik.errors.password){
        setClose(true)
      }
    },[formik.errors.name, formik.errors.password])

 return (
   <Wrapper>
    {close ? (
      <Alert onClose={() => setClose(false)} dismissible variant="danger" onClick={()=>setClose(false)}>Ooops Usuário e Senha necessários</Alert>
    ): ''}
     <Transition>
     <Container>
       <h1>Login</h1>
       
      <Form onSubmit={formik.handleSubmit} autoComplete="off">
      {/* <InputCustom name='email' label="Email" type='email' value={formik.values.email} onChange={formik.handleChange} helperText={formik.errors.email } error={Boolean(formik.errors.email)}/> */}
      <Input
        name='name'
        placeholder="Nome"
        type='text'
        value={formik.values.name}
        onChange={formik.handleChange}
        field="Nome"
        tooltip={false}
      />
      <Input
        name='password'
        value={formik.values.password}
        placeholder='Senha'
        type={type}
        onChange={formik.handleChange}
        field="Senha"
        tooltip={false}
        icon="password"
      >
        {type==='text'? <FaLockOpen onClick={()=>setType('password')} />: (
          <FaLock onClick={()=>{setType('text')}}/>
        )}
      </Input>

      <Button variant='primary' disabled={!(formik.isValid && formik.dirty && !formik.isSubmitting)}>
        {formik.isSubmitting ? <Spinner /> : 'Login'}
      </Button>
      <FbBtn/>
      </Form>
      <h5 onClick={()=>nav.push('/Account')}>Criar Usuário</h5>
     </Container>
     </Transition>

   </Wrapper>
 );
};

export default Login;