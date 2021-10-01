import React from 'react';

import {windowWidth} from './../../utils/dimension';
import * as S from './style';

const data = [
  {
    name: 'Italy',
    population: 100,
    color: '#0A0A0A',
    legendFontColor: '#979797',
    legendFontSize: 15,
  },
  {
    name: 'USA',
    population: 300,
    color: '#3B3B3B',
    legendFontColor: '#979797',
    legendFontSize: 15,
  },
  {
    name: 'India',
    population: 250,
    color: '#6C6C6C',
    legendFontColor: '#979797',
    legendFontSize: 15,
  },
  {
    name: 'Australia',
    population: 150,
    color: '#8A8A8A',
    legendFontColor: '#979797',
    legendFontSize: 15,
  },
  {
    name: 'Russia',
    population: 80,
    color: '#D8D8D8',
    legendFontColor: '#979797',
    legendFontSize: 15,
  },
];

const PieChartView = () => {
  const heading = 'Pie Chart';

  return (
    <S.Contain>
      <S.Text>{heading}</S.Text>
      <S.PieChartView
        data={data}
        width={windowWidth}
        height={220}
        paddingLeft={5}
        center={[0, 0]}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          color: (opacity = 0.5) => `rgba(191, 191, 191, ${opacity})`,
          labelColor: (opacity = 1) => '#3B3B3B',
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        absolute
      />
    </S.Contain>
  );
};
export default PieChartView;
