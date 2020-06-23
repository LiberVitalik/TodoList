import styled from 'styled-components/macro';
import { ColorPalette } from '../../theme/colors/colors';

export const TodoStyled = styled.li`
    width: 80%;
    height: 60px;
    min-height: 40px;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    box-shadow: 3px 2px 12px #dedede;
    margin: 12px auto;
    border: 1px solid ${ColorPalette.Primary.Gray[300]};
`;