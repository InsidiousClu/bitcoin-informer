import styled from 'styled-components/native';
export { default as Layout } from './Layout';
export { default as Button } from './Button';
export { default as Card } from './Card';
export { Col, Row, Margin } from './Primitives'

export const AppFlatList = styled.FlatList`
  padding: 0 15px 10px 15px;
`;

export const AppListFooter = styled.View`
  padding: 30px 0 20px 0;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const ScreenTitleText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
