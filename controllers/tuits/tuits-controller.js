import * as tuitsDao from "./tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.retuits = 0;
    newTuit.replies = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
};

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
};

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
};

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
};

const findTuitById = async (req, res) => {
    const tuitId = req.params.tid;
    const tuits = await tuitsDao.findTuits();
    const tuit = tuits.find((t) => t._id.toString() === tuitId);
    res.json(tuit);
};

export default (app) => {
    app.post("/api/tuits", createTuit);
    app.get("/api/tuits", findTuits);
    app.get("/api/tuits/:tid", findTuitById);
    app.put("/api/tuits/:tid", updateTuit);
    app.delete("/api/tuits/:tid", deleteTuit);
};
