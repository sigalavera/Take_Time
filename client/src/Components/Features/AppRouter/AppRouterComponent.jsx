import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/HomeComponent";
import Header from "./Components/Features/Header/HeaderComponent";
import Footer from "./Components/Features/Footer/FooterComponent";
import ChatContainer from "./Components/Pages/Chat/ChatContainer";
import InterviewQuestions from "./Components/Pages/InterviewQuestions/InterviewQuestionsComponent";
import Login from "./Components/Pages/Login/LoginComponent";
import StudyContent from "./Components/Pages/StudyContent/StudyContentComponent";
import UserProfile from "./Components/Pages/UserProfile/UserProfileComponent";

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/chat">
                    <ChatContainer />
                </Route>
                <Route path="/InterviewQuestions">
                    <InterviewQuestions />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/StudyContent">
                    <StudyContent />
                </Route>
                <Route path="/UserProfile">
                    <UserProfile />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}
export default AppRouter;