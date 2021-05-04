import mongoose from 'mongoose';

import Unit from '../models/unit.model.js';

// Create a new Unit instance
export const createUnit = async (req, res) => {
    const { serialNum, type } = req.body;

    // new unit instance
    const newUnit = new Unit({ serialNum , type });

    // save new unit in database and send new unit instance
    try {
        await newUnit.save();

        res.status(201).json(newUnit);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Retrive existing Unit with given Serial Number
export const getUnit = async (req, res) => {
    const { sn } = req.params; 
    
    // Attempt to find Unit with given Serial Number and send unit in JSON format
    try {
        const unit = await Unit.find({ serialNum: sn });

        res.status(200).json(unit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Update existing Unit with updated data
export const updateUnit = async (req, res) => {
    const { id } = req.params;
    const { serialNum, type, initialized, shipped, stations } = req.body;

    // chech whether ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No unit with id: ${id}`);

    const updatedUnit = { serialNum, type, initialized, shipped, stations, _id: id };

    // Update Unit with new data
    await Unit.findByIdAndUpdate(id, updatedUnit, { new: true });

    // send updated Unit in JSON format
    res.json(updatedUnit);
}

// Delete an instance with given ID
export const deleteUnit = async (req, res) => {
    const { id } = req.params;

    // check whether ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No unit with id: ${id}`);

    // find Unit with given ID and remove from Database
    await Unit.findByIdAndRemove(id);

    res.json({ message: "Unit deleted successfully!"});
}
