const Update = require('../models/Update');

// Create an update
exports.createUpdate = async (req, res) => {
  try {
    const update = new Update(req.body);
    const saved = await update.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all updates
exports.getAllUpdates = async (req, res) => {
  try {
    const updates = await Update.find().populate('updatedBy', 'name email');
    res.json(updates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get update by ID
exports.getUpdateById = async (req, res) => {
  try {
    const update = await Update.findById(req.params.id).populate('updatedBy');
    if (!update) return res.status(404).json({ message: 'Update not found' });
    res.json(update);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update update
exports.updateUpdate = async (req, res) => {
  try {
    const updated = await Update.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Update not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete update
exports.deleteUpdate = async (req, res) => {
  try {
    const deleted = await Update.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Update not found' });
    res.json({ message: 'Update deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
