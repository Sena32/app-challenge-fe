import React from 'react';
import {DialogTitleProps} from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, CloseButton, DialogActions, DialogContent} from './styles'
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '../Button';
import { PropTypes } from '@material-ui/core';
import { Modal as ModalCustom } from 'react-bootstrap';

interface Props extends DialogTitleProps  {
    onClose(): void;
}

interface PropsModal  {
    setShow(): void;
    setConfirm(): void;
    show: boolean;
    modalTitle: string;
    buttonTitle: string;
    buttonColor: PropTypes.Color;
    children: React.ReactNode
    // onClose(): void;
}
const DialogTitleCustom: React.FC<Props> = ({children, onClose})=> {
    return (
      <DialogTitle disableTypography >
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <CloseButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        ) : null}
      </DialogTitle>
    );
  };

export function Modal({children, modalTitle, setShow, setConfirm, buttonTitle, buttonColor, show }: PropsModal) {
  
    return (
      <ModalCustom
        show={show}
        onHide={setShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalCustom.Header closeButton>
          <ModalCustom.Title>{modalTitle}</ModalCustom.Title>
        </ModalCustom.Header>
        <ModalCustom.Body>{children}</ModalCustom.Body>
        <ModalCustom.Footer>
          <Button variant="secondary" onClick={setShow}>
            CANCELAR
          </Button>
          <Button variant="danger" onClick={setConfirm}>
            {buttonTitle}
          </Button>
        </ModalCustom.Footer>

        {/* <Dialog onClose={setShow} aria-labelledby="customized-dialog-title" maxWidth="xl" open={show}>
          <DialogTitleCustom id="customized-dialog-title" onClose={setShow}>
            {modalTitle}
          </DialogTitleCustom>
          <DialogContent dividers>
            {children}
          </DialogContent>
          <DialogActions>
            <Button variant="danger" onClick={setShow} color="default">
                CANCELAR
            </Button>
            <Button onClick={setConfirm} color={buttonColor}>
                {buttonTitle}
            </Button>
          </DialogActions>
        </Dialog> */}
      </ModalCustom>
    );
  }