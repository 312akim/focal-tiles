import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID,
    ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    ClientCredentials: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
}

export default new CognitoUserPool(poolData);