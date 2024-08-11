import axios from 'axios'

type Props = {}

const TestBuildForm = (props: Props) => {
    axios.get('http://localhost:8000/product/getAll').then((response) => {
        console.log(response.data)
    })

    

    
    return (
        <div>TestBuildForm</div>
    )
}

export default TestBuildForm