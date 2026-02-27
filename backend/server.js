const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Task = require("./models/Task"); // your task model

const app = express();
app.use(cors());
app.use(express.json()); // VERY IMPORTANT

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/taskmanager")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// CREATE TASK
app.post("/api/tasks", async (req, res) => {
  try {
    const { title, priority, date } = req.body;

    if (!title) return res.status(400).json({ message: "Title is required" });

    const task = new Task({ title, priority, date });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving task" });
  }
});

// GET ALL TASKS
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // newest first
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

// DELETE TASK
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
});

// UPDATE TASK
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));