import * as React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


type Props = {
  children?: JSX.Element | JSX.Element[]
}

const LayoutView = styled.View`
  padding-top: 40px;
  flex: 1;
`;

const Background = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;


export default function Layout({ children }: Props): JSX.Element {
  return <LayoutView>
    <StatusBar style="light" />
    <Background colors={['rgb(38,17,135)', 'rgb(38,17,135)', 'rgb(96,11,116)']} />
    {children}
  </LayoutView>
}
