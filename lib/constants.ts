import { nanoid } from "nanoid";

const TWITTER_TOKEN = process.env.TWITTER_TOKEN;
const DESIGNER_FORM_LINK = "https://airtable.com/shrRmFE90GYwkLv9j";
const EMAIL = "bosnianswhodesign@gmail.com";
const TWITTER_API_URL = "https://api.twitter.com/2";
const TWITTER_URL = "https://twitter.com";
const TWITTER_ID = "1286358072697524225";
const MAX_RESULTS = 1000;
const POSITIONS = [
  {
    id: nanoid(),
    value: ["ceo"],
    label: "CEO",
  },
  {
    id: nanoid(),
    value: ["engineer", "programmer", "developer"],
    label: "Software Engineer",
  },
  {
    id: nanoid(),
    value: ["product"],
    label: "Product",
  },
  {
    id: nanoid(),
    value: ["cto"],
    label: "CTO",
  },
  {
    id: nanoid(),
    value: ["qa"],
    label: "QA Engineer",
  },
  {
    id: nanoid(),
    value: ["operations", "hr"],
    label: "Operations",
  },
  {
    id: nanoid(),
    value: ["founder", "co-founder"],
    label: "Founder",
  },
  {
    id: nanoid(),
    value: ["speaker"],
    label: "Speaker",
  },
  {
    id: nanoid(),
    value: ["photographer"],
    label: "Graphic Designer",
  },
];

const EXPORTS = {
  DESIGNER_FORM_LINK,
  EMAIL,
  TWITTER_TOKEN,
  TWITTER_API_URL,
  TWITTER_URL,
  TWITTER_ID,
  MAX_RESULTS,
  POSITIONS,
};

export default EXPORTS;
