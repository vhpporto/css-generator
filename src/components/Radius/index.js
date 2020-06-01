import React, { useEffect, useState } from "react";
import {
  Container,
  Component,
  TextValue,
  ContainerControl,
  ContainerTest,
  SliderBar,
} from "./styles";

const RadiusComp = () => {
  const [radiusValue, setRadiusValue] = useState(1);
  const [borderWidthValue, setBorderWidth] = useState(1);
  const [heightValue, setHeightValue] = useState(120);
  const [widthValue, setWidthValue] = useState(120);
  useEffect(() => {
    console.log(radiusValue);
  }, []);

  return (
    <Container>
      <ContainerControl>
        <TextValue>border-width: {borderWidthValue.toFixed(0)}px</TextValue>
        <SliderBar
          animateTransitions={true}
          minimumValue={1}
          maximumValue={100}
          value={borderWidthValue}
          onValueChange={(value) => setBorderWidth(value)}
        />
        <TextValue>border-radius: {radiusValue.toFixed(0)}px</TextValue>
        <SliderBar
          animateTransitions={true}
          minimumValue={1}
          maximumValue={100}
          value={radiusValue}
          onValueChange={(value) => setRadiusValue(value)}
        />
        <TextValue>height: {heightValue.toFixed(0)}px</TextValue>
        <SliderBar
          animateTransitions={true}
          minimumValue={1}
          maximumValue={200}
          value={heightValue}
          onValueChange={(value) => setHeightValue(value)}
        />
        <TextValue>width: {widthValue.toFixed(0)}px</TextValue>
        <SliderBar
          animateTransitions={true}
          minimumValue={1}
          maximumValue={200}
          value={widthValue}
          onValueChange={(value) => setWidthValue(value)}
        />
      </ContainerControl>
      <ContainerTest>
        <Component
          radius={radiusValue}
          borderWidth={borderWidthValue}
          height={heightValue}
          width={widthValue}
        />
      </ContainerTest>
    </Container>
  );
};

export default RadiusComp;
