import React, { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPrivate from "../adminDashBoard/adminPrivate";
import PrivateUser from "../User/privateUser";






const PagesRoutes = () => {

    const Home = lazy(() => import("./Home"))
    const SinglCard = lazy(() => import("./singlCard"))
    const UserDashBoard = lazy(() => import("./userDashBoard"))
    const AdminDashBoard = lazy(() => import("./AdminDashBoard"))
    const CreateCategory = lazy(() => import("../adminDashBoard/createCategory"))
    const Cart = lazy(() => import("./cart"))

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/singlCard/:id" element={<SinglCard />} />
                    <Route path="/userDashBoard" element={<PrivateUser />}>
                        <Route path="/userDashBoard" element={<UserDashBoard />} />
                    </Route>
                    <Route path="/adminDashBoard" element={<AdminPrivate />} >
                        <Route path="/adminDashBoard" element={<AdminDashBoard />}/>
                        <Route path="/adminDashBoard/createCategory" element={<CreateCategory />}/>
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default PagesRoutes