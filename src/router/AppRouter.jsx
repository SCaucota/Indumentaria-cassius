import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./menuRoutes";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {
                    routes.map(({id, path, Element}) => (
                        <Route key={id} path={path} element={<Element/>} />
                    ))
                }

                <Route path="*" element={<h1>Error 404 - Not Found</h1>} />
            </Route>
        </Routes>
    )
}

export default AppRouter