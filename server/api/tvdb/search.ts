import { tvdb } from "~/server/utils/tvdb";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  try {
    const result = await tvdb.search(query.term);
    return result.data;
  } catch (error) {
    console.error("Error while searching TVDB", error);
    return { error: "Failed to search TVDB" };
  }
});
