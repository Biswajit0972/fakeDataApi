import express from "express";
import { verifyAuth } from "../middleware/verifyAuth.js";
import {
    createNote,
    deleteNote,
    getNotes,
    seeAllNotesByUserId,
    updateNote
} from "../controllers/Notes.controller.js";

const noteRouter = express.Router();

noteRouter.route("/v1/demonote/create").post(verifyAuth, createNote);
noteRouter.route("/v1/deletepost").post(verifyAuth, deleteNote);
noteRouter.route("/v1/updatenote").put(verifyAuth, updateNote);
noteRouter.route("/v1/seeusernotes").get(verifyAuth, seeAllNotesByUserId);
noteRouter.route("/v1/getallnotes").get(getNotes);


export {noteRouter}