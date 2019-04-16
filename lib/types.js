'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  Course: {
    people: async ({ people }) => {
      let db
      let peopleData
      let ids
      try {
        db = await connectDb()
        ids = people ? people.map(id => ObjectID(id)) : []
        peopleData = ids.length > 0
          ? await db.collection('students').find(
            { _id: { $in: ids } }
          ).toArray()
          : []
      } catch (error) {
        console.error(error)
      }

      return peopleData
    }
  }
}
