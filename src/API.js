const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API = {
  getAll: async () => {
    const data = await fetch(SERVER_URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    return data.json();
  },
  delete: async id => {
    await fetch(`${SERVER_URL}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    });
  },
  update: async object => {
    await fetch(SERVER_URL, {
      method: 'PUT',
      body: JSON.stringify(object),
      headers: {
        'content-type': 'application/json'
      }
    });
  },
  create: async object => {
    const data = await fetch(SERVER_URL, {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'content-type': 'application/json'
      }
    });
    return data.json();
  }
};
export default API;
