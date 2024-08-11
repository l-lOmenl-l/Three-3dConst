import { BrowserRouter } from "react-router-dom"
import { ConfigProvider } from 'antd'
import { config } from '../config/theme'
import RouteMap from '../processes/routes'
type Props = {}

const App = (props: Props) => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={config}>
                <RouteMap />
            </ConfigProvider>
        </BrowserRouter>
    )
}

export default App