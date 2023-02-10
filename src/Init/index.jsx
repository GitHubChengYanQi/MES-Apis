export const initBaseURL = (url) => {
  window.dumiBaseURL = url;
};

export const initToken = (token) => {
  window.dumiToken = token;
};

export const responseConfig = (config) => {
  window.responseConfig = config;
};


export const Init = {
  initBaseURL,
  initToken,
  responseConfig,
};

