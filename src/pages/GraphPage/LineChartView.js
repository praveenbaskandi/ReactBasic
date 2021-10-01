import React from 'react';

import {windowWidth} from './../../utils/dimension';
import * as S from './style';

const LineCharView = () => {
  const heading = 'Line Chart';
  return (
    <S.Contain>
      <S.Text>{heading}</S.Text>
      <S.LineCharView
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
          datasets: [
            {
              data: [10, 50, 15, 30, 5, 60],
            },
          ],
        }}
        width={windowWidth - 50} // from react-native
        height={250}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0.5) => `rgba(191, 191, 191, ${opacity})`,
          labelColor: (opacity = 1) => '#3B3B3B',
          propsForDots: {
            r: '3',
            strokeWidth: '1',
            stroke: '#3B3B3B',
          },
        }}
        bezier
      />
    </S.Contain>
  );
};
export default LineCharView;
