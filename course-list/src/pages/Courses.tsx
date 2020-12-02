import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export const COURSE_DATA = [
  {courseId: "c1", title: "React - The Practical Guide"},
  {courseId: "c2", title: "Ionic + React - The Complete Guide"},
  {courseId: "c3", title: "JavaScript for Experts"},
];

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.courseId}>
              <IonCol size-md='4' offset-md='4'>
                <IonCard>
                  <IonCardContent>
                    <h2>{course.title}</h2>
                    <IonButton routerLink={`/courses/${course.courseId}`} color='secondary' className='ion-margin-top ion-text-capitalize'>
                      View Course Goals
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
