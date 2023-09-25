import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LogInPage } from "./LogInPage";
// import { ProfilePage } from "./ProfilePage";

function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/logIn" element={<LogInPage />} />
                {/*<Route path="/profil" element={<ProfilePage/>} />*/}
            </Routes>
        </Router>
    );
};

export default MainRouter;
