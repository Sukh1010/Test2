import User from "../model/userModel.js";

async function getUser(req, res) {
  try {
    let data = await User.find();
    res.status(200).send(data);
    console.log("data", data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function createUser(req, res) {
  try {
    console.log(req.body.image);
    //req.body.image = "http://localhost:8080/" + req.file.filename;
    req.body.image = "http://localhost:8080/" + req.files;
    let data = await User.create(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}
async function updateUser(req, res) {
  try {
    let { _id } = req.params;
    let data = await User.findByIdAndUpdate(_id, req.body);
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    let { _id } = req.params;
    let data = await User.findByIdAndRemove(_id, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

export { getUser, createUser, updateUser, deleteUser };
