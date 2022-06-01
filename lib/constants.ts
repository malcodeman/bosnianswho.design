import { nanoid } from "nanoid";

const TWITTER_TOKEN = process.env.TWITTER_TOKEN;
const DESIGNER_FORM_LINK = "https://airtable.com/shrRmFE90GYwkLv9j";
const EMAIL = "bosnianswhodesign@gmail.com";
const TWITTER_API_URL = "https://api.twitter.com/2";
const TWITTER_URL = "https://twitter.com";
const TWITTER_ID = "1286358072697524225";
const MAX_RESULTS = 1000;
const FATHOM_ANALYTICS = {
  siteId: "TIILVVCO",
  url: "https://lets-dance-adorable.bosnianswho.design/script.js",
  includedDomains: ["bosnianswho.design", "www.bosnianswho.design"],
};
const POSITIONS = [
  {
    id: nanoid(),
    value: ["ceo"],
    label: "CEO",
    translationKey: "ceo",
  },
  {
    id: nanoid(),
    value: ["engineer", "programmer", "developer"],
    label: "Software Engineer",
    translationKey: "software-engineer",
  },
  {
    id: nanoid(),
    value: ["product"],
    label: "Product",
    translationKey: "product",
  },
  {
    id: nanoid(),
    value: ["cto"],
    label: "CTO",
    translationKey: "cto",
  },
  {
    id: nanoid(),
    value: ["qa"],
    label: "QA Engineer",
    translationKey: "qa-engineer",
  },
  {
    id: nanoid(),
    value: ["operations", "hr"],
    label: "Operations",
    translationKey: "operations",
  },
  {
    id: nanoid(),
    value: ["founder", "co-founder"],
    label: "Founder",
    translationKey: "founder",
  },
  {
    id: nanoid(),
    value: ["speaker"],
    label: "Speaker",
    translationKey: "speaker",
  },
  {
    id: nanoid(),
    value: ["photographer"],
    label: "Graphic Designer",
    translationKey: "graphic-designer",
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
  FATHOM_ANALYTICS,
  POSITIONS,
};

export default EXPORTS;
