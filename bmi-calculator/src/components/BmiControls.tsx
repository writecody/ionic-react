import React from "react";
import {IonButton, IonCol, IonIcon, IonRow} from "@ionic/react";

import {calculatorOutline, refreshOutline} from "ionicons/icons";

const BmiControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow className='ion-padding'>
      <IonCol className='ion-text-left'>
        <IonButton onClick={props.onCalculate}>
          <IonIcon icon={calculatorOutline} slot='start' />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className='ion-text-right'>
        <IonButton onClick={props.onReset}>
          <IonIcon icon={refreshOutline} slot='start' />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
