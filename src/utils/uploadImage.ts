import { createClient } from "@supabase/supabase-js";
import { FileOptions } from "@supabase/storage-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_API_KEY as string,
  {
    auth: { persistSession: false },
  }
);

// Upload file using standard upload
export default async function uploadImage(
  bucket: string,
  directory: string,
  image: File
) {
  const fileName = image.name.split(".")[0] + "_" + Date.now();
  const fileType = image.name.split(".")[1];
  const filePath = `${directory}/${fileName}.${
    fileType === "jpeg" ? "jpg" : fileType
  }`;

  const fileOptions: FileOptions = {
    contentType: image.type || "image/jpeg",
    cacheControl: "3600",
    upsert: true,
  };

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, image, fileOptions);

  if (error) {
    return {
      error,
      imagePath: null,
    };
  }

  return {
    error: null,
    imagePath:
      process.env.SUPABASE_URL +
      "/storage/v1/object/public/" +
      bucket +
      "/" +
      data.path,
  };
}
