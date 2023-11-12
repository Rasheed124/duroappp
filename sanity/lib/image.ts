import imageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";
import { client } from "./client";

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

export default urlFor;