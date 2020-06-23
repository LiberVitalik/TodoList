import React from 'react';
import { Overlay } from '../../theme/common-styles';
import { PopoverContainer, PopoverContent } from './popover.style';

export interface IPopoverProps {
    clickableElement: React.ReactNode;
    isPopover: boolean;
    setPopover: (boolean) => void;
    children: React.ReactNode;
}

export const Popover = (props: IPopoverProps) => {
    const { clickableElement, isPopover, setPopover, children } = props;

    return (
        <PopoverContainer>
            {clickableElement}
            {isPopover &&
            <>
                <Overlay onClick={() => setPopover(false)} />
                <PopoverContent>
                    {children}
                </PopoverContent>
            </>}
        </PopoverContainer>
    );
};