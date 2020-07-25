import { get, post, put, del } from "./utils";

export async function updateTourApi(data) {
  return post("/tour", data);
}
