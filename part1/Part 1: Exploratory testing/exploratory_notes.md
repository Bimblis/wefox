# Order of things to check:

1 - familiarize with the app

2 - put some pressure in the user interface

3 - check the source code

4 - check JS errors

5 - check for REST errors

6 - try to make a booking of a hotel

7 - try to login

8 - try to make a booking of a hotel, while logged

---

# explore the app

1.1 - all the photos are the same inside the hotels (it is ok since this is a fake app)

1.2 - There is a discount % indicator, but it does not show how much money the discount is, or if it is being already applied.

1.3 - I can see an indicator of */5 value of each hotel, but I cannot see the client reviews used to do that calculation. It seems suspicious, because it looks like a hardcoded number.

---
# put some pressure in the user interface

2.1 - If I use the mouse middle button to open a tab for each Featured Hotels, in /hotels, after 3 or 4 clicks the carousel moves left or right by itself, and after around 20 clicks it freezes and becomes unusable (I need to reload the webpage).

---
# check the source code

3.1 - the source code seems to have chunks of JS code mixed with the html, and CSS hardcoded into html elements

3.2 - the source code has commented HTML code

# check JS errors

4.1 - it does not seem to have JS errors (at least in the frontpage)

# check for REST errors

5.1 - there is a 404 for missing content in the frontpage: https://www.phptravels.net/app/themes/default/assets/js/bootstrap.bundle.min.js.map

# try to make a booking of a hotel

6.1 - the process seems to be barely possible, but has some errors and is generally clunky. 

# try to login

7.1 - it works

# try to make a booking of a hotel, while logged

8.1 - it seems to work as expected

 ---
 ---
 ---

 By the sake of the experiment, I would have developed these three functional cases:

 1 - Book a hotel as non-logged user and check the final invoice is correct

 2 - Book a hotel as a logged user, check the auto-complete user data is correct, and check the final invoice is correct
 
 3 - Book a hotel with no USER data and check that the process is halted

