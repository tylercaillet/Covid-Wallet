const db = require('../db')
const { UserOne, CovidDocuments } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = await UserOne.find({ name: 'firstName' })
  const documents = [
    {
      title: 'Vaccination Card',
      DOB: 'June 8th, 1995',
      first: 'pfizer; May 13th, 2021',
      second: 'pfizer; June 6th, 2021',
      image:
        'https://www.pewtrusts.org/-/media/post-launch-images/2021/09/ap_21180592440374/1x1_s.jpg',
      userOne_id: users[0]._id
    },
    {
      title: 'Booster Info',
      DOB: 'June 8th, 1995',
      info: 'pfizer; October 3rd, 2021',
      image:
        'https://wp.dailybruin.com/images/2022/01/web.news_.booster.requirement.CM_.jpg',
      userOne_id: users[0]._id
    },
    {
      title: 'Last Covid Test',
      Date: 'October 21st, 2022',
      info: 'iHealth Covid-19 Antigen Rapid Test',
      image:
        'https://thumbs.dreamstime.com/z/covid-test-results-using-rt-pcr-method-rapid-antibody-showed-negative-positive-respectively-217100829.jpg',
      userOne_id: users[0]._id
    },
    {
      title: 'Last tested positive for Covid',
      Date: 'July 6th, 2022',
      info: 'iHealth Covid-19 Antigen Rapid Test',
      image:
        'https://charlescountycovid.org/wp-content/uploads/2022/04/iHealth--1024x683.jpg',
      userOne_id: users[0]._id
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
