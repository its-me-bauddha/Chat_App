const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  content: { type: String },
  sender: { type: String },
  roomid: { type: mongoose.Schema.Types.ObjectId },
});

const Chats = mongoose.model("Chats", chatSchema);
module.exports = Chats;
