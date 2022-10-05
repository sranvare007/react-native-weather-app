import { RestApiHelper } from "./restApiHelper";

export const NetworkManager = {
  WEATHER_INFO: "data/2.5/weather",
  GET_WEATHER_ICON: "img/wn/",
  GET_LOCATION_NAME: "geo/1.0/reverse",

  async getWeatherInfo(params) {
    const finalUrl = await this.buildUrl(`${this.WEATHER_INFO}?`, params);
    const response = await RestApiHelper.makeGetRequest(finalUrl);
    return response;
  },

  async getWeatherIcon(params) {
    const finalUrl = `${this.GET_WEATHER_ICON}/${params.id}`;
    const response = await RestApiHelper.makeGetRequest(finalUrl);
    return response;
  },

  async getLocationName(params) {
    const finalUrl = await this.buildUrl(`${this.GET_LOCATION_NAME}?`, params);
    const response = await RestApiHelper.makeGetRequest(finalUrl);
    return response;
  },

  async buildUrl(url, params) {
    if (params) {
      let finalUrl = url;
      Object.keys(params).forEach((key) => {
        finalUrl += `${key}=${params[key]}&`;
      });
      return finalUrl;
    }
    return url;
  },
};
