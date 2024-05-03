const Video = require('../models/video');

const getVideos = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving videos", error: error });
    }
};

const getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving video", error: error });
    }
};

const createVideo = async (req, res) => {
    try {
        const newVideo = new Video(req.body);
        const savedVideo = await newVideo.save();
        res.status(201).json(savedVideo);
    } catch (error) {
        res.status(500).json({ message: "Error creating video", error: error });
    }
};

const updateVideo = async (req, res) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedVideo) {
            return res.status(404).json({ message: "Video not found" });
        }
        res.status(200).json(updatedVideo);
    } catch (error) {
        res.status(500).json({ message: "Error updating video", error: error });
    }
};

const deleteVideo = async (req, res) => {
    try {
        const deletedVideo = await Video.findByIdAndDelete(req.params.id);
        if (!deletedVideo) {
            return res.status(404).json({ message: "Video not found" });
        }
        res.status(200).json({ message: "Video deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting video", error: error });
    }
};

module.exports = {
    getVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo
};