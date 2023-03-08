import axios from "axios";
import CONSTANT from "../utils/constants";

const zeflix = {
  async getPopular(page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/tv/popular?api_key=${CONSTANT.API_KEY}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getSeries(page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/tv/airing_today?api_key=${CONSTANT.API_KEY}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getRated(page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/tv/top_rated?api_key=${CONSTANT.API_KEY}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getDetails(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/tv/${id}?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getSearch(nama) {
    try {
      const response = await axios.get(
        `${CONSTANT.BASE_URL}/search/tv?api_key=${CONSTANT.API_KEY}&query=${nama}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getRiview(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/tv/${id}/reviews?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getGallery(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/tv/${id}/images?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getVideo(id) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/tv/${id}/videos?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getGenre() {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/genre/tv/list?api_key=${CONSTANT.API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async byGenre(id, page) {
    try {
      const response = axios.get(
        `${CONSTANT.BASE_URL}/discover/tv?api_key=${CONSTANT.API_KEY}&with_genres=${id}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default zeflix;
