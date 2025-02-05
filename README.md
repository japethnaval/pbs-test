This is a simple test and there are two separated apps in this repository. 1. express-app where the referral api resides. 2. the referral-app where the frontend of the referral builder is being served.

## Getting Started

First, run the development server of express-app:
the server is expected to run at port 3232

cd express-app then

```bash
yarn dev
```

Second, run the development server of referral-app:

cd referral-app then

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the referral-app development server.
The database used was sqlite3 which only persist the data via memory. The data is expected to vanish everytime the express server is restarted.

## Task Requirements

• As the form is filled out, the preview should be automatically updated 
• The Create button should function to call the Create Referral API endpoint 
• The app should be responsive for different screen widths 
• The form should work in the latest Chrome browser

## Guidelines

• Use React as a base library. Feel free to use any react library to complete this task 
• We are interested in your coding style and how you solve problems. To this end, please include your source code and any 
build steps / explanations / set up instructions we may need to test the submission 
• Please structure the code for reusability

