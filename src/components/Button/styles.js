import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 1.375rem;
    position: relative;

    color: #fff;

    padding: 0.125rem 0.75rem;
    margin: 1rem 0;

    min-width: 7.5rem;
    width: 100%;

    ${({variant}) => variant != "primary" && css`
        min-width: 10.438rem;
        height: 2.063;

        background: #e41050;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 0.063rem solid #e41050;
            top: -0.313rem;
            left: -0.375rem;
            width: calc(100% + 0.625rem);
            height: calc(100% + 0.625rem);
            border-radius: 1.375rem;
        }

    `}

`