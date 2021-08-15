import { PersonAdd } from '@material-ui/icons';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BreadCrumb from '../../../components/BreadCrumb';
import Button from '../../../components/Button';
import SubHeader from '../../../components/SubHeader';
import Table from '../../../components/Table';
// import {get} from '../../../services/api';
import { ApplicationState } from '../../../store';
import { loadRequest, setValue } from '../../../store/ducks/clients/actions';
import { Client } from '../../../store/ducks/clients/types';
import Delete from '../Delete';
import { CardWrapper } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const nav = useHistory();
  const {data, error, loading} = useSelector((state: ApplicationState) => state.clients);

    
  useEffect(() => {
    dispatch(loadRequest())
  }, []);
  
  const handleDelete = (client: Client)=>{
    dispatch(setValue({showModalDelete: true, clientSelected: client}));
  }


  const handleEdit = (client: Client)=>{

    dispatch(setValue({ clientSelected: client}));
    nav.push(`/app/clients/update/${client.id}`)
  }
 return (
   <>
  <SubHeader>
    <BreadCrumb
          items={[
            { text: 'Home', to: '/app' }
          ]}
          itemActual={{
            text: 'Clientes',
            to: '/app/clients',
          }}
          isNext
        />
    </SubHeader>
    <CardWrapper>
   <Table
      title="Clientes"
      titleButton="NOVO CLIENTE"
      icon={<PersonAdd/>}
      noData="Oops, Algo Errado"
      dataImport={data}
      loading={loading}
      columns={[
        { Header: 'Nome', accessor: 'name' },
        { Header: 'Telefone', accessor: 'phone' },
        // { Header: 'Descrição', accessor: 'description' },
        {
          Header: 'Ações',
          cell: (client) => {
            return (
              <div>
                <Button
                  variant="secondary"
                  
                  onClick={() => handleEdit(client as Client)}
                >
                  <EditOutlinedIcon />
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(client as Client)}
                >
                  <DeleteSweepOutlinedIcon />
                  Excluir
                </Button>
              </div>
            );
          },
        },
      ]}
      link="/app/clients/new"
    />
    </CardWrapper>
    <Delete/>
   </>
   
 );
};

export default Home;