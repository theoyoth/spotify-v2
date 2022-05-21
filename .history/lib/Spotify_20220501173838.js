import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  // "user-library-modify",
  "user-library-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-playing",
  "user-follow-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParamsString = new URLSearchParams(params);

const LOGIN_URL = ``;
