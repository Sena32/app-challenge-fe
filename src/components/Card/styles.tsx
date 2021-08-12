import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 50%;
    padding: 20px;
    justify-content: space-evenly;

`;

export const CardImg = styled.div`
    img{
        max-width: 212px;
        max-height: 300px;
    }
    svg {
        max-width: 212px;
        max-height: 300px;
        font-size: 1000px;
    }
`;