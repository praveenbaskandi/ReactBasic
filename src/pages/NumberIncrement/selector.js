import {useSelector} from 'react-redux';

const useSelect = () => {
  const {incrementData, incrementText} = useSelector(
    ({numberIncrement: NI}) => NI,
  );

  return {
    incrementData,
    incrementText,
  };
};

export default useSelect;
