# Marketplace of Ideas

Have you ever felt that you have one (or a ton) of ideas but don't have the skills or time to implement them? With Marketplace of Ideas, you can put them up for someone to claim and you can collaborate with someone that wants to bring your idea to life! Also, do you enjoy building projects but run short of ideas? You can find them here!

# Important Links:

Live Link: https://jiles-marketplace-of-ideas.now.sh/
API Repo Link: https://github.com/ajiles91/marketplace-of-ideas-api

# Technologies Used:

HTML, CSS, React.js, Node.js, Express.js, PostgreSQL, SQL

# Screenshots

![marketplace-of-ideas-main-page](screenshots/marketplace-of-ideas-create-idea.jpg)
![marketplace-of-ideas-idea-details](screenshots/marketplace-of-ideas-idea-details.jpg)
![marketplace-of-ideas-create-idea](screenshots/marketplace-of-ideas-create-idea.jpg)

# API Documentation

There is a backend database that manages the ideas that are submitted, claimed and released by users.

## GET /api Endpoint

-endpoint returns all of the ideas in the database so the name of each idea can be displayed on the main page
-ideas are stored as an array of objects; each object has a key-value pair of:
-id:12 (number, generated when posted in database)
-ideaName: Title of Idea or Task (string)
-ideaSummary: a short summary of the user's idea (string)
-authorName: name of user (string)
-email: email of user (string)
-claimed: claimed is true and unclaimed is false; default is false(boolean)
-submitted: defaults as false flips to true when user submits idea on create idea page(boolean)

## GET /api/idea/:id Endpoint

-endpoint returns the object of the single idea clicked on by the user so the ideas details can be displayed on page
-ideas are stored as an array of objects; each object has a key-value pair of:
-id:12 (number, generated when posted in database)
-ideaName: Title of Idea or Task (string)
-ideaSummary: a short summary of the user's idea (string)
-authorName: name of user (string)
-email: email of user (string)
-claimed: claimed is true and unclaimed is false; default is false(boolean)
-submitted: defaults as false flips to true when user submits idea on create idea page(boolean)

## PATCH /api/idea/:id Endpoint

-endpoint for PATCH request triggered when a user clicks on the "claim idea" or "release idea" button
-when user clicks claim idea button the POST request flips the claimed value from false to true
-when user clicks release idea button the POST request flips the claimed value from true to false

## POST /api/idea Endpoint

-POST request to endpoint allows user to create idea and post it to the database, user submits a name for the idea,a summary of the idea, the user's name and their email
-object created and added to array:
-id:12 (number, generated when posted in database)
-ideaName: Title of Idea or Task (string)
-ideaSummary: a short summary of the user's idea (string)
-authorName: name of user (string)
-email: email of user (string)
-claimed: claimed is true and unclaimed is false; default is false(boolean)
-submitted: defaults as false flips to true when user submits idea on create idea page(boolean)
