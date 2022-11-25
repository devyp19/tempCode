import { apis } from "service";

const COMMON_URL = `https://awmgldofkkbalduukncj.supabase.co/rest/v1/`;

const API_URLS = {
  POST_IMAGESJPEG: `https://awmgldofkkbalduukncj.supabase.co/storage/v1/object/space-management/admin/images.jpeg`,
  DELETE_SPACEIDEQ24: `${COMMON_URL}space`,
  DELETE_SPACERESOURCESPACEIDEQ24: `${COMMON_URL}space_resource`,
  GET_SPACERESOURCESELECTRESOURCEIDSPACEIDEQ15: `${COMMON_URL}space_resource`,
  PATCH_SPACEIDEQ15: `${COMMON_URL}space`,
  GET_SPACESELECT: `${COMMON_URL}space`,
  POST_SPACERESOURCE: `${COMMON_URL}space_resource`,
  POST_SPACE: `${COMMON_URL}space`,
  GET_EMPLOYEESBYID: `${COMMON_URL}employe`,
  GET_STATESELECT: `${COMMON_URL}state`,
  GET_COUNTRYSELECT: `${COMMON_URL}country`,
  GET_CITYSELECT: `${COMMON_URL}city`,
  GET_JOBTITLEPOSITIONSELECT: `${COMMON_URL}job_title_position`,
  GET_DEPARTMENTJOBTITLESELECT: `${COMMON_URL}department_job_title`,
  GET_EMPLOYMENTSTATUSSELECT: `${COMMON_URL}employment_status`,
  GET_DEPARTMENTSELECT: `${COMMON_URL}department`,
  GET_EMPLOYEESELECT: `${COMMON_URL}employe`,
  POST_EMPLOYEE: `${COMMON_URL}employe`,
  UPDATE_EMPLOYEE: `${COMMON_URL}employee`,
  GET_CURRENCYSELECT: `${COMMON_URL}currency`,
  GET_SEARCHLIST: `${COMMON_URL}employe`,
  GET_RESOURCESELECT: `${COMMON_URL}resource`,
  GET_SPACEBYID: `${COMMON_URL}space`,
  GET_EMPLOYEECOUNT: `${COMMON_URL}employe`,
  PUT_USER: `https://awmgldofkkbalduukncj.supabase.co/auth/v1/user`,
  POST_INVITE: `https://awmgldofkkbalduukncj.supabase.co/auth/v1/invite`,
  POST_TOKENGRANTTYPEPASSWORD: `https://awmgldofkkbalduukncj.supabase.co/auth/v1/token`,
  GET_USERTYPESELECT: `${COMMON_URL}/user_type`,
  POST_RECOVER: `https://awmgldofkkbalduukncj.supabase.co/auth/v1/recover`,
  POST_EMPLOYE: `https://awmgldofkkbalduukncj.supabase.co/rest/v1/employe`,
  POST_CUSTOMFORMAT_J_S_O_NONLY_CURRENTTRUE: `https://cors-anywhere.herokuapp.com/https://api.bamboohr.com/api/gateway.php/abcbcd.bamboohr.com/v1/reports/custom`,
  GET_EMPLOYESELECTWORK_EMAILINYASHGMAILCOMVICIL40645RUBESHICOM: `https://awmgldofkkbalduukncj.supabase.co/rest/v1/employe`,
};
export const getEmployeselectworkEmailinyashgmailcomvicil40645rubeshicom = (
  payload
) =>
  apis.get(
    API_URLS.GET_EMPLOYESELECTWORK_EMAILINYASHGMAILCOMVICIL40645RUBESHICOM,
    {
      ...payload,
      params: {
        select: "*",
        workEmail: "in.(yash@gmail.com,vicil40645@rubeshi.com)",
        ...payload?.params,
      },
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
        ...payload?.headers,
      },
    }
  );

export const postEmploye = (payload) =>
  apis.post(API_URLS.POST_EMPLOYE, {
    ...payload,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates",
      ...payload?.headers,
    },
  });

export const postCustomformatJSONonlyCurrenttrue = (payload) =>
  apis.post(API_URLS.POST_CUSTOMFORMAT_J_S_O_NONLY_CURRENTTRUE, {
    ...payload,
    params: { format: "JSON", onlyCurrent: "true", ...payload?.params },
    headers: {
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const forgotPassword = (payload) =>
  apis.post(API_URLS.POST_RECOVER, {
    ...payload,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });

export const postImagesjpeg = (payload) =>
  apis.post(
    `https://awmgldofkkbalduukncj.supabase.co/storage/v1/object/space-management/admin/${payload?.fileName}`,
    {
      ...payload,
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
        "Content-Type": "image/jpeg",
        ...payload?.headers,
      },
      data: payload?.file,
    }
  );

export const getUsertypeselect = (payload) =>
  apis.get(API_URLS.GET_USERTYPESELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      ...payload?.headers,
    },
  });

