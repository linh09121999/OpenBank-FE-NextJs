import api from "../apiOpenBankProject"

export const LoginDirect = (username: string, password: string, consumerKey: string) => {
    return api.post(`/my/logins/direct`, null,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `DirectLogin username=${username}, password=${password}, consumer_key=${consumerKey}`,
            },
        }
    )
}

export const OauthInitiate = () =>{
    return api.post(`/oauth/initiate`,null,
        {
            
        }
    )
}