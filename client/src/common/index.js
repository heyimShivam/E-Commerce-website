const backendDomain = "http://localhost:7000";

export const SummaryApi = {
    signup: {
        url : backendDomain + "/api/signup",
        method: "POST"
    },
    login: {
        url : backendDomain + "/api/login",
        method: "POST"
    },
    userDetails: {
        url : backendDomain + "/api/user-details",
        method: "GET"
    }
}