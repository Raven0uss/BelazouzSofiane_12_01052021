import axios from "axios";

// Backend_url in local, have to switch the port if you use another one
const backend_url = "http://127.0.0.1:4000";

// To test with different test users, change the user id here, possibles values for testing : [12, 18]
const userId = 12;

const getUser = async (id) => {
  const response = await axios.get(`${backend_url}/user/${id}`).catch((err) => {
    console.error(err);
    return {
      data: null,
      error: true,
    };
  });
  return response;
};

const getUserActivity = async (id) => {
  const response = await axios
    .get(`${backend_url}/user/${id}/activity`)
    .catch((err) => {
      console.error(err);
      return {
        data: null,
        error: true,
      };
    });
  return response;
};

const getUserAverageSessions = async (id) => {
  const response = await axios
    .get(`${backend_url}/user/${id}/average-sessions`)
    .catch((err) => {
      console.error(err);
      return {
        data: null,
        error: true,
      };
    });
  return response;
};

const getUserPerformance = async (id) => {
  const response = await axios
    .get(`${backend_url}/user/${id}/performance`)
    .catch((err) => {
      console.error(err);
      return {
        data: null,
        error: true,
      };
    });
  return response;
};

export {
  userId,
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
