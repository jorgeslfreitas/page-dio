import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 7.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.563rem;
    color: #fff;
    margin-bottom: 1.5rem;

`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.563rem;
    color: #fff70;
    margin-bottom: 1.5rem;

`

export const Column = styled.div`
    flex: ${({flex}) => flex};
    padding-right: 1.5rem

`

