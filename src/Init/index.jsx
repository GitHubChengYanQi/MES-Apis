export const initBaseURL = (url) => {
  window.dumiBaseURL = url;
};

export const responseConfig = (
  {
    loginTimeOut=()=>{},
    errorMessage=()=>{},
  }) => {
  window.loginTimeOut = loginTimeOut;
  window.errorMessage = errorMessage;
};


export const Init = {
  initBaseURL,
  responseConfig,
};

