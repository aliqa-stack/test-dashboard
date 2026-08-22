import { useState, useEffect } from 'react'

const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (target <= 0) {
      setCount(0)
      return undefined
    }

    setCount(0)
    const stepTime = Math.max(Math.floor(duration / target), 1)
    const timer = setInterval(() => {
      setCount((previousCount) => {
        if (previousCount >= target) {
          clearInterval(timer)
          return target
        }
        return previousCount + 1
      })
    }, stepTime)

    return () => clearInterval(timer)
  }, [target, duration])

  return (
       <span className='font-bold text-4xl font-[Roboto]'>{count}+</span>
  
  )
}

export default CountUp