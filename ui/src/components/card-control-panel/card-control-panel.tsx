import React from 'react';
import { CardControlPanelStyled } from './card-control-panel.styles';

export const CardControlPanel = props => {
    return (
        <CardControlPanelStyled>
            {props.children}
        </CardControlPanelStyled>
    )
}