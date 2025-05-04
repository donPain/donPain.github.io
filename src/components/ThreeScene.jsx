import { Canvas } from '@react-three/fiber'
import { OrbitControls, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

export default function ThreeScene() {
  const points = useMemo(() => {
    const temp = []
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(20)
      const y = THREE.MathUtils.randFloatSpread(20)
      const z = THREE.MathUtils.randFloatSpread(20)
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  return (
    <div className="h-[300px] w-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 65, zoom: 60 }}>
        <Points positions={points} stride={3}>
          <PointMaterial size={0.3} color="#ffffff" />
        </Points>
        <OrbitControls autoRotate enableZoom={false}/>
      </Canvas>
    </div>
  )
}
