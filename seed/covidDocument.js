const db = require('../db')
const { userOne, covidDocuments } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const tylersDocuments = await userOne.find({ name: 'Tylers Documents' })

  const documents = [
    {
      title: 'Vaccination Card',
      DOB: 'June 8th, 1995',
      first: 'pfizer; May 13th, 2021',
      second: 'pfizer; June 6th, 2021',
      id: tylersDocuments[0]._id
    },
    {
      title: 'Booster Info',
      DOB: 'June 8th, 1995',
      info: 'pfizer; October 3rd, 2021',
      id: tylersDocuments[0]._id
    },
    {
      title: 'Last Covid Test',
      Date: 'October 21st, 2022',
      info: 'iHealth Covid-19 Antigen Rapid Test',
      id: tylersDocuments[0]._id
    },
    {
      title: 'Last tested positive for Covid',
      Date: 'July 6th, 2022',
      info: 'iHealth Covid-19 Antigen Rapid Test',
      id: tylersDocuments[0]._id
    }
  ]

  await covidDocuments.insertMany(documents)
  console.log('Created a list of needed documents')
}
const run = async () => {
  await main()
  db.close()
}

run()
