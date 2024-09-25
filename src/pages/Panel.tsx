import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import PageNotFound from './PageNotFound';
import Dashboard from '../components/Panel/Dashboard/Dashboard';
import SectionOne from '../components/Panel/Dashboard/SectionOne';
import Sidebar from '../components/NavBar/Sidebar';
import UserDashboard from '../components/Panel/Dashboard/UserDashboard';
import TokenExpired from '../auth/TokenExpired/TokenExpired';

const Panel = () => {
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loader, setLoader] = useState<boolean>(true);
    const [role, setRole] = useState<string>("");

    useEffect(() => {
        const auth_token = localStorage.getItem("auth_token");

        if (auth_token && auth_token.trim().length) {
            // navigate("/panel/dashboard")
            // set the required data in local storage
            let decodedToken = parseJwt(auth_token);
            console.log("decodeToken", decodedToken);
            let currentDate = new Date();
            let expiryDate = new Date(decodedToken.exp * 1000);
            if(currentDate < expiryDate) {
                setRole(decodedToken.role)
            } else {
                navigate("/token-expired")
            }

        } else {
            navigate("/login")
        }
        setLoader(false)
    }, [])


    function parseJwt(token: string) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }


    if (loader && role !== "") {
        return <></>
    }

    return (<div className="flex h-screen bg-gray-100">
        <Sidebar role={role} />
        <div className="flex-grow p-6">
            <Routes>
                <Route path='' element={<Suspense fallback={<></>}><Dashboard /></Suspense>} />
                {role === "admin" ?
                    <Route
                        path='dashboard'
                        element={<Suspense fallback={<></>}><Dashboard /></Suspense>}
                    /> :
                    <Route
                        path='dashboard'
                        element={<Suspense fallback={<></>}><UserDashboard /></Suspense>}
                    />}
                <Route path='section' element={<Suspense fallback={<></>}><SectionOne /></Suspense>} />
                <Route path='/*' element={<Suspense fallback={<></>}><PageNotFound /></Suspense>} />
            </Routes>
        </div>
    </div>
    )
}

export default Panel