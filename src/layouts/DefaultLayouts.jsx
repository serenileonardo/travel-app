import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
    return (
        <>
            <MainHeader />
            <main>
                <Outlet />
            </main>
        </>
    );
}