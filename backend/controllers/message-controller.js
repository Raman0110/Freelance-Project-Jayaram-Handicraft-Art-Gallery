import Message from "../models/message-model.js";

// Get all messages (with optional pagination)
export const getMessage = async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default page 1, limit 10 messages per page

  try {
    const messages = await Message.findAll({
      limit: parseInt(limit),       // Number of messages to fetch
      offset: (page - 1) * limit,   // Calculate offset for pagination
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: "Unable to get messages" });
  }
};

// Create a new message
export const postMessage = async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation to check if required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields (name, email, message) are required" });
  }

  try {
    await Message.create({ name, email, message });
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error('Error adding message:', error);
    res.status(500).json({ message: "Unable to add message" });
  }
};

// Delete a specific message
export const deleteMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMessage = await Message.findByPk(id);
    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }

    // Destroy the found message
    await deletedMessage.destroy();
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ message: "Unable to delete message" });
  }
};
