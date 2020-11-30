import React from "react";
import {IonCard, IonCardContent, IonRow} from "@ionic/react";

const BmiResult: React.FC<{result: number}> = (props) => {
  return (
    <IonRow className='ion-text-center'>
      <IonCard>
        <IonCardContent>
          <h2>Your BMI:</h2>
          <h3>{props.result.toFixed(2)}</h3>
        </IonCardContent>
      </IonCard>
    </IonRow>
  );
};

export default BmiResult;
