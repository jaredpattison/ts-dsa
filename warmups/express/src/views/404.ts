import { Request, Response } from 'express';

const handleNotFound = (req: Request, res: Response) : any => {
    res.status(404).send('Invalid Route. Page not Found.');
}

export { handleNotFound };