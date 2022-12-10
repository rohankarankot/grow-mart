import { useEffect, useState } from 'react'
import axios from "axios"

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setLoading(true)
        axios.get(url).then((res) => setData(res.data)).catch((err) => setError(err)).finally(() => setLoading(false))
    }, [url])
    return { data, error, loading }
}

export default useFetch
