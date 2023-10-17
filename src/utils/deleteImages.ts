import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_STORAGE_URL as string,
  process.env.SUPABASE_API_KEY as string,
  {
    auth: { persistSession: false },
  }
);

export default async function deleteImages(
  fileNames: string[],
  directory: string,
  bucket: string
) {
  const filePaths = fileNames.map((fileName) => {
    const fileType = fileName.split(".")[1];
    return `${directory}/${fileName}.${fileType === "jpeg" ? "jpg" : fileType}`;
  });

  return supabase.storage.from(bucket).remove(filePaths);
}
