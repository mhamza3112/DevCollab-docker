import Certificate from "../models/Certificate.js";

export const createCertificate = async (req, res) => {
  try {
    const { studentName, courseName, issueDate } = req.body;

    const certificate = await Certificate.create({
      studentName,
      courseName,
      issueDate,
    });

    res.status(201).json({
      success: true,
      message: "Certificate Generated Successfully",
      certificate,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find();

    res.status(200).json({
      success: true,
      certificates,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
