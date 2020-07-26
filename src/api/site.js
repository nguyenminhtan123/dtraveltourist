import { get, post, put, del } from "./utils";

export async function getAllSiteApi() {
  return get("/site-category");
}

export async function getSiteByIdApi(id) {
  return get(`/tourist-site/${id}`);
}

//

// export async function sentDeviceTokenByIdApi(data) {
//   return put(`/${data.userId}/${data.deviceToken}`);
// }