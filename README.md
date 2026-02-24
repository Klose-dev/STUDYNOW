This repository contains frontend codes of the web application.

This UI created using ReactJS and it use some API requests to communicate with backend.

Backend Code is created using Java. It use genetic algorithm to create a time table and uses a Browser Compoent to show 

**Step 2:**
Then use Intellij IDEA or any other framework to build a jar file of the TTSBrowserComponent.

**Step 3:**
Then copy the jar file of TTSBrowserComponent to Forked TimeTableScheduler-Backend's main directory.
**Step 4:**
Now open forked Time-Table-Creator-ReactJS and build the product using command like `npm run build`

**Step 5:**
Then Copy the build product to TimeTableScheduler-Backend's `web` directory. **(If web directory is not present in TimeTableScheduler-Backend then create one)**

**Step 6:**
Now you just need to run the TimeTableScheduler-Backend's `main.java` file using Intellij IDEA or any code editor or framework.


# How to use this UI?

First you have to add all the subjects on **Subjects tab**.
To add a subject you need to enter all the required values:
1. **Subject Name** - the unique subject code or name
2. **Semester** - the class or semester in which the subject is taken
3. **Classroom** - the room no where the class will be taken (you can add multiple classroom pressing enter key after typing each classroom) *(don't forget to press enter after typing the classroom)*
4. **Lecture Count** - number of classes of that subject is need to take in a week *(default value **4**)*
5. **Subject Type** - if the subject is practical or theory *(default value **theory**)*
6. **Should be Taken by Teacher or Not** - if subject is taken by teacher then make it yes either make it no *(default value **yes**)*


After adding all the subject next you have to add Teachers on **Teachers tab**.
To add a teacher you need to enter all the required values:
1. **Teacher Name** - teacher name which is have to be a unique
2. **Subjects** - type all the subject names pressing enter key after typing each subject (subject must need to be present in subjects tab)
3. **Available Time** - when teacher is available to take classes (if you leave it blank means you did't select any time then it will be consider as teacher is available all the time)


After adding all the subjects and teachers you can generate the time table from Time Tables tab.
**To generate the time table** click on `Auto fill using AI` button. Also you can manually fill the time table.
# These are the Constraints that are used in our AI system to generate the time table:
**Hard (Mandatory) Constraints include :**
1. One practical subject class per week
2. All teachers alloted within availability
3. Subjects alloted their required no. of lectures in all sections
4. Practical subjects not allocated same room at same time
5. Two teachers not teaching a semester-section same subject (theory only)
6. Two teachers/subject not at a semester-section at same time (theory only)
7. Teachers only teaching one semster-section at a time
8. Practical subjects assigned consecutive periods
9. Practical teachers must be available during all practical subjects
10. All teachers assigned atleast one subject in a section class
11. All teachers get assigned subjects known to them
12. Theory teachers also teaching practical
13. Teachers count for practical class equals lecture count

**Soft (Preffered) Constraints include :**
1. Practical Lab in end of second half

# How to use fill manually feature
**1.** You have to click on Fill Manually button then<br/>
**2.** Click on periods after that a popup will appear and <br/>
**3.** From there you can select the subject and teacher for that period *(you can select multiple teachers but only one subject can be selected)*, <br/>

After generating the time table you can use the features of Dashboard Tab from here you can see
1. The time tables for a particular teacher
2. You can see how many classes a perticular teacher is busy taking classes per day in class unit *(for theory the value is 1 and for practical the value 
})
```
