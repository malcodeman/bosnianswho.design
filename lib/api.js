import constants from "./constants";

async function listRecords() {
  const res = await fetch(
    `https://api.airtable.com/v0/${constants.AIRTABLE_BASE}/Table%201`,
    {
      headers: { Authorization: `Bearer ${constants.AIRTABLE_API_KEY}` },
    }
  );
  const json = await res.json();

  return json.records;
}

export { listRecords };
