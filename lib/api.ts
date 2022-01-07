import axios from "axios";

import constants from "./constants";

import { TwitterDesigner } from "../types";

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

async function listTwitterFollowings(): Promise<TwitterDesigner[]> {
  const res = await axios.get(
    `${constants.TWITTER_API_URL}/users/${constants.TWITTER_ID}/following?user.fields=created_at,location,url,description,verified,profile_image_url&max_results=${constants.MAX_RESULTS}`,
    {
      headers: { Authorization: `Bearer ${constants.TWITTER_TOKEN}` },
    }
  );
  return res.data.data;
}

export { listTwitterDesigners, listTwitterFollowings };
