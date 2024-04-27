# Health Project
npm install
npm install express mongoose body-parser cors dotenv
touch .env
node server.js

    Start your server by running node server.js in your terminal.
    Open Postman, and create a new request.
    For a POST request to add a new article, set up Postman as follows:
        Set the method to POST.
        Enter the URL http://localhost:3000/api/articles.
        In the 'Body' tab, select raw and JSON format.
        Enter the details of an article in JSON format, e.g., { "title": "Health Benefits of Running", "content": "Running is great...", "author": "Jane Doe" }.
    Click 'Send' and check the response.