// TODO : consolidate the controllers into one controller file

import Video from '../models/video.model'
import _ from 'lodash' // good for testing, etc 
import errorHandler from './../helpers/dbErrorHandler'

// needs a video id 


const create = (req, res, next) => {
  const video = new Video(req.body)
  video.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.status(200).json({
      message: "Uploaded video"
    })
  })
}

/**
 * Load video and append to req.
 */
const findById = (req, res, next, id) => {
  video.findById(id).exec((err, video) => {
    if (err || !video)
      return res.status('400').json({
        error: "video not found"
      })
    req.profile = video
    next()
  })
}

const get = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

// TODO: switch on the error type to be more specific with the messaage?
// const list = (req, res) => {
//   Video.find((err, videos) => {
//     if (err) {
//       return res.status(400).json({
//         error: errorHandler.getErrorMessage(err)
//       })
//     }
//     res.json(videos)
//   }).select('name email updated created')
// }

// const update = (req, res, next) => {
//   let video = req.profile
//   video = _.extend(video, req.body)
//   video.updated = Date.now()
//   video.save((err) => {
//     if (err) {
//       return res.status(400).json({
//         error: errorHandler.getErrorMessage(err)
//       })
//     }
//     video.hashed_password = undefined
//     video.salt = undefined
//     res.json(video)
//   })
// }

const remove = (req, res, next) => {
  let video = req.profile
  video.remove((err, deletedvideo) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    deletedvideo.hashed_password = undefined
    deletedvideo.salt = undefined
    res.json(deletedvideo)
  })
}

export default {
  create,
  findById,
  get,
  remove
}
