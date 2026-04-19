# DEPLOYMENT_GUIDE.md

## Introduction
This guide provides detailed instructions for deploying the pmpgaiassistant application to Vercel and updating the frontend fetch URL for successful integration.

## Pre-requisites
- A Vercel account
- Access to the project repository
- Node.js and npm installed on your local machine

## Deploying to Vercel

1. **Sign in to Vercel**
   - Go to [Vercel.com](https://vercel.com) and log in to your account.

2. **Import Project**
   - Click on "New Project".
   - Select your GitHub account and find the `pmpgaiassistant` repository.
   
3. **Configure Project**
   - Follow the prompts to configure the project settings (e.g., environment variables).

4. **Deploy**
   - After configuration, click the "Deploy" button.
   - Vercel will build and deploy your project. Once deployment is complete, you will receive a URL for your live application.

## Updating Frontend Fetch URL
Once deployed, you need to update the fetch URL in your frontend code to point to the new Vercel deployment URL.

1. **Locate Fetch Requests**
   - Open your frontend code files where fetch requests are defined.
   
2. **Update URL**
   - Replace any hardcoded URLs with the new Vercel deployment URL.

3. **Test the Application**
   - Ensure that all fetch requests are working correctly with the new URL.

## Conclusion
You have now deployed your pmpgaiassistant application to Vercel and updated the fetch URL for the frontend. For any issues, consult the Vercel documentation or your development team.