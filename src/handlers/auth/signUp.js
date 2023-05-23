const AWS = require('aws-sdk');
const serverless = require("serverless-http");
const express = require("express");
// const bodyParser = require('body-parser');

const userSchema = require("../../models/user.schema");

const userPoolClientId = process.env.USER_POOL_CLIENT_ID;

const app = express();
app.use(express.json());
app.use(async (req, res, next) => {
    try {
        // Validate request body
        await userSchema.validate(req.body);

        const { username, password } = req.body;

        // Create user in Cognito
        const cognito = new AWS.CognitoIdentityServiceProvider();
        const params = {
            UserPoolId: userPoolClientId,
            Username: username,
            TemporaryPassword: password,
            UserAttributes: [
                // { Name: 'email', Value: email },
                // TODO Add type attribute
            ]
        };

        await cognito.adminCreateUser(params).promise();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports.handler = serverless(app);