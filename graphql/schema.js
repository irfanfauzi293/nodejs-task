const {gql} = require('apollo-server-express');
const dao = require('../dao/customer-dao');
const {date} = require('./custom-scalar');

const typeDefs = gql`

    scalar Date

    type Customer {
        dataId : Int
        name : String
        pob : String
        dob : Date
        nik : String
        mmn : String
        mob : String
        npwp : String
        customerGroup : String
        isActive : Int
    }

    type Query {
        customers : [Customer]
    }
`

const resolvers = {
    Date : ()=> date,
    Query : {
        customers: async () => await dao.selectAll()
    }
}

module.exports = {
    typeDefs,
    resolvers
}