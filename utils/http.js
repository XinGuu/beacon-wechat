const baseURL = 'http://192.168.43.182:8080/';

const http = (url = '', param = {}, other = {}) => {
  const token = wx.getStorageSync('Authorization') || null;// intercept to add token
  const request = {
    url: baseURL + url,
    data: param,
    ...other,
  };
  if (token) {
    request.header = {
      ...request.header,
      'Authorization': token,
    };
  }
  return new Promise((resolve, reject) => {
    wx.request({
      ...request,
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
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
}
