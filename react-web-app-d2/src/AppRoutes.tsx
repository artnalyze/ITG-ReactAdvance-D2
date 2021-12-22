import { Route, Routes } from 'react-router-dom'
import FrontLayout from './components/layouts/FrontLayout'
import Home from './pages/home/Home'

// const ARoutes = ({ element: Element, layout: Layout, ...rest }: any) => {
//     return <Route {...rest} element={Element}></Route>
// }

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <FrontLayout>
                        <Home />
                    </FrontLayout>
                }
            />
        </Routes>
    )
}

export default AppRoutes
