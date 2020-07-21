import constants from "./constants";

async function listDesigners() {
  const res = await fetch(
    `https://api.airtable.com/v0/${constants.AIRTABLE_BASE}/Designers`,
    {
      headers: { Authorization: `Bearer ${constants.AIRTABLE_API_KEY}` },
    }
  );
  const json = await res.json();

  return json.records;
}

async function listLocations() {
  const res = await fetch(
    `https://api.airtable.com/v0/${constants.AIRTABLE_BASE}/Locations`,
    {
      headers: { Authorization: `Bearer ${constants.AIRTABLE_API_KEY}` },
    }
  );
  const json = await res.json();

  return json.records;
}

export { listDesigners, listLocations };