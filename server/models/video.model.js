import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema ({
    id: String,
    title: String, 
    url: String, 
})

VideoSchema.methods = {
    create: function(videoId) {
        return null
    },
    remove: function(videoId) {
        return null 
    },
    get: function(videoId) {
        return null
    },
    findById: function(videoId) {
        return null
    }
}

export default mongoose.model('Video', VideoSchema)