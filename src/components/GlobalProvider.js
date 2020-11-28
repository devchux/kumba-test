import React, { createContext, useEffect, useState } from 'react'

export const GetAPIData = createContext({})
function GlobalProvider({children}) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetchAPI().then(result => (setData(result))).catch(err => (console.log(err)))
    },[]);
    const fetchAPI = async () => {
        let respoonse = await fetch('https://indapi.kumba.io/webdev/assignment')
        let result = await respoonse.json()

        return result
    }
    return (
        <GetAPIData.Provider value={data}>
            {children}
        </GetAPIData.Provider>
    )
}

export default GlobalProvider

