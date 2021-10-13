//get example
export const GET_EXAMPLE_REQUEST = 'GET_EXAMPLE_REQUEST';
export const getExampleRequest = () => {
  return {
      type: 'GET_EXAMPLE_REQUEST'
  }
}
export const GET_EXAMPLE_SUCCESS = 'GET_EXAMPLE_SUCCESS';
export const getExampleSuccess = examples => {
  return {
      type: 'GET_EXAMPLE_SUCCESS',
      examples     
  }
}
export const GET_EXAMPLE_FAILURE= 'GET_EXAMPLE_FAILURE';
export const getExampleFailure = error => {
  return {
      type: 'GET_EXAMPLE_FAILURE',
      error
  }
}
