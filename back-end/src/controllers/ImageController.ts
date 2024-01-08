import { Request, RequestHandler, Response } from "express";
import { Image } from "../models/Image";

export default class ImageController { 
  retrieveAllImages: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let images = await Image.find();

      return res.status(200).json({ responseData: images });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}
