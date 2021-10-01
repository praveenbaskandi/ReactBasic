import React from 'react';

import {windowWidth} from './../../utils/dimension';
import * as S from './style';

const data = {
  labels: ['Test1', 'Test2'],
  legend: ['L1', 'L2', 'L3'],
  data: [
    [60, 60, 60],
    [30, 30, 60],
  ],
  barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
};

const StackedBarChartView = () => {
  const heading = 'Stacked Bar Chart';

  return (
    <S.Contain mb={20}>
      <S.Text>{heading}</S.Text>
      <S.StackedBarChartView
        data={data}
        width={windowWidth - 80}
        height={220}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0.5) => `rgba(191, 191, 191, ${opacity})`,
          labelColor: (opacity = 1) => '#3B3B3B',
        }}
        hideLegend={false}
      />
    </S.Contain>
  );
};
export default StackedBarChartView;
