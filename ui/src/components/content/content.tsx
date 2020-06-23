import React from 'react';
import { ContentStyled } from './content.style';

export const Content = ({ children }) => {
    return (
        <>
            <ContentStyled>
                { children }
            </ContentStyled>
        </>
    )
}