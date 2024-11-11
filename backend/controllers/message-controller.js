import Message from "../models/message-model.js"


export const getMessage = async (req, res) => {
  try {
    const message = await Message.find({});
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get messages" });
  }
}
export const postMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await Message.create({ name, email, message });
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to add messages" });
  }
}
export const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await Message.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete messages" });
  }
}