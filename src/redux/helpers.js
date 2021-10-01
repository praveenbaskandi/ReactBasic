import {toastError} from '../UI/ToastController';

export const extractError = error => {
  if (typeof error === 'string') {
    return error;
  }

  if (error && Object.keys(error).length !== 0) {
    return (
      (error &&
        ((error.errors && error.errors._error) ||
          error?.error?.message?.error ||
          (error.error && error.error.message))) ||
      error.message
    );
  }

  return '';
};

export const errorHandler = ({
  onFailure,
  error,
  errors,
  dispatch,
  subTitleMessage,
}) => {
  const errorMessage = extractError(error) || errors.errorBackend;

  if (subTitleMessage) {
    toastError({title: errorMessage, subTitle: subTitleMessage});
  } else {
    toastError({title: errorMessage});
  }

  dispatch(onFailure(errorMessage));
};

export const submitFormHandler = ({
  onFailure,
  error,
  errorTranslations,
  dispatch,
}) => {
  const errorSubTitle = error?.error?.errors?.reduce(
    (accum, elem) => `${accum}${elem.path}`,
    errorTranslations.checkOutFields,
  );

  errorHandler({
    onFailure,
    error,
    errors: errorTranslations,
    dispatch,
    subTitleMessage: errorSubTitle,
    withSubmissionError: true,
  });
};
