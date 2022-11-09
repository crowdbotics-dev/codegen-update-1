import axios from "axios"
const codegenupdateAPI = axios.create({
  baseURL: "https://codegen-update-1-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function rest_auth_login_create(payload) {
  return codegenupdateAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return codegenupdateAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_logout_create(payload) {
  return codegenupdateAPI.post(`/rest-auth/logout/`)
}
function rest_auth_logout_list(payload) {
  return codegenupdateAPI.get(`/rest-auth/logout/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return codegenupdateAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function api_v1_login_create(payload) {
  return codegenupdateAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return codegenupdateAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return codegenupdateAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_read(payload) {
  return codegenupdateAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return codegenupdateAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return codegenupdateAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function api_v1_house_create(payload) {
  return codegenupdateAPI.post(`/api/v1/house/`, payload.data)
}
function api_v1_house_list(payload) {
  return codegenupdateAPI.get(`/api/v1/house/`)
}
function api_v1_house_partial_update(payload) {
  return codegenupdateAPI.patch(`/api/v1/house/${payload.id}/`, payload.data)
}
function api_v1_house_read(payload) {
  return codegenupdateAPI.get(`/api/v1/house/${payload.id}/`)
}
function api_v1_house_delete(payload) {
  return codegenupdateAPI.delete(`/api/v1/house/${payload.id}/`)
}
function api_v1_house_update(payload) {
  return codegenupdateAPI.put(`/api/v1/house/${payload.id}/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return codegenupdateAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return codegenupdateAPI.post(`/rest-auth/registration/`, payload.data)
}
export const apiService = {
  rest_auth_login_create,
  rest_auth_password_change_create,
  rest_auth_logout_create,
  rest_auth_logout_list,
  rest_auth_password_reset_confirm_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_partial_update,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_registration_verify_email_create,
  api_v1_house_create,
  api_v1_house_list,
  api_v1_house_partial_update,
  api_v1_house_read,
  api_v1_house_delete,
  api_v1_house_update,
  rest_auth_password_reset_create,
  rest_auth_registration_create
}
