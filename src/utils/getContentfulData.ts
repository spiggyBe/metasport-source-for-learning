import * as contentful from "contentful";

export default async function getContentfulData(contentType?: string) {
  const client = contentful.createClient({
    space: "m4lnap460f61",
    environment: "master",
    accessToken: "hGwoTOArcLjX-Ecs04QsNpm6G5gQ011rUZb_NXn-v5w",
  });
  const data = await client.getEntries({
    content_type: contentType,
  });

  return data;
}
