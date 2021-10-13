import React from "react";
import {Switch, Route } from "react-router-dom";
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
            <Route exact path="/chat">
                <ChatContainer />
            </Route>
            <Route exact path="/InterviewQuestions">
                <InterviewQuestions />
            </Route>
            <Route exact path="/StudyContent">
                <StudyContent />
                <Store />
            </Route>
            <Route exact path="/UserProfile">
                <UserProfile />
            </Route>
           
            <Route exact path="/Admin">
                <Admin />
            </Route> 
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/DM">
                <DM />

                <AddPersonToChat />
            </Route>
            
            {/* <Route path="/">
                <Login />
            </Route> */}
        </Switch>
    )
}
export default AppRouter;