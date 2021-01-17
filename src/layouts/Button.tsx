import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: string;
  onPress: () => void;
};

const Touchable = styled.TouchableOpacity`
  background: white;
  border-radius: 8px;
  padding: 15px 25px;
  color: black;
  width: 150px;
  height: 50px;
`;

const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: black;
  text-align: center;
  height: 100%;
`;

export default function Button({ children, onPress }: Props): JSX.Element {
  return (
    <Touchable onPress={onPress}>
      <Text>{children}</Text>
    </Touchable>
  );
}
