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
  {
    courseId: "c1",
    title: "React - The Practical Guide",
    description: "This course will teach you everything you need to know to become an outstanding React developer.",
  },
  {
    courseId: "c2",
    title: "Ionic + React - The Complete Guide",
    description: "Have you ever wondered how Ionic and React work together? The answers are here...",
  },
  {courseId: "c3", title: "JavaScript for Experts", description: "Think you know everything there is to know about JS? Think again..."},
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
