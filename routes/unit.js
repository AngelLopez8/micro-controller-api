import express from 'express';

import { createUnit, getUnit, updateUnit, deleteUnit } from '../controllers/unit.js';

const router = express.Router();

// Create new Unit instance
router.post('/', createUnit);

// Retrive existing Unit with given Serial Number
router.get('/:sn', getUnit);

// Update existing Unit with updated data
router.patch('/:id', updateUnit);

// Delete an instance with given id
router.delete('/:id', deleteUnit);

export default router;