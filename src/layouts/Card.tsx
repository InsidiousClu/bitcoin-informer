import * as React from 'react';
import styled from 'styled-components/native';
import createShadow from '../utils/createShadow';
import { TouchableOpacity } from 'react-native';

type Props = {
  children: JSX.Element | JSX.Element[];
  minHeight?: number | string;
  onPress?: () => void;
};

const CardContainer = styled.View<{ minHeight?: number | string }>`
  background: #ffffff;
  margin-top: 12px;
  padding: 10px;
  border-radius: 10px;
  ${props => `min-height: ${props.minHeight || 200}px`};
`;

const shadow = createShadow();

export default function Card({ children, minHeight, onPress = () => {} }: Props): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer minHeight={minHeight} style={shadow}>
        {children}
      </CardContainer>
    </TouchableOpacity>
  );
}
