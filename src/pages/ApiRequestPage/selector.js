import {useSelector} from 'react-redux';

const useSelect = () => {
  const {isLoading, userList} = useSelector(({apiRequestPage: ARP}) => ARP);

  return {
    isLoading,
    userList,
  };
};

export default useSelect;
