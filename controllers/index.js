const { UserOne, CovidDocuments } = require('../models')

const createUserOne = async (req, res) => {
  try {
    const userOne = await new UserOne(req.body)
    await userOne.save()
    return res.status(201).json({
      userOne
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUserOne = async (req, res) => {
  try {
    const userOne = await new UserOne(req.body)
    await userOne.save()
    return res.status(201).json({
      userOne
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createCovid = async (req, res) => {
  try {
    const covid = await new CovidDocuments(req.body)
    await covid.save()
    return res.status(201).json({
      covid
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCovid = async (req, res) => {
  try {
    const covids = await CovidDocuments.find()
    return res.status(200).json({ covids })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCovidById = async (req, res) => {
  try {
    const { id } = req.params
    const covid = await CovidDocuments.findById(id)
    if (covid) {
      return res.status(200).json({ covid })
    }
    return res
      .status(404)
      .send('Covid document with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCovid = async (req, res) => {
  try {
    const covid = await CovidDocuments.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(covid)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCovid = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await CovidDocuments.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Document deleted')
    }
    throw new Error('Specific document not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCovid,
  getAllCovid,
  getCovidById,
  updateCovid,
  deleteCovid,
  createUserOne,
  getAllUserOne
}
