const dotenv = require('dotenv').config('../.env')
import axios from 'axios'

import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const BASE_URL = process.env.OVIRT_API_URL;
export const api = axios.create({
    baseURL:  process.env.OVIRT_API_URL,
    auth: {
        username: process.env.OVIRT_USERNAME,
        password: process.env.OVIRT_PASSWORD
    }
})

export function getToken() {
    return api.get(process.env.OVIRT_SSO_URL);
}

console.log(BASE_URL);

function getDatacenters() {
    let token = getToken();
    return api.get('datacenters')
        .then(response => {
          console.log(response);
          return response.data.data_center;
        });
}

function getDatacenterById(id) {
    let token = getToken();
    return api.get(`datacenters/${id}`)
        .then(response => {
          console.log(response);
          return reponse.data
       });
}

const DatacenterType = new GraphQLObjectType({
    name: 'datacenter',
    description: 'oVirt datacenter',
    fields: () => ({
      id: { type: GraphQLID },
      name: {
          type: GraphQLString,
          description: 'datacenter name',
          resolve: obj => obj.name,
      },
      local: {
          type: GraphQLString,
          description: 'storage type',
          resolve: obj => obj.local,
      },
      quoteMode: {
          type: GraphQLString,
          description: 'quota mode',
          resolve: obj => obj.quota_mode
      },
  })
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'root query',
    fields: () => ({
        datacenters: {
            type: new GraphQLList(DatacenterType),
            description: 'All datacenters',
            resolve: () => getDatacenters()
        },
        datacenter: {
            type: DatacenterType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: (root, args) => getDatacenterById(args.id),
        }
    })
});

export default new GraphQLSchema({
    query: QueryType,
});
