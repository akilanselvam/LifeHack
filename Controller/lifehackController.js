const lifeHacks = require("../Model/lifeHackModel");

exports.getalllifehack = async (req, res) => {
  try {
    const newlifehack = await lifeHacks.find();
    res.status(200).json({
      status: "Success",
      result: newlifehack.length,
      data: { newlifehack }
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.createlifehack = async (req, res) => {
  try {
    const newlifehack = await lifeHacks.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        lifehacks: newlifehack
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getsinglelifehacks = async (req, res) => {
  try {
    const newlifehack = await lifeHacks.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: { newlifehack }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.updatelifehack = async (req, res) => {
  try {
    const newlifehack = await lifeHacks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        newlifehack
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.deletelifehack = async (req, res) => {
  try {
    await lifeHacks.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};
