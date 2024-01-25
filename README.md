# Game of Thrones ReadMe
## Description
This group project was undertaken by myself, [Nyasha Dzvoti](https://github.com/NyashaDZT) and [Dan Edmunds](https://github.com/danedmunds1) during weeks 8 and 9 of our software engineering bootcamp with General Assembly. The aim of the project was to create a full stack web application with CRUD (Create, Read, Update and Delete) capabilities. We wanted to break away from the examples which were provided to us which were mostly based on real life things such as travel or food. So we chose to make a compendium site about the fictional world from the Game of Thrones books by George R. R. Martin.

## Deployment link
The site can be found here: 
https://game-of-thrones-fullstack-9f43f1202e82.herokuapp.com/ 
In order to experience the full site it is recommended that you navigate to the register page and make an account. (As this site was created for educational purposes the email address isn’t verified and therefore does not have to be a real email address)

## Getting Started/Code Installation
HTML, CSS and JavaScript for this project can be found here: 
https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project 
Both the server side and the client side have their own packages which are included in the dependencies of the package.json for each and can be installed using ‘npm i’.

## Timeframe & Working Team
This project was completed as a group of three people. We had 7 days to take it from concept planning to a fully functional application.

## Technologies Used
### Front end:
HTML, CSS, JavaScript, SASS, React and Bootstrap

### Back end:
MongoDB, Express and Node.js 

### Development tools:
GitHub, Heroku, Inkscape and Insomnia

## Brief
We were given 7 days to build a full stack application which used an Express API to serve data from a Mongo database, consumed the API with a separate front-end built in React, had multiple relationships and CRUD functionality and be deployed online so it is publicly accessible.
The technical requirements for the project were:
- Build a full-stack application by making your own backend and your own front-end
- Use an Express API to serve your data from a Mongo database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design.
- Be deployed online so it's publicly accessible.
The necessary deliverables were:
- A working app hosted on the internet
- A link to your hosted working app
- A git repository hosted on Github
- A readme.md file

## Planning
To begin planning we discussed what functions we wanted to have for the site, what our MVP was going to be and potential stretch goals that we might add. As we discussed these points, I made a rough wireframe to represent each page of the website using Excalidraw. The initial wireframe can be seen below, the final site ended up slightly different to this as we made changes dynamically, based on what we thought looked and felt best as the site started to actually take shape.

![Wireframe plan of the site](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/6cb17dac-fded-4ad2-9163-53441f35ca63)

I also put together a trello board which had the basic pages/functions that we wanted, questions we had for each other, bugs we found etc. all of which could be assigned to one of the group members so that we could keep track of who was doing what. 

![Screenshot of the trello board used to plan the project](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/ee336cbb-d34e-4055-b75f-a84c6366610a)

## Build/Code Process
### Day 1
Once the initial planning phase had been completed and each of us had agreed on our assigned tasks, we all began in the back-end of the site. I started with creating a model using mongoose Schema to represent all of the information that would be related to each family House within Game of Thrones. This included creating virtual fields that would populate all of the characters found in each house and the places which each house had occupied throughout the history of Game of Thrones. These virtual fields were pulling their information from the models created by my two partners and so involved us collaborating so that we knew what name each of us had used for the corresponding “foreignField”.

![Screenshot of code used to define the house Schema](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/62b70775-a609-4570-a4f4-1279b3794758)

I also added the JavaScript files for the controllers to get all of the Houses for the house index page and to find a single House based on its ID. Both of these functions populated the characters and places which were defined in the virtual fields of the House schema.
 
### Day 2
On day 2, I added the paths and loaders into the main.jsx for the index pages, individual elements (single characters, single houses and single places), register, login, character creation and character editing.
I then created the skeleton for the single character page using react. This started by retrieving the character data using the useLoaderData function and destructuring that data so that I could easily take the relevant information that I wanted to display on the web page.

![Screenshot of the code retrieving and destructuring the data for single characters](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/76343483-2097-4259-bf3d-9ef4f740f3bb)

I then updated this skeleton using Bootstrap to shape the page with a container, columns and rows.
The final thing that I did on this day was look for some fonts that would fit well with our theme and added those to the app.

### Day 3
The majority of day 3, I spent adding styling to the single character page. I wanted to make these pages dynamic so that they would use colour schemes based on the character that was being displayed.
To do this, I used bootstrap to take the House that the character belonged to and set the container which held the code to be displayed with a class name of that character's House. I then created a Scss file with a mixin containing the arguments of primary, secondary and tertiary and put all of the styling for the single pages within the mixin, using the primary, secondary or tertiary variables as colours instead of hard coding them. I then created a selector for each House name (ie. each class name) and used an online colour matcher to pick a primary, secondary and tertiary colour for each House based on their House crests. With this any character that belonged to a House would be dynamically styled based on their house colours.

![Screenshot of the styling contained within the house colours mixin](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/bed8db70-d259-4c86-be75-9b619a17f540) ![Screenshot of applying the mixin to each house class name](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/4d8ac5a4-0c80-4933-85a1-9692c2e548d3)

### Day 4
This day was spent refining the styling of the single character pages, I also added cards with other characters which were related to the displayed character which could be clicked to bring the user through to that characters page. I also added a link to the single characters family crest, which would bring the user to the characters House page. I then created the components for the single House and single place pages which could be accessed from the relevant links within each page, or from the index page for Houses, characters or places.

![Gif showing navigating through the site using picture links](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/b9836516-8c26-4803-aef4-c0e9cf19fdad)

### Day 5
On day 5 I did the styling for the single place and single House pages. These were also styled dynamically using the same mixin/selectors as the single character pages. I also added hover animations for the clickable links on the singles pages to make it more obvious that they were clickable.

### Day 6
This was when I added the part that I was most proud of for the website, which was a map of Westeros (where Game of Thrones is set), which had points of interest that the user could hover over to find out the places name, as well as click on the dots to navigate to that places single page. 
To do this I had to learn about Scalable Vector Graphics (SVG) files, which I had not come across before. I started by using a program called Inkscape to add the official Game of Thrones map as a background layer and then added a red circle to the map for each major place in Westeros. I exported the map as an SVG and then transferred that code to my react map component. Using the chrome developer tools I identified each of the red circles (each of which was an ‘ellipse’ element) and gave it a class name in relation to which place it represented. I then added an on click function which would use the event target to find the class name of the clicked ellipse, run it through a regular expression (regex) pattern test to find the matching place name and corresponding ID. Using this ID the function would then navigate to the single place page for the place that was clicked. 
Using a similar function I also added an on hover function which would use the ‘offSetX’ and ‘offSetY’ coordinates of the mouse’s position to display a small card just beside the place displaying the place name and a small picture of it. By using the mouse’s coordinates it meant that the display card would work across the majority of screen sizes.

![Gif showing the interactive map](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/95b65fe4-c5d3-4643-823f-f896ffde823a)

![Screenshot of code showing using mouse coordinates to position information cards](https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/assets/143013767/747702ee-1699-4fce-a375-02efbe91ac04)

### Day 7
This day was spent doing the final styling, bug fixing and quality of life changes before presenting our website to our classmates. I used this time to give the map popups a more interesting border and changed some of the hover animations on the single page links so that they were a little more subtle.

## Challenges
The biggest challenge for me was styling the single pages in a way that I was happy with. It’s something I’ve really enjoyed on my previous projects, but something just felt a little bit off to me about these ones. I ended up trying to make the pages have a stained glass feel, inspired by the stained glass sculptures representing Game of Thrones episodes, which can be found throughout Belfast City (as a lot of Game of Thrones was filmed there). I think the effect comes off pretty nicely but could definitely be better and it’s something I would like to come back to and have another go at in the future. 

## Wins
The biggest win for me was definitely the interactive map on the places index page. I learnt a lot of new things in order to make this work including what SVGs were and how to implement them as well as using the ‘offSetX’ and ‘offSetY’ on the event listener to find the position of the user’s mouse and display information based on that. I really think that this map brings the entire site up a level in terms of both aesthetics and functionality.
I also really enjoyed working as a team for this project. The ability to rubber duck off each other, as well as ask for and provide help to each other was invaluable.

## Key Learnings/Takeaways
My key learnings for this project is directly related to my project wins, because to me the new things that I learn usually are the biggest wins. For this project learning about SVG’s, learning to use Inkscape (a brand new tool for me) and learning to take the users mouse position as a way to display information in the correct place were huge takeaways.

## Bugs
There are currently no bugs that I am aware of.

## Future Improvements
My future improvements for this project would be to make the single pages’ styling better. How a site looks is such an important part of the user’s experience and I feel like these pages in particular could be made to look much better.
We had also talked about a stretch goal for the site where we would add a bestiary for the world of Game of Thrones which would contain the plants and animals found in each region with a little bit of information about them and given the time I would like to implement this.