export const postTokengranttypepassword = (payload) =>
  apis.post(API_URLS.POST_TOKENGRANTTYPEPASSWORD, {
    ...payload,
    params: { grant_type: "password", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });

export const postInvite = (payload) =>
  apis.post(API_URLS.POST_INVITE, {
    ...payload,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });

export const updateUser = (payload) =>
  apis.put(API_URLS.PUT_USER, {
    ...payload,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization: `Bearer ${payload?.token}`,
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });

export const deleteSpaceideq24 = (payload) =>
  apis.delete(API_URLS.DELETE_SPACEIDEQ24, {
    ...payload,
    params: { ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      ...payload?.headers,
    },
  });

export const deleteSpaceresourcespaceideq24 = (payload) =>
  apis.delete(API_URLS.DELETE_SPACERESOURCESPACEIDEQ24, {
    ...payload,
    params: { ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      ...payload?.headers,
    },
  });

export const getSpaceresourceselectresourceidspaceideq15 = (payload) =>
  apis.get(API_URLS.GET_SPACERESOURCESELECTRESOURCEIDSPACEIDEQ15, {
    ...payload,
    params: { ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      ...payload?.headers,
    },
  });

export const postUserProfile = (payload) =>
  apis.post(
    `https://awmgldofkkbalduukncj.supabase.co/storage/v1/object/employee-profile/user-profile/${payload?.fileName}`,
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
        "Content-Type": "image/jpeg",
        Accept: "*/*",
      },
      data: payload?.file,
    }
  );

export const deleteUserProfile = (payload) =>
  apis.delete(
    `https://awmgldofkkbalduukncj.supabase.co/storage/v1/object/${payload?.fileName}`,
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
        "Content-Type": "image/jpeg",
        Accept: "*/*",
      },
      data: payload?.file,
    }
  );

export const getSpaceselect = (payload) =>
  apis.get(API_URLS.GET_SPACESELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      ...payload?.headers,
    },
  });

export const postSpaceresource = (payload) =>
  apis.post(API_URLS.POST_SPACERESOURCE, {
    ...payload,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      "Content-Type": "application/json",
      ...payload?.headers,
    },
  });
export const postSpace = (payload) =>
  apis.post(API_URLS.POST_SPACE, {
    ...payload,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...payload?.headers,
    },
  });

export const getResourceselect = (payload) =>
  apis.get(API_URLS.GET_RESOURCESELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      ...payload?.headers,
    },
  });

export const getEmployeesByID = (payload) =>
  apis.get(API_URLS.GET_EMPLOYEESBYID, {
    ...payload,
    params: { select: "*", id: "eq.30", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const patchSpaceideq15 = (payload) =>
  apis.patch(API_URLS.PATCH_SPACEIDEQ15, {
    ...payload,
    params: { id: `eq.${payload?.data?.id}`, ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...payload?.headers,
    },
  });

export const getSpaceByID = (payload) =>
  apis.get(API_URLS.GET_SPACEBYID, {
    ...payload,
    params: { select: "*", id: "eq.1", ...payload?.params },
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const getCurrencyselect = (payload) =>
  apis.get(API_URLS.GET_CURRENCYSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
  });

export const getStateselect = (payload) =>
  apis.get(API_URLS.GET_STATESELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const getCountryselect = (payload) =>
  apis.get(API_URLS.GET_COUNTRYSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const getCityselect = (payload) =>
  apis.get(API_URLS.GET_CITYSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const getJobtitlepositionselect = (payload) =>
  apis.get(API_URLS.GET_JOBTITLEPOSITIONSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const getDepartmentjobtitleselect = (payload) =>
  apis.get(API_URLS.GET_DEPARTMENTJOBTITLESELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
      ...payload?.headers,
    },
  });

export const getEmploymentstatusselect = (payload) =>
  apis.get(API_URLS.GET_EMPLOYMENTSTATUSSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const getDepartmentselect = (payload) =>
  apis.get(API_URLS.GET_DEPARTMENTSELECT, {
    ...payload,
    params: { select: "*", ...payload?.params },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const getEmployeesCount = (payload) =>
  apis.get(
    `${API_URLS.GET_EMPLOYEECOUNT}?${
      payload?.filterURL ? payload?.filterURL : ""
    }`,
    {
      ...payload,
      params: {
        select: "count",
        ...payload?.params,
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
        ...payload?.headers,
      },
    }
  );

export const getEmployeeselect = (payload) =>
  apis.get(
    `${API_URLS.GET_EMPLOYEESELECT}?${
      payload?.filterURL ? payload?.filterURL : ""
    }`,
    {
      ...payload,
      // params: {
      // select:
      //   "*,department:department_id(label),job_title_postion:job_title_position_id(label),department_job_title:department_job_title_id(label),employment_status:employment_status_id(label)",
      // ...payload?.params,
      // },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
        ...payload?.headers,
      },
    }
  );

export const getSearchEmployeeList = (payload) =>
  apis.get(API_URLS.GET_SEARCHLIST, {
    ...payload,
    params: {
      // select:
      //   "*,department:department_id(label),job_title_postion:job_title_position_id(label),department_job_title:department_job_title_id(label),employment_status:employment_status_id(label)",
      ...payload?.params,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });
export const getStateAndCountry = (payload) =>
  apis.get(API_URLS.GET_CITYSELECT, {
    ...payload,
    params: {
      select: "*,state:state_id(label,country_id,country:country_id(label))",
      ...payload?.params,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      ...payload?.headers,
    },
  });

export const postEmployee = (payload) =>
  apis.post(API_URLS.POST_EMPLOYEE, {
    ...payload,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...payload?.headers,
    },
  });

export const updateEmployee = (payload) =>
  apis.patch(API_URLS.UPDATE_EMPLOYEE, {
    ...payload,
    params: { id: `eq.${payload?.data?.id}` },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...payload?.headers,
    },
  });
