import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = new Date().getTime() + "";
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.retuits = 0;
    newTuit.replies = 0;
    tuits.push(newTuit);
    res.json(newTuit);
};

const findTuits = (req, res) => {
    res.json(tuits);
};

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id.toString() === tuitdIdToUpdate
    );
    tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
    res.sendStatus(200);
};

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter((t) => t._id.toString() !== tuitIdToDelete);
    res.sendStatus(200);
};

const findTuitById = (req, res) => {
    const tuitId = req.params.tid;
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
