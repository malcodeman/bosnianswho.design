const TWITTER_TOKEN = process.env.TWITTER_TOKEN;
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DESIGNER_FORM_LINK = "https://airtable.com/shrRmFE90GYwkLv9j";
const EMAIL = "bosnianswhodesign@gmail.com";
const NOTION_DATABASES = {
  DESIGNERS: "98e4d1f122424368bb7bd98551ca5370",
  POSITIONS: "b0003134188d4274aa4c3617ffdc901c",
};
const NOTION_API_VERSION = "2021-08-16";
const NOTION_API_URL = "https://api.notion.com/v1";
const TWITTER_API_URL = "https://api.twitter.com/2";

export default {
  DESIGNER_FORM_LINK,
  EMAIL,
  TWITTER_TOKEN,
  NOTION_TOKEN,
  NOTION_DATABASES,
  NOTION_API_VERSION,
  NOTION_API_URL,
  TWITTER_API_URL,
};
