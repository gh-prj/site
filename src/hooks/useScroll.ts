import { useRef, useEffect} from 'react'

export default function useScroll(
    parentRef: React.RefObject<Element>,
    childRef: React.RefObject<Element>,
    canLoad: boolean,
    callback: () => void
) {
    const observer = useRef<IntersectionObserver>()
    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0.7
        }
        observer.current = new IntersectionObserver(([target]) => {
            console.log([canLoad, target.isIntersecting])
            if(canLoad && target.isIntersecting) {
                callback()
            }
        }, options)
        observer.current.observe(childRef.current!)
        return () => {
            if(childRef.current != null) {
                observer.current?.unobserve(childRef.current)
            }
        };
    }, [callback]);
}
