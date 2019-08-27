import { API_INITIAL, GOOGLE_MAP_API } from "./constants";
const HOMEPAGE_ID = 340;

/**
 * get location data
 */
export function getLocationData(value) {
  let url = `${GOOGLE_MAP_API}/geocode/json?latlng=${value}&key=AIzaSyCa4gODgo6AsfiXx0HzeUI2C01kqla9Kyc`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get homepage and its acf field data
 */
export function getHomePageData(city = "") {
  let url = `${API_INITIAL}/pages/${HOMEPAGE_ID}?city=${city}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get categories List
 */
export function getCategories(perpage = 10, currentpage = 1) {
  let url = `${API_INITIAL}/categories?per_page=${perpage}&page=${currentpage}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get categories List
 */
export function searchCategories(searchText, perpage = 10, currentpage = 1) {
  let url = `${API_INITIAL}/categories?search=${searchText}&per_page=${perpage}&page=${currentpage}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}
/**
 * get post List
 */
export function searchPost(
  searchText,
  city = "",
  perpage = 10,
  currentpage = 1
) {
  let url = `${API_INITIAL}/posts?search=${searchText}&per_page=${perpage}&page=${currentpage}&filter[category_name]=${city}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get post by category
 */
export function getPostByCategory(category, currentpage = 1, perpage = 10) {
  let url = `${API_INITIAL}/posts?categories=${category}&per_page=${perpage}&page=${currentpage}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}
/**
 * get post by tag
 */
export function getPostBytag(tag, city = "", currentpage = 1, perpage = 10) {
  let url = `${API_INITIAL}/posts?post_tag=${tag}&per_page=${perpage}&page=${currentpage}&filter[category_name]=${city}`;
  // let url = `${API_INITIAL}/posts?tags=${tag}&per_page=${perpage}&page=${currentpage}`
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get Tags List
 */
export function getTags(perpage = 10, currentpage = 1) {
  let url = `${API_INITIAL}/post_tag?per_page=${perpage}&page=${currentpage}`;
  // let url = `${API_INITIAL}/tags?per_page=${perpage}&page=${currentpage}`
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get Tags List
 */
export function searchTags(searchText, perpage = 10, currentpage = 1) {
  let url = `${API_INITIAL}/post_tag?search=${searchText}&per_page=${perpage}&page=${currentpage}`;
  // let url = `${API_INITIAL}/tags?search=${searchText}&per_page=${perpage}&page=${currentpage}`
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get Tags List
 */
export function searchGlobal(
  searchText = "",
  city = "",
  perpage = 10,
  currentpage = 1
) {
  let url = `${API_INITIAL}/search-global?s=${searchText}&city=${city}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get post by category
 */
export function getPostByCategoryName(name, currentpage = 1, perpage = 10) {
  let url = `${API_INITIAL}/posts?filter[category_name]=${name}&per_page=${perpage}&page=${currentpage}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get post by id
 */
export function getPostByID(id) {
  let url = `${API_INITIAL}/posts/${id}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get list place image
 */

export function getListPlaceImage(photoReference = "",width=100) {
  if (!photoReference) return null;
  let url = `${GOOGLE_MAP_API}/place/photo?photoreference=${photoReference}&key=AIzaSyCa4gODgo6AsfiXx0HzeUI2C01kqla9Kyc&maxwidth=${width}`;
  // console.log(url);
  return fetch(url)
    .then(data => data.url)
    .catch(error => {
      throw error;
    });
}

/**
 * get place details from place id
 */

export function getPlaceDetails(placeid = "") {
  if (!placeid) return null;
  let url = `${GOOGLE_MAP_API}/place/details/json?placeid=${placeid}&key=AIzaSyCa4gODgo6AsfiXx0HzeUI2C01kqla9Kyc`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

/**
 * get place nearby
 */

export function getNearbyPlaces(latlng = "") {
  if (!latlng) return null;
  let url = `${GOOGLE_MAP_API}/place/nearbysearch/json?location=${latlng}&radius=500&key=AIzaSyCa4gODgo6AsfiXx0HzeUI2C01kqla9Kyc`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}
