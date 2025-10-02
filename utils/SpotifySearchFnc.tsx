const CLIENT_ID = "135052134abd438e9d3728a08082196e";
const CLIENT_SECRET = "a915857f333c4cd38cbb53df1381a250";

export type trackType = {
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
}

async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
    },
    body: "grant_type=client_credentials"
  });

  const data = await response.json();
  return data.access_token;
}

export async function searchTracks(keyword: string): Promise<trackType[]> {
  const token = await getAccessToken();

  const query = encodeURIComponent(keyword);
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`;

  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await response.json();
  data.tracks.items.forEach((track: trackType, index: number) => {
    console.log(`${index + 1}. ${track.name} - ${track.artists[0].name}`);
    console.log(`   URL: ${track.external_urls.spotify}`);
  });
  return data.tracks.items;
}


