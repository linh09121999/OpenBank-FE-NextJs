import api from "../apiOpenBankProject"

export const LoginDirect = (username: string, password: string, consumerKey: string) => {
    const authHeader = `DirectLogin username=${username}, password=${password}, consumer_key=${consumerKey}`;
    return api.post(`/my/logins/direct`, {},
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": authHeader,
            },
        }
    )
}

// export const OauthInitiate = () => {
//     return api.post(`/oauth/initiate`, null,
//         {

//         }
//     )
// }