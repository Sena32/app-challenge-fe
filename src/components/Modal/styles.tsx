import { IconButton } from "@material-ui/core";
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import styled from "styled-components";


export const DialogTitle = styled(MuiDialogTitle)`
    padding: 20px;
    display: flex;
    width: 40vw;
    align-items: flex-end;
    justify-content: space-between;

`;

export const DialogContent = styled(MuiDialogContent)`
    padding: 20px;
    display: flex;
    flex: 1;

`;

export const CloseButton = styled(IconButton)`
`;


export const DialogActions = styled(MuiDialogActions)`
    padding: 2px;
    margin: 0;

`;