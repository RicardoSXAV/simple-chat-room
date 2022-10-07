import mongoose from "mongoose";

// Get existing model to avoid overwrite error
export function getMongooseModel<T>(
  modelName: string,
  modelSchema: mongoose.Schema
): mongoose.Model<T> {
  return (
    mongoose.models[modelName] || mongoose.model<T>(modelName, modelSchema)
  );
}
