import {useCallback, useRef} from 'react'

export default function useDebouncedCallback(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef<number>()

    const debouncedCallback = useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = window.setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback
}