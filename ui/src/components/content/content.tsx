import React, { ReactNode } from 'react';
import { ContentStyled } from './content.style';

export interface IContent {
    children: ReactNode;
}

export const Content = (props: IContent) => {

    const { children } = props;

    return (
        <>
            <ContentStyled>
                { children }
            </ContentStyled>
        </>
    )
}