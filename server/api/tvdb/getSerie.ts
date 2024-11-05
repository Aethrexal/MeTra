import { tvdb } from "~/server/utils/tvdb";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  try {
    const result = await tvdb.getSerie(query.id);
    return result.data;
  } catch (error) {
    console.error("Error while fetching Serie", error);
    return { error: "Failed to fetch Serie" };
  }
});
