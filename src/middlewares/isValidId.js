import { isValidObjectId } from "mongoose";

import { HttpError } from 'http-errors';

export const isValidId = (req, res, next) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
       return next(HttpError(404, "Not found"));
    }

    next();
};