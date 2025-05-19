import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date.js";

const DashboardPage = () => {

    // extract/desctructure "user" and "logout" from the object returned by useAuthStore()
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            DashboardPage
        </>
    )
}

export default DashboardPage;