import { createRoot } from 'react-dom/client'
import React from 'react'
import { VRButton, XR } from '@react-three/xr'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Scene } from './scene'

function App() {
  return (
    <>
      <VRButton />
      <Canvas shadowMap>
        <XR referenceSpace="local">
          <Physics
            gravity={[0, -2, 0]}
            iterations={20}
            defaultContactMaterial={{
              friction: 0.09
            }}>
            <Scene />
          </Physics>
        </XR>
      </Canvas>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
