import { createRoot } from 'react-dom/client'
import React from 'react'
import { Controllers, Hands, VRButton, XR } from '@react-three/xr'
import './index.css'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[0, 0, 0]} intensity={10}/>
          <Controllers />
          <Hands />
        </XR>
      </Canvas>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
