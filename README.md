- Design and implement a service for retrieving and managing information about movies. The service consists of an API service (backend) and a browser app (frontend):
- Implement the API with whatever Backend Tech stack you prefer. We recommend using an application framework.
- Running the API locally is good enough.
- Implement the browser app with a technology of your choice. We recommend using an application framework, such as React.
- Design the communication between the browser app and the API like you prefer.
- The data used by the application is attached in the movies-compact.json file.
- Please implement data persistence or storage. For example, you can write to a file on disk or use a real database (for example, run MongoDB or PostgreSQL a container).
- Login and access control for the API does not need to be considered.
- Use cases for the service (implement as much as you want or have time for): ±±±±
- List all movies (you can show relevant information about movies in the listing)
- Search for movies that match the client's search term (genre tab, movie cast name search) ±±±±
- Adding a new movie and its information to the database ±±±±±±±±
- Because of limited time, you should focus on your strengths in your implementation. We’re more interested in how you’ve implemented things than in how much functionality you’ve had time to implement. It's totally fine that the service has very rough looks and that you haven't implemented all the use cases.

# Backend 

- Bulid server using node
- Created API endpoints for GET and POST
- MongoDB as storage and as middleware I have used mangoose
- I have defined the schema as per given JSON document
- server is running on 3002 port  

# API URI : http://localhost:3002/api/movies 

# Frontend

- For frontend I have used React JS + Typescript
- I have used MaterialUI for quick design

# Header 
- It contain {
     Logo: I have used dummy image
     Search Input : filtering movies with movie name 
     Add movie : Form UI , on action API call to store data in Mongo DB
     Badge : to display total number of movie }
# Body {
    GET call for listing movies
}
