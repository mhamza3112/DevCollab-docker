import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    issueDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;
