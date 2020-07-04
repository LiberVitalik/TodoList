import styled from 'styled-components/macro';
import { FlexCenter, resetDefaultButton } from '../../theme/common-styles';
import { ColorPalette } from '../../theme/colors/colors';

export const CardControlPanelStyled = styled.div`
    width: 40px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid ${ColorPalette.Primary.Gray[400]};
    padding: 6px;
`;

export const ActionButtonStyled = styled.button`
    ${resetDefaultButton};
    ${FlexCenter};
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    margin-bottom: 6px;
    
    &:hover {
        svg,
        path {
            fill: ${ColorPalette.Primary.Gray[900]};
        }
    }
    
    svg,
    path {
        fill: ${ColorPalette.Primary.Gray[700]};
    }
`;