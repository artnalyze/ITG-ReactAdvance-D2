import { Route, Routes } from 'react-router-dom'
import FrontLayout from './components/layouts/FrontLayout'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Project from './pages/project/Project'
import Team from './pages/team/Team'

// const ARoutes = ({ element: Element, layout: Layout, ...rest }: any) => {
//     return <Route {...rest} element={Element}></Route>
// }

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<FrontLayout><Home /></FrontLayout>} />
            <Route path="/about" element={<FrontLayout><About /></FrontLayout>} />
            <Route path="/teams" element={<FrontLayout><Team /></FrontLayout>} />
            <Route path="/projects" element={<FrontLayout><Project /></FrontLayout>} />
        </Routes>
    )
}

export default AppRoutes
