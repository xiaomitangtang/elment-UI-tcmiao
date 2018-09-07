import axios from "axios";
// import envConf from '@/config/env/env.export'
import * as request from "@/config/api/api.conf";

export default class BaseApiController {
  constructor() {
    this._req = request;
    Object.keys(this._req).forEach(key => this._proxy(key));
  }

  _proxy(key) {
    let _ = this;
    Object.defineProperty(_, key, {
      configurable: false,
      enumerable: true,
      get() {
        return _._req[key];
      },
      set(newVal) {
        _.data[key] = newVal;
      }
    });
  }

  get(url, config) {
    return axios.get(url, config);
  }

  post(url, data, config) {
    return axios.post(url, data, config);
  }

  delete(url, config) {
    return axios.delete(url, config);
  }

  put(url, data, config) {
    return axios.put(url, data, config);
  }

  all(promises) {
    return Promise.all(promises);
  }
}
