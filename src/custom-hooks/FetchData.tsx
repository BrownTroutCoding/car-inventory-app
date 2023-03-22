import { useEffect, useState } from 'react'
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // when useEffect is used, handleDataFetch will happen once.
    useEffect( () => {
        handleDataFetch();
    // with [] at the end, it will return 'on mount'
    }, [])

  return { contactData, getData:handleDataFetch }
}

