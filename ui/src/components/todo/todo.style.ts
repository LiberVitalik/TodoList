import styled from 'styled-components/macro';
import { ColorPalette } from '../../theme/colors/colors';

export const TodoStyled = styled.li`
    width: 360px;
    height: 300px;
    box-sizing: border-box;
    box-shadow: 3px 2px 12px ${ColorPalette.Primary.Gray[400]};
    margin: 12px auto;
    background: #FFF;
    border-radius: 8px;
    padding: 18px;
`;

export const EditField = styled.textarea`
    width: 100%;
    height: 40%;
    box-sizing: border-box;
    resize: none;
`;