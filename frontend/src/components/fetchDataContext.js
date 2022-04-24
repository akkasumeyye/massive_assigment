import axios from 'axios';
import React, { useState, useContext , useEffect } from 'react';


const AppContext = React.createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
  };


export {AppContext,AppProvider}

function AppProvider({children}) {

const [data, setData] = useState([]);
  const RestURL = "http://localhost:8000/api"


  const getData = ()=> {
    axios.get(RestURL)
    .then((res)=> {
      console.log(res.data);
      setData(res.data)
    })

};

useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={{data}}>
        {children}
    </AppContext.Provider>
)

}

