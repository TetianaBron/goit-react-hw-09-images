const INAGES_PER_PAGE = 12;

function fetchImg(query, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '19207978-b8cc5d5178f1c84e5ac39b1c7';
  
    return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${INAGES_PER_PAGE}`)
    .then(response => response.json())
}

const api = {
  fetchImg,
  INAGES_PER_PAGE
};

export default api;