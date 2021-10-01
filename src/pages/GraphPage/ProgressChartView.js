import React from 'react';

import {windowWidth} from './../../utils/dimension';
import * as S from './style';

const data = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

const ProgressChartView = () => {
  const heading = 'Progress Ring';

  return (
    <S.Contain>
      <S.Text>{heading}</S.Text>
      <S.ProgressChartView
        data={data}
        width={windowWidth - 80}
        height={250}
        strokeWidth={16}
        radius={22}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          color: (opacity = 0.5) => `rgba(191, 191, 191, ${opacity})`,
          labelColor: (opacity = 1) => '#3B3B3B',
        }}
        hideLegend={false}
      />
    </S.Contain>
  );
};
export default ProgressChartView;
