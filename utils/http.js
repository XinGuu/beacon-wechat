const baseURL = 'http://192.168.43.182:8080/';

const http = (url = '', param = {}, other = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      data: param,
      ...other,
      success: res => {
        resolve(res);
      },
      fail: e => {
        reject(e);
      },
    });
  });
};

const _get = (url, param = {}) => {
  return http(url, param);
};

const _post = (url, param = {}) => {
  return http(url, param, { method: 'post' });
};

const _put = (url, param = {}) => {
  return http(url, param, { method: 'put' });
};

const _delete = (url, param = {}) => {
  return http(url, param, { method: 'delete' });
};

module.exports = {
  _get,
  _post,
  _put,
  _delete,
}
