export default async function callApi(url, method, body) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    })
      .then((response) => {
        if (!response.ok) {
          reject(`Error: ${response.status}`);
        }
        return response.text().then((text) => {
          if (text) {
            resolve(JSON.parse(text));
          } else {
            reject(`Error: ${response.status}`);
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
