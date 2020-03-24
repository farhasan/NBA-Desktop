const initialState = {
  defaultSplashUrls: [
    'https://www.nba.com/images/cms/2018-10/lebron_dunk.jpg?w=1920&h=1080',
  ],
};

function splashUrlReducer(state = initialState, action) {
  return state;
}

const dataReducers = {
  splashUrlReducer,
};

export default dataReducers;
