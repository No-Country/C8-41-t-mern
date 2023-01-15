


axios.interceptors.request.use( config => {
    // Haz algo antes que la petición se ha enviada
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
  ;
  });