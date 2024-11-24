import { useState } from 'react';

export function useHoverCardState(){
    const [stateLight, changeLightCard] = useState(false);
    const changeLigth = () => {
        changeLightCard( oldState => !oldState);
    };

    return [
        stateLight,
        changeLigth
    ];
}