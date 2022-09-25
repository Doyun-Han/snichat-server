import * as dataRepository from '../data/data.js';

export async function getAlldata (req, res) {
    const data = await dataRepository.getAlldata();
    res.status(200).json(data);
}

export async function postMsg(req, res) {
    const {id, sender, sendTime, text, listName} = req.body;
    const lists = await dataRepository.createMsg(id, sender, sendTime, text, listName);
    
    res.status(201).json(lists);
}

export async function removeMsg(req, res) {
    const id = req.query.id;
    const targetListName = req.query.listname;
    await dataRepository.removeMsg(id,targetListName);
    res.status(204);
}