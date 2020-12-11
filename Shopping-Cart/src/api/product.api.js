import axios from 'axios';

export const getAuthConfig = () => {
  const token = JSON.parse(localStorage.getItem('token'));
    let config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  return config;
}

export const listProducts = async() => {
    try {
      let config = getAuthConfig();
      console.log(config)
        return await axios.get(`http://localhost:8001/products`, config);
    } catch (e) {
        return e;
    }
}

export const placeOrder = async(data) => {
    try {
      let config = getAuthConfig();
      let url = 'http://localhost:8001/orders';
      return await axios.post(url, data.data, config);
    } catch (error) {
      return error;
    }
  }

  export const listOrders = async(data) => {
    try {
      let config = getAuthConfig();
      let url = 'http://localhost:8001/orders';
      return await axios.get(url, config);
    } catch (error) {
      return error;
    }
  }


  

  