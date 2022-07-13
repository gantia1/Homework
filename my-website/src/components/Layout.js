import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";
import LoadingContext from "./LoadingContext";

function Layout() {
    const [loading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            <div>
                <Header />
                <Outlet />
                <Footer />
                {
                    loading && <Loading />
                }
            </div>
        </LoadingContext.Provider >
    );
}

export default Layout;