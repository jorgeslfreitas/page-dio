import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 17.188rem;
    height: 1.875rem;
    border-bottom: 0.063rem solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    
`
export const IconContainer = styled.div`
    margin-right: 0.625rem;

`

export const InputText = styled.input`
    background-color: transparent;
    color: #fff;
    flex: 1;
    border: 0;
    height: 1.875rem;
    width: 100%;

`

export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px; 
    margin: 5px 0;
`
