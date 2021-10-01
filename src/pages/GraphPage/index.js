import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../../UI/Header';
import LineCharView from './LineChartView';
import BarChartView from './BarCharView';
import PieChartView from './PieChartView';
import ProgressChartView from './ProgressChartView';
import ContributionGraphView from './ContributionGraphView';
import StackedBarChartView from './StackedBarChartView';
import * as S from './style';

const GraphPage = () => {
  const heading = 'Graph Page';
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Scroll>
        <Header text={heading} click={navigation.goBack} />
        <LineCharView />
        <BarChartView />
        <PieChartView />
        <ProgressChartView />
        <ContributionGraphView />
        <StackedBarChartView />
      </S.Scroll>
    </S.Container>
  );
};
export default GraphPage;
