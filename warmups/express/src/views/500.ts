import { Request, Response } from 'express';

const handleServerError = (err: Error, req: Request, res: Response) : any => {
    console.error(err);
    res.status(500).send('500 Internal Server Error.');
}

export { handleServerError };