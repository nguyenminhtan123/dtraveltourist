import { get, post, put, del } from "./utils";

export async function adminLoginApi(data) {
  return post("/login", data);
}

export async function registerApi(data) {
  return post("/register", data);
}
//

// export async function sentDeviceTokenByIdApi(data) {
//   return put(`/${data.userId}/${data.deviceToken}`);
// }
