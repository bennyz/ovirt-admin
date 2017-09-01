import { api, getToken } from './api.js'

const endpoint = 'datacenters';

export function getDatacenters() {
    let token = getToken().then(data => {
        console.log(data);
    });
    return api.get('datacenters');
}

export function createDatacenter(datacenter) {
  let token = getToken().then(data => {
      console.log(data);
  });

  return api.post('datacenters', datacenter);
}
