import React, {createContext} from "react";

interface TypeStore {
    weight: string,
    height: string,
    errors: string,
    generated: boolean,

    onWeight?: (value: string) => void,
    onHeight?: (value: string) => void,
    onErrors?: (value: string) => void,
    onGenerated?: (value: boolean) => void,
}

let firstValueStore: TypeStore = {
    weight: '',
    height: '',
    errors: 'string',
    generated: false
};
export const StoreContext = createContext(firstValueStore);