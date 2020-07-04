import styled from 'styled-components/macro';
import { ColorPalette } from '../../theme/colors/colors';
import { TodoTextStyles } from '../../theme/common-styles';

export const TodoStyled = styled.li`
    width: 360px;
    min-height: 120px;
    max-height: 300px;
    box-sizing: border-box;
    box-shadow: 3px 2px 12px ${ColorPalette.Primary.Gray[400]};
    margin: 2%;
    background: #FFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
`;

export const EditField = styled.textarea`
    width: 100%;
    height: 80%;
    max-height: 300px;
    box-sizing: border-box;
    resize: none;
    border: 1px solid ${ColorPalette.Primary.Gray[400]};
    padding: 6px;
    font-size: 14px;
`;

export const TodoText = styled.p`
    flex-grow: 1;
    white-space: pre-line;
`;

export const TodoContent = styled.div`
    ${TodoTextStyles};
    width: 100%;
    padding: 12px 6px 12px 12px;
    overflow: auto;
    
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar {
        width: 3px;
        border-radius: 6px;
    }
    
    ::-webkit-scrollbar-thumb {
        width: 3px;
        border-radius: 6px;
        background-color: ${ColorPalette.Primary.Gray[400]}
    }
`;