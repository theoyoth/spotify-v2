import { atom } from "recoil";

export const playlistIdState = atom({
  key: "playlistIdState", // unique ID (with respect to other atoms/selectors)
  default: "1n09Tllvy7yuZO1ZiPoZRC", // default value (aka initial value)
});
