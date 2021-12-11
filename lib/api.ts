import { map } from "ramda";

import constants from "./constants";

import { TwitterDesigner, NotionDesigner, NotionPosition } from "../types";

async function listDesigners(): Promise<NotionDesigner[]> {
  const res = await fetch(
    `${constants.NOTION_API_URL}/databases/${constants.NOTION_DATABASES.DESIGNERS}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${constants.NOTION_TOKEN}`,
        "Notion-Version": constants.NOTION_API_VERSION,
      },
    }
  );
  const json = await res.json();
  const data = map((item) => {
    return {
      id: item.id,
      username: item.properties.username.title[0].plain_text,
      position: map(
        (item) => item.title[0].plain_text,
        item.properties.positionText.rollup.array
      ),
    };
  }, json.results);
  return data;
}

async function listTwitterDesigners(
  usernames: string[]
): Promise<TwitterDesigner[]> {
  const res = await fetch(
    `${constants.TWITTER_API_URL}/users/by?usernames=${usernames}&user.fields=created_at,location,url,description,verified,profile_image_url`,
    {
      headers: { Authorization: `Bearer ${constants.TWITTER_TOKEN}` },
    }
  );
  const json = await res.json();
  return json.data;
}

async function listPositions(): Promise<NotionPosition[]> {
  const res = await fetch(
    `${constants.NOTION_API_URL}/databases/${constants.NOTION_DATABASES.POSITIONS}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${constants.NOTION_TOKEN}`,
        "Notion-Version": constants.NOTION_API_VERSION,
      },
    }
  );
  const json = await res.json();
  const data = map((item) => {
    return {
      id: item.id,
      name: item.properties.name.title[0].plain_text,
      count: item.properties.count.rollup.number,
    };
  }, json.results);
  return data;
}

export { listDesigners, listTwitterDesigners, listPositions };
