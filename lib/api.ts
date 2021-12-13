import { map } from "ramda";
import axios from "axios";

import constants from "./constants";

import { TwitterDesigner, NotionDesigner, NotionPosition } from "../types";

async function listDesigners(): Promise<NotionDesigner[]> {
  const res = await axios.post(
    `${constants.NOTION_API_URL}/databases/${constants.NOTION_DATABASES.DESIGNERS}/query`,
    {},
    {
      headers: {
        Authorization: `Bearer ${constants.NOTION_TOKEN}`,
        "Notion-Version": constants.NOTION_API_VERSION,
      },
    }
  );
  const data = map((item) => {
    return {
      id: item.id,
      username: item.properties.username.title[0].plain_text,
      position: map(
        (item) => item.title[0].plain_text,
        item.properties.positionText.rollup.array
      ),
    };
  }, res.data.results);
  return data;
}

async function listTwitterDesigners(
  usernames: string[]
): Promise<TwitterDesigner[]> {
  const res = await axios.get(
    `${constants.TWITTER_API_URL}/users/by?usernames=${usernames}&user.fields=created_at,location,url,description,verified,profile_image_url`,
    {
      headers: { Authorization: `Bearer ${constants.TWITTER_TOKEN}` },
    }
  );
  return res.data.data;
}

async function listPositions(): Promise<NotionPosition[]> {
  const res = await axios.post(
    `${constants.NOTION_API_URL}/databases/${constants.NOTION_DATABASES.POSITIONS}/query`,
    {
      sorts: [
        {
          property: "name",
          direction: "ascending",
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${constants.NOTION_TOKEN}`,
        "Notion-Version": constants.NOTION_API_VERSION,
      },
    }
  );
  const data = map((item) => {
    return {
      id: item.id,
      name: item.properties.name.title[0].plain_text,
      count: item.properties.count.rollup.number,
    };
  }, res.data.results);
  return data;
}

export { listDesigners, listTwitterDesigners, listPositions };
