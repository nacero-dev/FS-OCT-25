import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

export default mongoose.models.Item || mongoose.model("Item", itemSchema);
