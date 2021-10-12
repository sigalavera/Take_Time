import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../Pages/Home/HomeComponent";
import ChatContainer from "../../Pages/Chat/ChatContainer";
import InterviewQuestions from "../../Pages/InterviewQuestions/InterviewQuestionsComponent";
import Login from "../../Pages/Login/LoginComponent";
import StudyContent from "../../Pages/StudyContent/StudyContentComponent";
import UserProfile from "../../Pages/UserProfile/UserProfileComponent";
import Admin from "../../Pages/Admin/Admin";
import Store from "../../Pages/Store/Store";
import AddPersonToChat from "../../Pages/Chat/AddPerson/AddPersonToChat";
import DM from "../../Pages/Chat/DirectChat/DM";
const AppRouter = () => {
    return (
            <Switch>
                <Route path="/chat">
                    <ChatContainer />
                </Route>
                <Route path="/InterviewQuestions">
                    <InterviewQuestions />
                    <Admin />
                    <Store />
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
                <Route exact path="/">
                    <Login />                   
                </Route>
                
                <Route path="/DM">
                <AddPersonToChat />   
                <DM />
                </Route>
                <Route path="/Admin">

                </Route>
            </Switch>
    )
}
export default AppRouter;