import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import {IonTabs, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton} from "@ionic/react";

import Courses from "./Courses";
import CourseGoals from "./CourseGoals";
import AllGoals from "./AllGoals";

import {list, trophyOutline} from "ionicons/icons";

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path='/courses' to='/courses/list' exact />
        <Switch>
          <Route path='/courses/list' exact>
            <Courses />
          </Route>
          <Route path='/courses/all-goals' exact>
            <AllGoals />
          </Route>
          <Route path='/courses/:courseId'>
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar className='ion-padding' slot='bottom'>
        <IonTabButton tab='all-goals-tab' href='/courses/all-goals'>
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab='courses-tab' href='/courses/list'>
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
