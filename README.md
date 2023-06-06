# Hounding-Tracker-FRONTEND

Hosted site: https://houndingtracker.netlify.app/

A MERN-stack application that can be accessed by the user as a reference, or a social platform. Rock-hounds who want to see what types of minerals are being found in what locations, at specific times of year can browse the collections database. Rock-hounds who want to share their most recent mineral discovery have the ability to upload a new entry to the collections database and share their details with other hobbiest.

## User Story

- AAU, I want to arrive at a home page that clearly informs me of how the site works.
- AAU, I should see a Nav bar that links me to an index page of submissions, as well as gives me the ability to add a new submission to the index page, from the home page.
- AAU, I expect the index page to link to each individual item's show page.
- AAU, I want to be able to create a new submission that includes the type of mineral found, county location, date, conditions, and an image.
- AAU, I need the ability to edit and delete a submission from the index page.
- AAU, I want each show page to display a map with the county in which it was found. **STRETCH FEATURE**
- AAU, I want to be the only one with the permission to edit and delete the submissions I made. **STRETCH FEATURE**

## Getting Started

1. To view collections from the home page, click the link at the top of the page that reads "View Collections". This will display a database of entries submitted by other rock-hounds. 
2. To expand the data about a specific find, click the image. This will display a show page for the specific mineral selected. The show page will display all of the data for the discovery of the selected mineral.  
3. To add a new mineral to the collections database, from any page, click the link at the top of the page that reads "Add Mineral". A form of information about their discovery to fill out and submit will be displayed. Clicking the submit button will add the information provided to the database, which will reflect on the collections (index) and show pages. 
4. To view the collection's database with markers on a map, click the Map button on the index page. Clicking each pop-up will provide the information about the find. 

### Technologies Used

- React
- Express
- CSS
- Moment
- Leaflet
- React-Leaflet

### Wireframe

![Hounding_Tracker_Wireframe](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/12d174f7-a664-4446-b368-a243b5813dca)
![Hounding_Tracker_Wireframe](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/b10d1b6a-cf11-44cb-9bee-5c6535811c20)
![Hounding_Tracker_Wireframe](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/39e62979-0bd2-4b4d-8b32-920ecf588ee9)

#### Icebox

- Add Auth with Bcrypt to allow users to create a profile to manage their posts from. 
- Add the ability for a user to choose whether they want to broadcast their details to the collection, or keep it in a personal log tracker instead.
- Add Pagination to allow the user to click through multiple pages when a large amount of data has been entered into the collection. 
- Add boundaries to the map so that only the state of Oregon displays, and only coordinates within the state are permitted.

#### Screenshots
![Screenshot 2023-06-06 at 11 28 45 AM](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/201d6dba-d88d-4178-ab56-d5fbd1c5d948)
![Screenshot 2023-06-06 at 11 29 00 AM](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/06dc0d46-9aa7-429d-b617-942397c6587b)
![Screenshot 2023-06-06 at 11 29 11 AM](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/0f82e9ec-c487-4261-9c74-a94f4a885f20)
![Screenshot 2023-06-06 at 11 29 28 AM](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/923afc98-f719-4c92-bb83-b33f5504dbe4)
![Screenshot 2023-06-06 at 11 29 34 AM](https://github.com/JacobPaul710/Hounding-Tracker-FRONTEND/assets/123111537/fa3aef1f-e6f4-431e-98cf-8e1d2fc16774)






