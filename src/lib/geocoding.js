import axios from "axios";

export const geocoding = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/json?',
},)

export const createAddress = (...args) => {
  const condensedAddress = args.reduce((pre, cur) => (pre + "+" + cur));
  return condensedAddress;
}
