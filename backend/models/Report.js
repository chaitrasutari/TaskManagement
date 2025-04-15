const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  reportId: { type: String, required: true, unique: true },
  generatedOn: { type: Date, default: Date.now },
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tasksIncluded: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Report', ReportSchema);
