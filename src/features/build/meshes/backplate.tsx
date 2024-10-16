import React from 'react'

type Props = {
    sizes: DomainSizes,
}

function Backplate(props: Props) {

    return (
        <>
        {/* задняя крышка  */}
            <mesh {...props} position={[0, (props.sizes.height[0] / 2)-3, (0 - props.sizes.depth[0] / 2)+0.25]} >
                <boxGeometry args={[props.sizes.width[0], props.sizes.height[0]-2, 0.5]} />
                <meshStandardMaterial color="#d6e9ff"/>
            </mesh>
        </>
    )
}
export default Backplate