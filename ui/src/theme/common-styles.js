import styled, { css } from 'styled-components/macro';
import { ColorPalette } from './colors/colors';
import { SansPro } from './fonts/font';

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const resetDefaultButton = css`
    background: transparent;
    border: none;
    outline: none;
`;

export const BlockContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
`;

export const Text = styled.p`
    font-family: ${SansPro.regular};
    color: ${ColorPalette.Primary.Gray[ 800]};
    font-size: 18px;
    letter-spacing: 0;
    line-height: 28px;
    text-align: center;
`;

export const Ellipsis = (maxWidth) => {
    return css`
        max-width: ${maxWidth ? maxWidth + 'px' : '100%'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;
}