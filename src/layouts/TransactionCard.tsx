import * as React from 'react';
import { Transaction } from '../graphql/responseTypes';
import { AntDesign, Feather } from '@expo/vector-icons';
import { iconStyle, Col, Row, CardText, CardTitle } from './Primitives';
import Card from './Card';

export default function TransactionCard({
  index,
  date: { date },
  onPress,
}: Transaction & { onPress: () => void }): JSX.Element {
  return (
    <Card minHeight={120} onPress={onPress}>
      <Col>
        <Row>
          <AntDesign style={iconStyle} name="switcher" size={28} color="black" />
          <CardTitle>Transaction Index:</CardTitle>
        </Row>
        <CardText>{index}</CardText>
      </Col>

      <Col>
        <Row>
          <Feather style={iconStyle} name="clock" size={28} color="black" />
          <CardTitle>Transaction Date:</CardTitle>
        </Row>
        <CardText>{date}</CardText>
      </Col>
    </Card>
  );
}
