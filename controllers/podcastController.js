const Podcast = require('../models/podcast');

const getPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.find({});
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving podcasts", error: error });
    }
};

const getPodcastById = async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id);
        if (!podcast) {
            return res.status(404).json({ message: "Podcast not found" });
        }
        res.status(200).json(podcast);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving podcast", error: error });
    }
};

const createPodcast = async (req, res) => {
    try {
        const newPodcast = new Podcast(req.body);
        const savedPodcast = await newPodcast.save();
        res.status(201).json(savedPodcast);
    } catch (error) {
        res.status(500).json({ message: "Error creating podcast", error: error });
    }
};

const updatePodcast = async (req, res) => {
    try {
        const updatedPodcast = await Podcast.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPodcast) {
            return res.status(404).json({ message: "Podcast not found" });
        }
        res.status(200).json(updatedPodcast);
    } catch (error) {
        res.status(500).json({ message: "Error updating podcast", error: error });
    }
};

const deletePodcast = async (req, res) => {
    try {
        const deletedPodcast = await Podcast.findByIdAndDelete(req.params.id);
        if (!deletedPodcast) {
            return res.status(404).json({ message: "Podcast not found" });
        }
        res.status(200).json({ message: "Podcast deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting podcast", error: error });
    }
};

module.exports = {
    getPodcasts,
    getPodcastById,
    createPodcast,
    updatePodcast,
    deletePodcast
};