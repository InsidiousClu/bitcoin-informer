import * as React from 'react';
import { DetailsScreenRouteParams } from './types';
import { Layout, Col, Card } from '../layouts';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

type Props = {
  route: any;
};

const Text = styled.Text`
  color: black;
  font-size: 15px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function Details({ route }: Props): JSX.Element {
  const {
    data: { __typename, ...rest },
  }: DetailsScreenRouteParams = route.params;

  const handleValueResolve = (value: any): JSX.Element | JSX.Element[] => {
    if (value instanceof Object && !Array.isArray(value)) {
      const { __typename, ...values } = value;
      return Object.keys(values).map(inner => <Text key={inner}>{value[inner]}</Text>);
    }
    return <Text>{value}</Text>;
  };

  return (
    <Layout>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        {Object.keys(rest).map(key => {
          return (
            <Card minHeight={80} key={key}>
              <Col>
                <Title>
                  {key
                    .replace(/([A-Z])/g, match => ` ${match}`)
                    .replace(/^./, match => match.toUpperCase())
                    .trim()}
                </Title>
                {handleValueResolve(rest[key])}
              </Col>
            </Card>
          );
        })}
      </ScrollView>
    </Layout>
  );
}
