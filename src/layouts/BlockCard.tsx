import * as React from 'react';
import { Block } from '../graphql/responseTypes';
import Card from './Card';
import { AntDesign, Feather } from '@expo/vector-icons';
import { iconStyle, Col, Row, Margin, CardText, CardTitle } from './Primitives';

export default function BlockCard({
  blockHash,
  height,
  timestamp: { time },
  onPress,
}: Block & { onPress: () => void }): JSX.Element {
  return (
    <Card onPress={onPress}>
      <Col>
        <Row>
          <Feather style={iconStyle} name="box" size={36} color="black" />
          <CardTitle>Hash:</CardTitle>
        </Row>
        <Col>
          <Margin>
            <CardText>{blockHash}</CardText>
          </Margin>
        </Col>

        <Row>
          <Col>
            <Margin>
              <Row>
                <AntDesign style={iconStyle} name="switcher" size={28} color="black" />
                <CardTitle>Block Height:</CardTitle>
              </Row>
              <CardText>{height}</CardText>
            </Margin>
          </Col>
          <Col>
            <Margin>
              <Row>
                <Feather style={iconStyle} name="clock" size={28} color="black" />
                <CardTitle>Timestamp:</CardTitle>
              </Row>
              <CardText>{time}</CardText>
            </Margin>
          </Col>
        </Row>
      </Col>
    </Card>
  );
}
