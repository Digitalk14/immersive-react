import { useEffect, useState } from "react"
import { useThree } from '@react-three/fiber'

export function HandsReady(props) {
    const [ready, setReady] = useState(false)
    const { gl } = useThree()
    useEffect(() => {
      if (ready) return
      const joint = (gl.xr).getHand(0).joints['index-finger-tip']
      if (joint?.jointRadius !== undefined) return
      const id = setInterval(() => {
        const joint = (gl.xr).getHand(0).joints['index-finger-tip']
        if (joint?.jointRadius !== undefined) {
          setReady(true)
        }
      }, 500)
      return () => clearInterval(id)
    }, [gl, ready])
    console.log(gl)
    return ready ? props.children : null
  }