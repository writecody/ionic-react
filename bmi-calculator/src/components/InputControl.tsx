import React from "react";

import {IonLabel, IonSegment, IonSegmentButton} from "@ionic/react";

const InputControl: React.FC<{selected: "mkg" | "ftlbs"; onSelectValue: (value: "mkg" | "ftlbs") => void}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectValue(event.detail.value);
  };
  return (
    <IonSegment className='ion-padding' value={props.selected} onIonChange={inputChangeHandler}>
      <IonSegmentButton value='mkg'>
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value='ftlbs'>
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
