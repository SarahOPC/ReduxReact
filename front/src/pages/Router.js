import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LogInPage } from "./LogInPage";
import { ProfilePage } from "./ProfilePage";
import { DetailPage } from "./DetailPage";
import { EditProfilePage } from "./EditProfile";

function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/details" element={<DetailPage/>} />
                <Route path="/editProfile" element={<EditProfilePage/>} />
            </Routes>
        </Router>
    );
};

export default MainRouter;
