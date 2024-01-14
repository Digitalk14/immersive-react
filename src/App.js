import { createRoot } from 'react-dom/client'
import React from 'react'
import { Controllers, Hands, VRButton, XR } from '@react-three/xr'
import './styles.css'
import { Canvas } from '@react-three/fiber'

// Oculus Browser with #webxr-hands flag enabled
function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Controllers />
          <Hands />
        </XR>
      </Canvas>
    </>
  )
}

//@ts-ignore
const root = createRoot(document.getElementById('root'))
root.render(<App />)
