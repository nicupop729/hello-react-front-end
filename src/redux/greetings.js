const RANDOM_GREET = 'redux/actions/get_random_greet';
const RANDOM_GREET_SUCCESS = 'redux/actions/get_random_greet/success';
const RANDOM_GREET_FAIL = 'redux/actions/get_random_greet/fail';

export const fetchRandomGreet = () => (dispatch) => {
  dispatch({ type: RANDOM_GREET });
  fetch('http://localhost:8000/random_greeting')
    .then((res) => res.json())
    .then((data) => dispatch({ type: RANDOM_GREET_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: RANDOM_GREET_FAIL, payload: err }));
};

const initialState = {
  loading: false,
  greeting: '',
  error: null,
};

const greetReducer = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_GREET_SUCCESS:
      return { ...state, loading: false, greeting: action.payload };
    case RANDOM_GREET_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default greetReducer;
