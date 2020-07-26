import { get, post, put, del } from "./utils";

export async function updateTourApi(data) {
  return post("/tour", data);
}
export async function addSiteToTourApi(data) {
  return post("/detail", data);
}
export async function getTourApi(data) {
  return get("/tour-by-tourist-with-status", data);
}
