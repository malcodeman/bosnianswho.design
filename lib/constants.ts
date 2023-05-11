import { nanoid } from "nanoid";
import { equals } from "ramda";

const IS_PROD = equals(process.env.NEXT_PUBLIC_VERCEL_ENV, "production");
const TWITTER_TOKEN = process.env.TWITTER_TOKEN;
const DESIGNER_FORM_LINK = "https://airtable.com/shrRmFE90GYwkLv9j";
const EMAIL = "bosnianswhodesign@gmail.com";
const TWITTER_API_URL = "https://api.twitter.com/2";
const TWITTER_URL = "https://twitter.com";
const TWITTER_ID = "1286358072697524225";
const MAX_RESULTS = 1000;
const FATHOM_ANALYTICS = {
  siteId: "TIILVVCO",
  includedDomains: ["bosnianswho.design", "www.bosnianswho.design"],
};
const POSITIONS = [
  {
    id: nanoid(),
    value: ["ceo"],
    label: "CEO",
    translationKey: "ceo",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["engineer", "programmer", "developer"],
    label: "Software Engineer",
    translationKey: "software-engineer",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["product"],
    label: "Product",
    translationKey: "product",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["cto"],
    label: "CTO",
    translationKey: "cto",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["qa"],
    label: "QA Engineer",
    translationKey: "qa-engineer",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["operations", "hr"],
    label: "Operations",
    translationKey: "operations",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["founder", "co-founder"],
    label: "Founder",
    translationKey: "founder",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["speaker"],
    label: "Speaker",
    translationKey: "speaker",
    count: 0,
  },
  {
    id: nanoid(),
    value: ["photographer"],
    label: "Graphic Designer",
    translationKey: "graphic-designer",
    count: 0,
  },
];

const EXPORTS = {
  IS_PROD,
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
