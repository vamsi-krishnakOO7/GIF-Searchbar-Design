import api from "./api";

const GIPHY_BASE_URL= `https://api.giphy.com/v1/gifs/`;

const DEFAULT_PARAMS = {
    api_key: process.env.REACT_APP_GIPHY_API_KEY,
    limit: 50,
};

export const fetchPopularGiphys = () => {
    return api.get("popular", { 
        baseURL: GIPHY_BASE_URL,
        params: DEFAULT_PARAMS,
    });
};

export const searchGiphys = (query) => {
    const params = {
      ...DEFAULT_PARAMS,
      q: query,
    };
  
    return api.get("search", {
      baseURL: GIPHY_BASE_URL,
      params,
    });
  };