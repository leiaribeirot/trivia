export const GET_TOKEN = 'GET_TOKEN';
export const LOGIN = 'LOGIN';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILED = 'GET_QUESTIONS_FAILED';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_TOKEN_SUCESS = 'REQUEST_TOKEN_SUCESS';
export const REQUEST_TOKEN_FAIL = 'REQUEST_TOKEN_FAIL';

export const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export const getLogin = (email, name) => ({
  type: LOGIN,
  payload: {
    email,
    name,
  },
});

export const getQuestions = (questions) => ({
  type: GET_QUESTIONS,
  payload: questions,
});

const getQuestionsSuccess = (payload) => ({
  type: GET_QUESTIONS_SUCCESS,
  payload,
});

const getQuestionsFailed = (payload) => ({
  type: GET_QUESTIONS_FAILED,
  payload,
});

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const requestTokenSucess = (payload) => ({
  type: REQUEST_TOKEN_SUCESS,
  payload,
});

const requestTokenFailed = (error) => ({
  type: REQUEST_TOKEN_FAIL,
  payload: error,
});

export const getQuestionsThunkApi = (token) => async (dispatch) => {
  try {
    dispatch(getQuestions());
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const results = await response.json();
    dispatch(getQuestionsSuccess(results));
  } catch (error) {
    dispatch(getQuestionsFailed(error));
  }
};

export const getTokenAPI = () => async (dispatch) => {
  try {
    dispatch(requestToken());
    const fetchApiToken = await fetch('https://opentdb.com/api_token.php?command=request');
    const result = await fetchApiToken.json();
    dispatch(getQuestionsThunkApi(result.token));
    dispatch(requestTokenSucess(result));
  } catch (error) {
    dispatch(requestTokenFailed(error));
  }
};
