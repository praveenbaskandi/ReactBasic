import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {getUserList} from '../../redux/api-request-page/action';
import Header from '../../UI/Header';
import Loader from '../../UI/Loader';
import useSelect from './selector';
import * as S from './style';

const ApiRequestPage = () => {
  const heading = 'Api Request Page';
  const dispatch = useDispatch();
  const {userList, isLoading} = useSelect();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      {isLoading ? (
        <S.LoaderView>
          <Loader size={50} />
        </S.LoaderView>
      ) : null}
      {userList.map(item => (
        <S.Text font={10}>{item.name}</S.Text>
      ))}
    </S.Container>
  );
};

export default ApiRequestPage;
