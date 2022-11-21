import axios from 'axios';
import TestData from '../test-data'
const BASE_URL= process.env.REACT_APP_API_BASE_URL;
const invokeWebService = async (url, method, data) => {
  try {
    console.log(BASE_URL);
    const response = await axios({
      method,
      url: BASE_URL + url,
      data: data || {},
      headers: {
        // "Authorization": 'Bearer ' + tokenId,
        "Content-Type": 'application/json',
        // "uid":uid,
        // "collection": 'advertisments'
      },
      timeout: 90000,
    });
    console.log(response);
    return response.data;
  } catch(error) {
    console.log(`Request error from ${url}`);
    // logout();
    console.log('There was a request error');
    console.error(error);
    console.log(error.message)

    if (error?.response?.data?.error?.message) {
      throw new Error(error.response.data.error.message);
    }
  }
}
//
// export const checkPaymentLink = async(url) => {
//   return invokeWebService(`invoice/check/${url}`, 'GET');
// }
//
export const handleStripePayment = async(payload) => {
  return invokeWebService(`invoice/stripe`, 'POST', payload)
}


export const checkPaymentLink = async(url) => {
  return TestData.payments.filter(payment => payment.id == url)

}
