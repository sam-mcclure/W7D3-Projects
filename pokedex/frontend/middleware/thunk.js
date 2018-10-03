const thunk = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  } //dispatch is not an function?
  return next(action);
};

export default thunk;
