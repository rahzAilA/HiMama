**Q.Please describe your process for approaching the code challenge. What kind of
planning did you do? Did your plans change as you began coding?**

A. After reading the requirements, I first started to sketch out the user
experience: How many screens will there be? How to switch classrooms? How to
easily move children between classes?

The task itself seemed relatively simple so I decided to spend major time on
properly setting up code structure, linting, rules and typechecking. The code is
structure in terms of modules, `src` contains the core module and `modules`
contains function specific modules. Splitting code in modules helps reduce
conflicts as app grows and people from different department start working on the
app.

I was planning to add a state management library but as I worked with Firebase
Realtime Database I realized it won't be required.

---

**Is there anything you’d like to add or mention in regards to the app design
and navigation you chose?**

For classroom switching, I had two ideas, a side drawer (inbox select in Gmail)
and a separate screen (category switcher in netflix). I went with later but I
don't really like how it turned out because the animation seems excessive.
Ideally I would have replace it with the drawer but I already lost some time due
to unexpected guests over the holidays and now I'm running late for the
assignment!

To move children between classes, user can either long press a child or press "Edit"
button to enable select mode. After selecting children, pressing "Move" opens a
modal with available classrooms to move children too. This UX is pretty common
on File apps to move files across folders so I'm hoping users will find it
intuitive here as well.

___


**If you were given another day to work on this, how would you spend it? What if
you were given a month?**

I would have experimented with side drawer for classroom navigation and also 
researched more designs (the check in/out badges stick out too much) and maybe also updated UI.
If I had even more time I would have probably done the following:
1. Stricter and more well defined eslint rules
1. Figur out how to make batched API calls to firebase.
1. Optimistic updates: Although firebase is pretty quick, there is still a split second delay when checking in/out a child
1. Haptic feedback on long press
1. Research and add animations/transitions where possible
1. Add proper unit, smoke and e2e tests
