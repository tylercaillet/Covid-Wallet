const Covid = require('../models/covidDocuments')

const createCovid = async (req, res) => {
  try {
    const covid = await new Covid(req.body)
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
    const covids = await Covid.find()
    return res.status(200).json({ covids })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCovidById = async (req, res) => {
  try {
    const { id } = req.params
    const covid = await Covid.findById(id)
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
    const covid = await Covid.findByIdAndUpdate(req.params.i, req.body, {
      new: true
    })
    res.status(200).json(covid)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCovid = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Covid.findByIdAndDelete(id)
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
  deleteCovid
}
