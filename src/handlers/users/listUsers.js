const serverless = require("serverless-http");
const express = require("express");
const AWS = require("aws-sdk");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userPoolClientId = process.env.USER_POOL_CLIENT_ID;
app.use(async (req, res, next) => {
    try {
        const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

        // @see https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-listusers-api-examples
        const params = {
            UserPoolId: userPoolClientId,
            Filter: "",
            Limit: req.body.limit,
            PaginationToken: req.body.token
        };

        // @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#listUsers-property
        const users = await cognitoIdentityServiceProvider.listUsers(params).promise();

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports.handler = serverless(app);