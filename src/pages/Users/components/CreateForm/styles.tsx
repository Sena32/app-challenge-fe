import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 20px;
`;

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 40px;
    gap: 20px;
    flex-direction: column;
    flex: 1;
    height: 100vh;

    margin-bottom: 10px;
    background: #FFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    transition: all .5s ease-in;
    form {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 10px;
        width: 100%;
        h5{
            cursor: pointer;
            transition: all .3s;
            margin-top: 40px;
            align-self: center;
            &:hover{
                color: #001;
        }
    }
`;

export const Title = styled.h5`
    font-weight: bold;
    color: #818181;
    display: block;
    text-transform: uppercase;
`;


export const HeadBarTitle = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    width: 100%;
    border-bottom:1px solid #f1f1f1;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
    justify-content: flex-end;
    width: 100%;
    button{
        width: 200px;
        background: #000;
        color: #FFF;
    }
`;
