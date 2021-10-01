import React from 'react';

import {windowWidth} from './../../utils/dimension';
import * as S from './style';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const BarChartView = () => {
  const heading = 'Bar Chart';

  return (
    <S.Contain>
      <S.Text>{heading}</S.Text>
      <S.BarChartView
        data={data}
        width={windowWidth - 50}
        height={220}
        yAxisLabel="$"
        verticalLabelRotation={0}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0.5) => `rgba(191, 191, 191, ${opacity})`,
          labelColor: (opacity = 1) => '#3B3B3B',
          barPercentage: 0.5,
        }}
      />
    </S.Contain>
  );
};
export default BarChartView;
