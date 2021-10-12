import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "../../Pages/Home/HomeComponent";
import ChatContainer from "../../Pages/Chat/ChatContainer";
import InterviewQuestions from "../../Pages/InterviewQuestions/InterviewQuestionsComponent";
import Login from "../../Pages/Login/LoginComponent";
import StudyContent from "../../Pages/StudyContent/StudyContentComponent";
import UserProfile from "../../Pages/UserProfile/UserProfileComponent";

const AppRouter = () => {
    return (
            <Switch>
                <Route path="/chat">
                    <ChatContainer />
                </Route>
                <Route path="/InterviewQuestions">
                    <InterviewQuestions />
                </Route>
                <Route path="/StudyContent">
                    <StudyContent />
                </Route>
                <Route path="/UserProfile">
                    <UserProfile />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
    )
}
export default AppRouter;