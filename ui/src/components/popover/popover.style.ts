import styled from 'styled-components/macro';

export const PopoverContainer = styled.div`
    position: relative;
`;

export const PopoverContent = styled.div`
    position: absolute;
    display: flex;
    padding: 12px 16px;
    z-index: 2;
    background: #FFF;
    box-shadow: 0 1px 2px 0 rgba(29, 30, 38, 0.05), 0 3px 10px 0 rgba(29, 30, 38, 0.1);
    border-radius: 6px;
`;