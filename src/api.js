import axios from "axios";

// Backend_url in local, have to switch the port if you use another one
const backend_url = "http://127.0.0.1:4000";

// To test with different test users, change the user id here, possibles values for testing : [12, 18]
const userId = 12;

/**
 * getUser
 * @date 2021-06-11
 * @param {string} id - ID of the user
 * @returns {Object} response - HTTP Response
 * @returns {boolean} response.error - True if an error is catched
 * @returns {number} response.status - Standard HTTP Status code (200 if success)
 * @returns {Object} response.data - data from database
 * @returns {number} response.data.data.id - ID of the user
 * @returns {number} response.data.data.todayScore - Score of progression (between 0 and 1)
 * @returns {Object} response.data.data.userInfos - User informations
 * @returns {string} response.data.data.userInfos.firstName - User firstname
 * @returns {string} response.data.data.userInfos.firstName - User firstname
 * @returns {number} response.data.data.userInfos.age - User age
 * @returns {Object} response.data.data.keyData - User data alimentation keys
 * @returns {number} response.data.data.keyData.calorieCount - User calories
 * @returns {number} response.data.data.keyData.proteinCount - User proteins
 * @returns {number} response.data.data.keyData.carbohydrateCount - User carbohydrates
 * @returns {number} response.data.data.keyData.lipidCount - User lipids
 */
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

/**
 * getUserActivity
 * @date 2021-06-11
 * @param {string} id - ID of the user
 * @returns {Object} response - HTTP Response
 * @returns {boolean} response.error - True if an error is catched
 * @returns {number} response.status - Standard HTTP Status code (200 if success)
 * @returns {Object} response.data - data from database
 * @returns {number} response.data.data.userId - ID of the user
 * @returns {Array} response.data.data.sessions - Array of object for seven days of effort
 * @returns {string} response.data.data.sessions[].day - Date which current index data is associated to
 * @returns {number} response.data.data.sessions[].kilogram - Kilogram which current index data is associated to
 * @returns {number} response.data.data.sessions[].calories - Calories which current index data is associated to
 */
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

/**
 * getUserAverageSessions
 * @date 2021-06-11
 * @param {string} id - ID of the user
 * @returns {Object} response - HTTP Response
 * @returns {boolean} response.error - True if an error is catched
 * @returns {number} response.status - Standard HTTP Status code (200 if success)
 * @returns {Object} response.data - data from database
 * @returns {number} response.data.data.userId - ID of the user
 * @returns {Array} response.data.data.sessions - Array of object for seven days of effort
 * @returns {number} response.data.data.sessions[].day - Day of the week (1-7) which current index data is associated to
 * @returns {number} response.data.data.sessions[].sessionLength - Session's length in minute which current index data is associated to
 */
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

/**
 * getUserPerformance
 * @date 2021-06-11
 * @param {string} id - ID of the user
 * @returns {Object} response - HTTP Response
 * @returns {boolean} response.error - True if an error is catched
 * @returns {number} response.status - Standard HTTP Status code (200 if success)
 * @returns {Object} response.data - data from database
 * @returns {number} response.data.data.userId - ID of the user
 * @returns {Array} response.data.data.data - Array of object for 6 kind of performances
 * @returns {number} response.data.data.data[].value - Value associated to the kind of performance
 * @returns {number} response.data.data.data[].kind - Kind of performance, key between 1-6
 * @returns {Object} response.data.data.kind - Kind of performance associated to a key (1-6), useful to check the kind on data
 */
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
