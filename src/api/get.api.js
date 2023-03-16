import axios from "axios";
import CONSTANT from "../utils/constants";

const zeflix = {
  async getPopular(page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/movie/popular?api_key=${CONSTANT.API_KEY}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getMovies(page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/movie/now_playing?api_key=${CONSTANT.API_KEY}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getRated(page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/movie/top_rated?api_key=${CONSTANT.API_KEY}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getDetails(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/movie/${id}?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getSearch(nama) {
    try {
      const response = await axios.get(
        `${CONSTANT.BASE_URL}/search/movie?api_key=${CONSTANT.API_KEY}&query=${nama}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getRiview(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/movie/${id}/reviews?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getGallery(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/movie/${id}/images?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getVideo(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/movie/${id}/videos?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getGenre() {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/genre/movie/list?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async byGenre(id, page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/discover/movie?api_key=${CONSTANT.API_KEY}&with_genres=${id}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default zeflix;
