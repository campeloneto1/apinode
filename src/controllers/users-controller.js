const usersModel = require("../models/users-model");

const index = async (_req, res) => {
    const data = await usersModel.index();
    res.status(200).send(data);
}

const find = async (req, res) => {
    const data = await usersModel.find(req.params.id);
    
    res.status(200).send(data);
}

const create = async (req, res) => {
    const data = await usersModel.insert(req.body);    
     res.status(200).send(data);
}

const update = async (req, res) => {
    const data = await usersModel.update(req.params.id, req.body);
     res.status(200).send(data);
}

const remove = async (req, res) => {
    const data = await usersModel.remove(req.params.id);
     res.status(200).send(data);
}

module.exports = {
    index,
    find,
    create,
    update,
    remove
}