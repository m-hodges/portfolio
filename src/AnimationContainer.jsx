import React, {
    useState,
    useEffect,
    useRef
} from 'react'

const AnimationContainer = (props) => {
    const [isVisible, setVisible] = useState(true)
    const domRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
        return () => observer.unobserve(domRef.current)
    }, [])
    return (
        <>
        {
            props.hr &&         
            <div ref={domRef} className={`scroll-in ${isVisible ? 'scroll-in--visible' : ''}`}>
                {props.children}
            </div>
        }
        {
            props.content && 
            <span ref={domRef} className={`fade-in ${isVisible ? 'fade-in--visible' : ''}`}>
                {props.children}
            </span>
        }
        {
            props.project && 
            <div ref={domRef} className={`fade-in ${isVisible ? 'fade-in--visible' : ''}`}>
                {props.children}
            </div>
        }
        {
            props.footer &&
            <div ref={domRef} className={`footer-fade-in ${isVisible ? 'footer-fade-in--visible' : ''}`}>
                {props.children}
            </div>
        }
        </>
    )
}

export default AnimationContainer