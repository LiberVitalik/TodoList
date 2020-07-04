import styled from 'styled-components/macro';
import { ColorPalette } from '../../theme/colors/colors';

const HEADER_HEIGHT = 70;

export const ContentStyled = styled.div`
    margin-top: ${HEADER_HEIGHT}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${ColorPalette.Primary.Gray[100]};
`;