import express from 'express'
import videoCtrl from '../controllers/video.controller'

const router = express.Router()

router.route('/api/video/:videoId')
  .get(videoCtrl.read)
  .post(videoCtrl.create)
  .delete(videoCtrl.delete)

// create authenticated routes for videos
router.param('videoId', videoCtrl.videoId)

export default router;
