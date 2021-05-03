import express from 'express';

import { createUnit, getUnit, updateUnit, deleteUnit } from '../controllers/unit.js';

const router = express.Router();

// Create
router.post('/', createUnit);

// Read
router.get('/:id', getUnit);

// Update
router.patch('/:id', updateUnit);

// Delete
router.patch('/:id', deleteUnit);

export default router;