import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { HomePage } from "./HomePage";
import { LogInPage } from "./LogInPage";
import { ProfilePage } from "./ProfilePage";
import { DetailPage } from "./DetailPage";
import { EditProfilePage } from "./EditProfile";

function MainRouter() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route
                    path="/profile"
                    element={isAuthenticated ? <ProfilePage /> : <LogInPage />}
                />
                <Route
                    path="/details"
                    element={isAuthenticated ? <DetailPage /> : <LogInPage />}
                />
                <Route
                    path="/editProfile"
                    element={isAuthenticated ? <EditProfilePage /> : <LogInPage />}
                />
            </Routes>
        </Router>
    );
};

export default MainRouter;
