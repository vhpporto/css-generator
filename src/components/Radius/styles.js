import styled from "styled-components/native";
import { Slider } from "react-native-elements";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #d6d6d6;
`;

export const Circle = styled.View`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.radius}px;
  border-width: ${(props) => props.borderWidth}px;
  border-color: #199fff;
  margin-top: 10px;
`;

export const BorderRadius = styled(Slider)`
  width: 80%;
`;

export const BorderWidth = styled(Slider)`
  width: 80%;
`;

export const TextValue = styled.Text`
  font-weight: 300;
  color: #666;
  margin: 10px;
`;

export const ContainerControl = styled.View`
  flex: 1;
  margin-top: 50px;
  width: 100%;
  align-items: center;
`;

export const ContainerTest = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  width: 100%;
`;
