import axios from 'axios'
import { useEffect } from 'react'
import { RenderScene, scene } from '../../features/BuildCloset/scene'
import product from '../../entities/testProduct'
import BuildProduct from '../../features/BuildCloset/build'

type Props = {}

const TestBuildForm = (props: Props) => {
    useEffect(() => {
        axios.get('http://localhost:8000/product/getAll').then((response) => {
            product.initProduct(response.data[0])
            console.log(product)
            BuildProduct(scene)
        })
    },[])

    return (
        <>
                <div>TestBuildForm</div>
                <RenderScene/>
        </>
    )
}

export default TestBuildForm