import { get, post, put, del } from "./utils";

export async function adminLoginApi(data) {
  return post("/login", data);
}

export async function registerApi(data) {
  return post("/register", data);
}

export async function getUserApi() {
  return get("/user");
}

export async function getUserDetailApi(id) {
  return get(`/tourist/${id}`);
}

// export async function sentDeviceTokenByIdApi(data) {
//   return put(`/${data.userId}/${data.deviceToken}`);
// }
