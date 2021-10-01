import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import {Title} from '../../UI/Text';
import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: ${Colors.glBackground};
`;

export const Contain = styled.View`
  margin-top: ${scale(10)};
  background-color: ${Colors.white};
  shadow-color: ${Colors.glGrey};
  margin-horizontal: 20px;
  shadow-offset: 0 10px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  border-radius: 5px;
  elevation: 10;
  margin-bottom: ${({mb = 0}) => scale(mb)}px;
`;

export const Text = styled(Title)`
  font-size: ${scale(15)};
  color: ${Colors.glBlack};
  text-align: center;
  margin-top: ${scale(20)}
  line-height: ${scale(15)};
`;

export const LineCharView = styled(LineChart)`
  padding-horizontal: ${scale(5)};
  padding-vertical: ${scale(5)};
`;

export const BarChartView = styled(BarChart)`
  padding-horizontal: ${scale(5)};
  padding-vertical: ${scale(5)};
`;

export const PieChartView = styled(PieChart)`
  padding-horizontal: ${scale(5)};
  padding-vertical: ${scale(5)};
`;

export const ProgressChartView = styled(ProgressChart)`
  padding-horizontal: ${scale(5)};
  padding-vertical: ${scale(5)};
`;

export const ContributionGraphView = styled(ContributionGraph)`
  padding-horizontal: ${scale(5)};
  padding-vertical: ${scale(5)};
`;

export const StackedBarChartView = styled(StackedBarChart)`
  padding-horizontal: ${scale(5)};
  padding-vertical: ${scale(5)};
`;
