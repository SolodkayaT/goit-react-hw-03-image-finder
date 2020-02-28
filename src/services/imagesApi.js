import axios from "axios";

const fetchImagesWithQuery = searchQuery => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=14836280-095028a335045ad546bd82bf5&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery
};
