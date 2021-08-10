import $ from 'jquery';

export default function asyncHandler(url, methodType, data = {}) {
  const promiseObj = new Promise((resolve, reject) => {
    $.ajax({
      type: methodType,
      url,
      data,
      success: (results) => {
        resolve(results);
      },
      error: (error) => {
        if (error.status === 422 && url.substring(0, 8) === '/queries') {
          // Redirect to queries path when status code is 422
          // (i.e Invalid Session/Authenticity Token raised in backend)
          window.location = '/queries';
        }
        reject(error);
      },
    });
  });

  return promiseObj;
}
