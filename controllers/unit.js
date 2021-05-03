import mongoose from 'mongoose';

import Unit from '../models/unit.model.js';

// Create
export const createUnit = async (req, res) => {
    const { serialNum, type } = req.body;

    const newUnit = new Unit({ serialNum , type });

    try {
        await newUnit.save();

        res.status(201).json(newUnit);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Read
export const getUnit = async (req, res) => {
    const { id } = req.params; 
    try {
        const unit = await Unit.find({ serialNum: id });

        res.status(200).json(unit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Update
export const updateUnit = async (req, res) => {
    const { id } = req.params;
    const { serialNum, type, initialized, shipped, stations } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No unit with id: ${id}`);

    const updatedUnit = { serialNum, type, initialized, shipped, stations, _id: id };

    await Unit.findByIdAndUpdate(id, updatedUnit, { new: true });

    res.json(updatedUnit);
}

// Delete
export const deleteUnit = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No unit with id: ${id}`);

    await Unit.findByIdAndRemove(id);

    res.json({ message: "Unit deleted successfully!"});
}