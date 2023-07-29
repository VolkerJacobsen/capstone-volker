import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (!request.method === "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const form = formidable({});
    const [fields, files] = await form.parse(request);

    const imageFile = files.imageSource[0];

    const uploadResult = await cloudinary.uploader.upload(imageFile.filepath);

    response.status(201).json({
      id: uploadResult.public_id,
      src: uploadResult.secure_url,
      width: uploadResult.width,
      height: uploadResult.height,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went wrong" });
  }
}
