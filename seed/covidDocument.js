const db = require('../db')
const { UserOne, CovidDocuments } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const tylersDocuments = await UserOne.find({ firstName: 'Tyler' })

  const documents = [
    {
      title: 'Vaccination Card',
      DOB: 'June 8th, 1995',
      first: 'pfizer; May 13th, 2021',
      second: 'pfizer; June 6th, 2021',
      userOne_id: tylersDocuments[0]._id
    },
    {
      title: 'Booster Info',
      DOB: 'June 8th, 1995',
      info: 'pfizer; October 3rd, 2021',
      userOne_id: tylersDocuments[0]._id
    },
    {
      title: 'Last Covid Test',
      Date: 'October 21st, 2022',
      info: 'iHealth Covid-19 Antigen Rapid Test',
      userOne_id: tylersDocuments[0]._id
    },
    {
      title: 'Last tested positive for Covid',
      Date: 'July 6th, 2022',
      info: 'iHealth Covid-19 Antigen Rapid Test',
      userOne_id: tylersDocuments[0]._id
    }
  ]

  await CovidDocuments.insertMany(documents)
  console.log('Created a list of needed documents')
}
const run = async () => {
  await main()
  db.close()
}

run()
