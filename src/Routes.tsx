import { Route, Routes } from "react-router-dom"
import Account from "./components/pages/Account";
import Messenger from "./components/pages/Messenger";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Messenger />} />
            <Route path='/account' element={<Account />} />
        </Routes>
    )
}

export default AppRoutes;