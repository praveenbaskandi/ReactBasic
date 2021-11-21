import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import image1 from '../../assets/horizontal-scroll/scroll-one.png';
import image2 from '../../assets/horizontal-scroll/scroll-two.png';
import image3 from '../../assets/horizontal-scroll/scroll-three.png';
import image4 from '../../assets/horizontal-scroll/scroll-four.png';
import Header from '../../UI/Header';
import ButtonUI from '../../UI/Button';
import PageData from './page';
import * as S from './style';

const DATA = [
  {
    heading: 'Heading 1',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image1,
  },
  {
    heading: 'Heading 2',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image2,
  },
  {
    heading: 'Heading 3',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image3,
  },
  {
    heading: 'Heading 4',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image4,
  },
  {
    heading: 'Heading 5',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image1,
  },
  {
    heading: 'Heading 6',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image2,
  },
  {
    heading: 'Heading 7',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image3,
  },
  {
    heading: 'Heading 8',
    subHeading:
      'Heavy metals are generally defined as metals with relatively high densities, atomic weights, or atomic numbers. The criteria used, and whether metalloids are included, vary depending on the author',
    image: image4,
  },
];

const CrousalHorizontalPage = () => {
  const [activeDot, setActiveDot] = useState(0);
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const clickMe = 'Click Me!';
  const heading = 'Horizontal Scroll Page';

  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <S.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const local = Math.round(
            parseFloat(event.nativeEvent.contentOffset.x / width),
          );
          setActiveDot(local);
        }}>
        {DATA.map(items => (
          <PageData data={items} />
        ))}
      </S.ScrollView>
      <S.BottomContainer>
        <S.DotContainer>
          {DATA.map((_, i) => (
            <S.Dot active={i === activeDot} />
          ))}
        </S.DotContainer>
        <ButtonUI btnText={clickMe} style={2} />
      </S.BottomContainer>
    </S.Container>
  );
};

export default CrousalHorizontalPage;
