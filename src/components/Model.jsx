import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

export function Model(props) {
  const group = useRef();
  const ballRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models/holy_dragon_arena_of_valor.glb')
  const { actions } = useAnimations(animations, group)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(ballRef.current.position, 
      {
        y: 4,
        x: -1,
        duration: 1,
        ease: "power1.inOut",
      },
    );

    tl.from(group.current.position, {
      y: 5,
      duration: 1,
      ease: "circ.out",
    });


     gsap.to(group.current.rotation, {
    y: Math.PI * 2, 
    duration: 40,
    repeat: -1,
    ease: "none"
  });

  tl.to(ballRef.current.position, {
      x: 3,
      y: -1,
      z: 5,
      duration: 10,
      yoyo: true,
      repeat: -1
    });


  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.166}>
          <group
            name="193b51257de5493c9ea0212b52ed0cadfbx"
            rotation={[Math.PI / 2, 2, 0]}
            scale={0.02}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" scale={130}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_70"
                      geometry={nodes.Object_70.geometry}
                      material={materials.Mst_13_AbyssalDragon_Mid}
                      skeleton={nodes.Object_70.skeleton}
                    />
                    <group
                      name="Object_69"
                      position={[0, -0.948, 83.45]}
                      rotation={[-1.561, 0, 0]}
                      scale={135.4}
                    />
                    
                  </group>
                  <primitive ref={ballRef} object={nodes.Bone_Ball_052} /> 
                </group>
                <group
                  name="Camera"
                  position={[-154.777, 101.938, 889.449]}
                  rotation={[0, 1.417, 0.049]}
                  scale={100}>
                  <group name="Object_72" />
                </group>
                <group
                  name="Mst_13_AbyssalDragon_Mid"
                  position={[0, -0.948, 83.45]}
                  rotation={[-1.561, 0, 0]}
                  scale={135.4}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/holy_dragon_arena_of_valor.glb')
