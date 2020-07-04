import styled from 'styled-components/macro';
import { ColorPalette } from '../../theme/colors/colors';

export const HeaderStyled = styled.div`
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    border-bottom: 1px solid ${ColorPalette.Primary.Gray[300]};
    background: #FFF;
`;