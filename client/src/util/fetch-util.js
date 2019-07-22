export function getData(url) {
  return sendData('GET', url);
}

export function postData(url, data = {}) {
  return sendData('POST', url, data);
}


export function putData(url, data = {}) {
  return sendData('PUT', url, data);
}

function sendData(method, url, data) {
  // Default options are marked with *
  return fetch(`//${document.location.host}/${url}`, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.json()); // parses JSON response into native JavaScript objects 
}