
import { createContext, createContext, useState } from "react";
const fetchDataContext = createContext();

export function fetchDataProvider ({children}) {
    return (
    <createContext value={{data}}>{children}</createContext>
    )
}

export default fetchDataContext