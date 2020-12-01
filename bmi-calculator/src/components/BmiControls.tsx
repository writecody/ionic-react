import React from "react";
import {IonButton, IonCol, IonIcon, IonRow} from "@ionic/react";

import {calculatorOutline, refreshOutline} from "ionicons/icons";

const BmiControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow className='ion-margin-top'>
      <IonCol size='12' size-md='6' className='ion-text-center'>
        <IonButton size='large' expand='block' color='secondary' onClick={props.onCalculate}>
          <IonIcon icon={calculatorOutline} slot='start' />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol size='12' size-md='6' className='ion-text-center'>
        <IonButton size='large' expand='block' fill='clear' onClick={props.onReset}>
          <IonIcon icon={refreshOutline} slot='start' />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
