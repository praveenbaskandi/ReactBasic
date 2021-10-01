import React from 'react';

import {windowWidth} from './../../utils/dimension';
import * as S from './style';

const data = [
  {date: '2017-01-02', count: 1},
  {date: '2017-01-03', count: 2},
  {date: '2017-01-04', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-01-06', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 3},
  {date: '2017-03-01', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-03-05', count: 2},
  {date: '2017-02-30', count: 4},
];

const ContributionGraphView = () => {
  const heading = 'Contribution Graph';
  return (
    <S.Contain>
      <S.Text>{heading}</S.Text>
      <S.ContributionGraphView
        values={data}
        endDate={new Date('2017-04-01')}
        numDays={105}
        width={windowWidth - 80}
        height={220}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 0.5) => `rgba(191, 191, 191, ${opacity})`,
          labelColor: (opacity = 1) => '#3B3B3B',
          gutterSize: 10,
          squareSize: 100,
        }}
      />
    </S.Contain>
  );
};
export default ContributionGraphView;
