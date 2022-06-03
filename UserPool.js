import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID,
    ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    ClientCredentials: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
    Storage: new CookieStorage({domain: ".focaltiles.com"})
}

export default new CognitoUserPool(poolData);