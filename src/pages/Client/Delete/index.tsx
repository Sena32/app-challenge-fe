import { Modal } from '../../../components/Modal';
import React from 'react';
import { ApplicationState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRequest, setValue } from '../../../store/ducks/clients/actions';

// import { Container } from './styles';

const Delete: React.FC = () => {
    const dispatch = useDispatch();
    const {clientSelected, showModalDelete, error} = useSelector((state: ApplicationState) => state.clients);
    if(clientSelected === null) return null;
    console.log(clientSelected)
    const handleDelete = ()=>{
        dispatch(deleteRequest(clientSelected.id))
        handleClose()
    }

    const handleClose = ()=>{
        dispatch(setValue({showModalDelete: false}))
    }
  return (
      <Modal
        modalTitle="Deletar Cliente"
        buttonTitle="Confirmar"
        buttonColor="primary"
        show={showModalDelete}
        setShow={handleClose}
        setConfirm={handleDelete}
      >
          <p>{clientSelected.name}</p>
      </Modal>
  );
}

export default Delete;