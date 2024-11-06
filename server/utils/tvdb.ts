const config = useRuntimeConfig();
const url = config.public.tvdbUrl;
const apiKey = config.tvdbApiKey;
let token: string | null = null;

const authenticate = async () => {
  const response: any = await $fetch(`${url}/login`, {
    method: "POST",
    body: {
      apikey: apiKey,
    },
  });

  if (response.status === 401) {
    throw new Error("Invalid API key");
  }

  token = response.data.token;
};

export const tvdb = {
  search: async (query: string) => {
    if (!token) await authenticate();

    return await $fetch(`${url}/search`, {
      method: "GET",
      params: { query },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getSerie: async (id: string) => {
    if (!token) await authenticate();

    //return await $fetch(`${url}/series/${id}/extended`, {
    //  method: "GET",
    //  headers: {
    //    Authorization: `Bearer ${token}`,
    //  },
    //});

    const res = await $fetch(`${url}/series/${id}/extended`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let seasons = res.data.seasons || [];

    seasons = seasons.filter(
      (season) => season.type.type.toLowerCase() === "dvd",
    );

    console.log(seasons);

    res.data.seasons = seasons;
    return res;
  },

  getMovie: async (id: string) => {
    if (!token) await authenticate();

    return await $fetch(`${url}/movies/${id}/extended`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
