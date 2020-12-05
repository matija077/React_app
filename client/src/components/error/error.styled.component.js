import styled from 'styled-components';

const ErrorStyledContainer = styled.div`
    position: absolute;
    left: 25%;
    top: 25%;
    right: 25%;
    bottom:50%;
    font-size: 5rem;
    z-index: 100;
    text-align: center;
    color: red;
    border: 10px solid black;
    border-radius: 25px;
    background-color: gray;
    overflow: auto;
    height: 50vh;
`;

export {
    ErrorStyledContainer,
}