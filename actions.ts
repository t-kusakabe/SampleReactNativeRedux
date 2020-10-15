export const deleteName = () => ({
  type: 'DELETE_NAME',
  name: ''
});

export const setName = (name: string) => ({
  type: 'ADD_NAME',
  name: name
});

export const INITIAL_STATE = {
  name: 'foo'
};
