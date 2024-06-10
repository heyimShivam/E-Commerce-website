import { SummaryApi } from "../common";

export async function SignupBackendAPI(userData) {
    return await fetch(SummaryApi.signup.url, {
        method: SummaryApi.signup.method,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
} 

export async function LoginBackendAPI(userData) {
    return await fetch(SummaryApi.login.url, {
        method: SummaryApi.login.method,
        credentials: 'include',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
} 