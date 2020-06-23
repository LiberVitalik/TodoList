import styled from 'styled-components/macro';
import { resetDefaultButton, FlexCenter } from '../../theme/common-styles';
import { ColorPalette } from '../../theme/colors/colors';

export const AddTodoButtonStyled = styled.button`
    ${resetDefaultButton};
    ${FlexCenter};
    background: ${ColorPalette.Primary.Green[100]};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    &:hover {
        background: ${ColorPalette.Primary.Green[200]};
    }
    
    &:active {
        background: ${ColorPalette.Primary.Green[300]};
    }
    
    svg {
        width: 18px;
        height: 18px;
        fill: #FFF;
    }
`;