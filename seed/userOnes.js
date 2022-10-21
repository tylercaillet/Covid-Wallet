const db = require('../db')
const { UserOne } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const userOnes = [
    {
      firstName: 'Tyler',
      lastName: 'Caillet',
      email: 'tylercaillet2121@gmail.com'
    }
  ]

  await UserOne.insertOne(userOnes)
  console.log('Created user!')
}
const run = async () => {
  await main()
  db.close
}

run()
