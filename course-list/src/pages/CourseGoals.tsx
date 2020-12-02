import React from "react";
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton} from "@ionic/react";
import {useParams} from "react-router-dom";

import {COURSE_DATA} from "./Courses";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{courseId: string}>().courseId;
  const selectedCourseObject = COURSE_DATA.find((c) => c.courseId === selectedCourseId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>{selectedCourseObject ? selectedCourseObject.title : "No course found."}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Course Goals.tsx</h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
