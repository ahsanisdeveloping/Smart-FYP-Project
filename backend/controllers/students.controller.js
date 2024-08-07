import mongoose from "mongoose";
import getStudentModel from "../models/students.model.js";
import User from "../models/user.model.js";
export const getStudents = async (req, res, next) => {
  const StudentModel = getStudentModel();
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const StudentModel = getStudentModel();
    const student = await StudentModel.findOne({ student_id: id });
    if (!student) {
      return res.status(404).json({ error: "hehe" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.status });
  }
};

export const sendMessage = async (req, res) => {

  const { message, members, sender, type } = req.body;
  const Student = getStudentModel();
  const memberIDs = members.map((member) => member.split(" | ")[1]);
  try {
    for (const member of memberIDs) {
      const student = await Student.findOne({
        student_id: member,
      });
      if (!student) {
        console.log(`Student with ID ${member} not found`);
        continue;
      }
      student.notifications.push({
        text:message,
        date:new Date(),
        type:type,
        sender:sender
      })
      const user = await User.findOne({id:member})
      user.read.messagesRead = false;
      await user.save();
      await student.save();
      
    }
    res.status(200).json("operation successful",);
  } catch (error) {
    console.error("Error finding student:", error);
    res.status(500).json("There was an error while sending the message");
  }
};

export const getStudentMessages = async (req,res) => {
  const {id} = req.params
  const Student = getStudentModel();
  const student = await Student.findOne({student_id:id});
  res.status(200).json(student.notifications);
}