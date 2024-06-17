const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// Get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Add a project
router.post('/projects', async (req, res) => {
    const { title, description, imageUrl } = req.body;
    console.log('called');
    try {
        const newProject = new Project({
            title,
            description,
            imageUrl,
        });

        await newProject.save();
        res.json(newProject);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Update a project
router.put('/projects/:id', async (req, res) => {
    const { title, description, imageUrl } = req.body;

    try {
        let project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        project.title = title;
        project.description = description;
        project.imageUrl = imageUrl;

        await project.save();

        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Delete a project
router.delete('/projects/:id', async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        await project.remove();

        res.json({ message: 'Project removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
