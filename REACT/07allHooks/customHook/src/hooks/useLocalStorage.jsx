import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {

    const [name, setName] = useState(
        localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
    )

    useEffect(() => {
        localStorage.setItem(key, name)
    }, [name, key])

    return [name, setName]
}

export default useLocalStorage