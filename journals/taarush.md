## CMPE 172 - Starbucks Project - Personal Journal - Taarush Vemulapalli


Journal dedicated to log and keep track of my responsibiliites, contributions and lessons learned from challenges while working on this project

### Week 1 
![week1-taskboard](../Images/week1-taskboard.png)

Our primary progress this week revolved around understanding the project requirement and setting goals inorder to submit a scalable and reliable project submission. Moreover we went over everyone's availability inorder to make a schedule that would get us on the track to finishing our project on time. 

My responsibilities and first tasks include working with Daniel to build the backend of the application while also assisting Martin, who is working on the front end, when it comes to fullstack integration. 

Aside from that, I also thoroughly reviewed previous Spring labs and the various Database related labs to get a better understanding on what is required for the project. More importantly to understand which parts of the project we already have a decent grip on and parts of the project which require more research and prototyping. 


Personal Accomplishments for Week (04/22):
* Scoping requirements of the entire project in order to assign individual tasks
* Hosted a call with my teammates to go over the project and make a schedule with realistic soft deadlines and handover specific responsibilites to each partner
* Made a task board on github to track the progress
* Reviewed previous labs and spring starter files to establish a boiler plate for this project
* Reviewed our previous deployment notes to gather procedures relevant to this project

Challenges
* Making a schedule in a way that's sensitive of everyones availablility and our time deadlines for this project
* Making a list of actionable tasks before we attend the class inorder to have my queries addressed. 


### Week 2
![week2-taskboard](../Images/week2-taskboard.png)

Summary: 

Last week we spent a lot of time grasping the scope of the project inorder to make a schedule/taskboard to help us submit our project on time. It ended with Daniel and me splitting the backend responsibilities while Martin agreed to work on our frontend needs. Based on our assigned tasks, I worked on setting up a Spring project with MySQL and REST API. 

The progress of this can be followed on this [branch](https://github.com/nguyensjsu/sp21-172-go-team/tree/taarush/rest-api), with the plan being that we will all work individually until we can merge the entire project on the main branch (and setup docker/deploy scripts in the root folder)

Personal Accomplishments for Week:
* Started working on the REST API using the following spring project
![init](../Images/rest-initializer.png)
* Created a database schema to ensure the starbucks cards/orders can be integrated into MySQL
* Created sample routes (based on our previous labs) and tested them using postman
![postman](../Images/rest-post-api.png)
* Worked with Daniel on how to divide the responsibilities on the backend (with him agreeing to work on the back office + cybersecure portion of the project)
* Created Makefiles/Docker compose scripts to test parallel MySQL deployments required to boot up our application (setting up table + user credentials)

Challenges
* Debugging REST API setup + finding edge cases where the request fail (particularly when doing database inserts)
* Co-ordinating with our teammates and working with our schedule to make sure everyone is on the same page + ensuring we're not working on the same features (to avoid redundant code/work) 


### Week 3
![week3-taskboard](../Images/week3-taskboard.png)

Summary: 
As mentioned last week, we all divided the different tasks and started working on them on our respective branches (my [branch](https://github.com/nguyensjsu/sp21-172-go-team/tree/taarush/rest-api)). Created an additional branch for front-end + back-end integration (not pushed yet, a few more bugs to fix). 

Personal Accomplishments for Week:
* Forking Martin's front-end branch in order to test the API requests (including DB inserts, for cards and orders) from the client side using `axios` instead of postman. While there were issues pertaining to 

* Setup an AWS container repository and container service task (including configuring open ports for both front-end (2x) and back-end) for our final deployment

* Fixed bugs when it comes to exceptions and edge cases (when it comes to card/order CRUD)

Challenges: 
* The biggest challenge this week was me and my teammates having trouble co-ordinating a time for end to end integration (and not just working on our individual contributions). Given the deadline rapidly approaching we hoped to meet and integrate all our working branches, but due to deadlines in other classes we couldn't find a time that worked best for all of us. We are mitigating this by meeting tomorrow (Friday, May 7th) to make more progress on complete integration

* My local openjdk enviroment broke which prevented me from working on the project locally, after working on various fixes, that didn't work out, I ended up using a cloud IDE enviroment (gitpod) in order to start in a clean setup, which helped me continue working on the project
