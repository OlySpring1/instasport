const API_URL = 'https://instasport.co/dashboard/api/v1/clubs/';

export const getData = () => {
  return fetch(API_URL)
    .then(response => response.json());
};
