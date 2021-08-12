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
    height: 80vh;
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
    }
`;

export const Title = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    width: 100%;
`;


export const HeadBarTitle = styled.div`
    span {
    font-weight: 400;
    font-size: 10px;
    color: #818181;
    display: block;
    width: 100%;
}
`;
