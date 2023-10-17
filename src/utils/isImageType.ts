import { Image } from "@/types";

export default function isImageType(img: File | Image): img is Image {
  return (img as Image).src !== undefined;
}
