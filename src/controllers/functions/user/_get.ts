import { Request, Response } from "express";

import sender from "../../utils/sender";
import services from "../../../services";

export default async (req: Request, res: Response) => {
  try {
    const user = await services.user.get({ id: req.query.id as string });
    sender(req, res, { value: user });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
