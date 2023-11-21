import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
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
    const type = fileName.split(".")[1];
    const name = fileName.split(".")[0];
    return `${directory}/${name}.${type === "jpeg" ? "jpg" : type}`;
  });

  return supabase.storage.from(bucket).remove(filePaths);
}
