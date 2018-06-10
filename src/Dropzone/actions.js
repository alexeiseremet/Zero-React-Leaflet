// action types
export const types = {
  GET_IMAGE_URL: 'GET_IMAGE_URL',
};

// action creators
export const getImageUrlAsync = (file) => (dispatch) => {
  getDataUrl(file).then(url => {
    dispatch({
      type: types.GET_IMAGE_URL,
      url: url,
    })
  })
};

function getDataUrl(file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result)
  })
}
