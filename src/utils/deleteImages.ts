import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
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
