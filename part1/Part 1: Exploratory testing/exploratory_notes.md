# Order of things to check:

1 - familirarize with the app

2 - check how the general user interface works under a little of pressure

3 - check source code

4 - check JS errors

5 - check for REST errors when navigating through the webpage

6 - try to do a booking of a hotel

7 - try to login

8 - try to do a booking of a hotel, while logged

---
---

# Weird things I am seeying:

1.1 - all the photos are the same inside the hotels

1.2 - There is a discount % indicator, but it does not show how much money the discount is, or if it is being already applied.

1.3 - I can see an indicator of */5 value of each hotel, but I cannot see the client reviews used to do that calculation. It seems suspicious, because it looks like a hardcoded number.

---

2.1 - If I use the mouse middle button to open a tab for each Featured Hotels, in /hotels, after 3 or 4 clicks the carousel moves left or right by itself, and after around 20 clicks it freezes and becomes unusable (I need to reload the webpage).

---

3.1 - the source code seems to have chunks of JS code mixed with the html, and CSS hardcoded into html elements

3.2 - the source code has commented HTML code

3.3 - it seems that there is a lot of hardcoded data and code in the source code (for example, the country list)

---

# At this point, I would:
 Stop testing 

 Talk with my manager about that whole page should be completelly redone, and that there must be a problem in development, since all the code architecture seems to be wrong (it is beyond bugfixing, it looks like it is easier to do it again, but properly now, from the begining).

 Check with a senior frontend developer I my asumptions about the problems with the source code are correct.

 ---
 ---
 ---

 By the sake of the experiment, I would have developed these three funcional cases:

 1 - Book an hotel as non-logued user and check the final invoice is correct

 2 - Book an hotel as a logged user, check the autocompleted user data is correct, and check the final invoice is correct
 
 3 - Book an hotel with no USER data and check that the process is halted

