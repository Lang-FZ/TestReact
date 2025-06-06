import React, { useState, PropsWithChildren } from "react";
import ShoppingCart from "./components/ShoppingCart";

interface AppStateValue {
    username: string;
    shoppingCart: {
        items: {
            id: number,
            name: string
        }[]
    }
}

const defaultContextValue: AppStateValue = {
    username: "LFZ",
    shoppingCart: {
        items: []
    }
}
export const appContext = React.createContext(defaultContextValue);

export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {

    const [state, setState] = useState(defaultContextValue);

    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    );
};