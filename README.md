# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

my project is going to be a project portfolio website. i plan on building it with html/css and javascript. it will have a seperate about me, projects page and games that will be navigated via a nav bar on pc and a hamburger menu on tablet and phone  with a contact me with socials and emails at the buttom. the projects page will be populated by api calls.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://wireframepro.mockflow.com/#/space/MiOslQ4iPmb)
- [Desktop]included in the mobile as another page, could only add three pages total though so one is drawn out in person


Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Link](https://res.cloudinary.com/jkeohan/image/upload/a_270/v1591621734/project1_matrix_ocy5gc_h1kg0m.jpg)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- set up the basic design
- implement the hamburger button
- implement api calls to populate projects page
- grid set up
- making the desktop and tablet version
- making social media accounts and there respective icons
- css
- setting up github pages

#### PostMVP 

- adding game(s)
- filling in the whitespace
- hamburger button




#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| basic design| H | 4hr |4 hr |
| nav bar | H | 1hr |6 hr |
| API calls | H | 5hr| 6 hr | 
| grid set up | H | 3hr |3 hr|
| Responsive | H | 2hr | hr |3 hr |
| Social Media Icons | H | 1hr | 1 hr |
| CSS | m | 3hr | 4hr |  
| github pages| H | 2hr | hr |  

| Total | H | 16 | 27 hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| adding games | L | 7hr | 3 hr |
| filling in whitespace | M | 2hrs|  hr | 
| hamburger | m | 3hr | 5 hr |  
| Total | H | 12hrs| hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css -- used for the hamburger icon

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
 pokeArray.push(response.sprites.front_shiny);
      pokeArray.map((poke) => {
        $(`#mon${i}`).attr("src", poke);
      });

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
cant use blob urls for images
had to make a couple of functions to make navbar operate correctly

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
