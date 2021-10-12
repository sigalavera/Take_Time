import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../Pages/Home/HomeComponent";
import ChatContainer from "../../Pages/Chat/ChatContainer";
import Header from "../Header/HeaderComponent";
import Footer from "../Footer/FooterComponent"
import InterviewQuestions from "../../Pages/InterviewQuestions/InterviewQuestionsComponent";
import Login from "../../Pages/Login/LoginComponent";
import StudyContent from "../../Pages/StudyContent/StudyContentComponent";
import UserProfile from "../../Pages/UserProfile/UserProfileComponent";

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