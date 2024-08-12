import axios from 'axios'
import { useEffect } from 'react'
import { RenderScene } from '../../features/BuildCloset/scene'

type Props = {}

const TestBuildForm = (props: Props) => {
    useEffect(() => {
        axios.get('http://localhost:8000/product/getAll').then((response) => {
            console.log(response.data)
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