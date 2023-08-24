import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;

`

export const UserPicture = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 1.375rem;
    border: 0.188rem solid #fff;
    margin-right: 0.75rem;

`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.563rem;
    color: #fff

`

export const Progress = styled.div`
    width: 11.25rem;
    height: 0.375rem;
    background-color: #fff;
    border-radius: 0.188rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 0.375rem;
        border-radius: 0.188rem;
        background-color: #23dd7a;
    }
`