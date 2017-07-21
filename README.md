![Wine Buddy Logo](http://i.imgur.com/WLWCTLl.png)

## Deployment and API URLs

* [Wine Buddy Deployment]()
* [Wine Buddy API]()
* [Wine Buddy Wiki]()

## Technologies Used

* [Ember](https://www.emberjs.com/)
* [Datatables](https://datatables.net/)
* [Bootstrap](http://getbootstrap.com/)
* [Jquery](https://jquery.com/)

Ember is the driving force behind this application. Datables provides an
extremely clean and robust platform for managing lists with search and sort
functionality. Bootstrap and Jquery help drive and support the UI design.

## Dependency Installation

* Fork and Clone this repository
* `npm install`
* `bower install`
* Start the front-end server with `ember server`

## User Stories

Users of this application are atleast 21 years of age, and are looking for an
elegent solution to keeping an organized inventory of their wine collection as
well as a wish list of wines they wish to acquire in the future.

1. As a user, I want to record my wine inventory in a private application that
is protected by some sort of user authentication
2. As a user, I want to create a list of wines that I own, and be able to access
them at a later point.
3. As a user, I want to be able to create a wish list of wines that I do not own yet
4. As a user, I want to be able to record how many bottles I have of any given bottle,
as well as other information about that bottle such as varietal, region, bottle size,
etc.
5. As a user, I want to be able to edit and remove wines from my lists in case I
no longer own a bottle, or make an error during entry

## Initial Wire Frames

Initial wireframes show a slightly different UI scheme along with an intial plan
to use [Addepar Ember Tables](http://opensource.addepar.com/ember-table/).

![Wine Buddy Logo](http://i.imgur.com/WLWCTLl.png)

![Wine Buddy Logo](http://i.imgur.com/WLWCTLl.png)

## Plans and General Approach

I began this project by identifying some sort of real-life need that could be
solved with a web-application. My father collects wine, so I relized I could build
an application that allows him to keep tabs on his collection, and access it while
away from home.

Originally, I had planned to utilize a third-party API to provide search functionality
rather than entering information about a bottle by hand. The objects that are returned
from these API's are generally very elaborate, and handling all of that information
while building my first application in Ember seemed like a bit of a stretch for my
deadline, which was 4 days away.

I began by coming up with some user stories, some of which had to be scrapped (having
to do with 3rd Party API functionality). From that point, I began sketching out
wireframes to envision the layout of the UI. The entire process was tricky with
trying to balance envisioning features whilst learning a new framework.

I had worked with Datatables during my last project and felt fairly confident that
I could implement them. I found Addepar Ember Tables via a Google search, but realized
that implementing them would come with a learning curve that I did not have time to
account for. Thus, I chose to find a way to implement traditional Datatables.

I had previously used the Datatables Editor plugin, which hid a lot of its functionality
behind the scenes, and required a very specific format to persist data to an API. While
the implementation of the editor is very robust, the setup did not seem like a good idea
to interwine with Ember and its already opinionated data store system.

I implemented the Datatable itself by creating one component that used an if statement
to decide if the quantity row should be displayed (the only difference between the
2 lists).

Once authentication was implemented and could communicate with my API (which was set
up prior to front-end development), I worked on Implementing the datatables. The tables
were populated via a GET request via the datastore, and was able to display data that
I had populated via curl scripts.

I decided to implement add and edit buttons within each entry's row so that targeting
the entry itself would be rather seamless. I began with the delete functionality, since
it didn't rely on developing a form field. When the delete button is fired, the record is
deleted, and assuming it is successful, the row is deleted from the datatable via a
datatables API function.

The add and edit functionalities were solved by creating routes for each list and then for
each function. By moving to a new route, I could garuntee that the datatable itself would
rerender to reflect the changed made to the backend API.

The add form is a blank form that has default values set, if the user does not enter
a value. The editor form is an extremly similar form, but is populated with the data
from the entry that is being edited.

## Unsolved Problems and Major Hurdles

The biggest problems I ran into revolved around deciding how to implement the add and
edit forms. I began by using a single component for add, and another component for edit
with logic to determine which list was being modified. The logic posed big problems, and
the fact that I wasn't leave the route, I had to deal with hiding and showing the form and
Datatable. Additionally, I had to deal with rerendering the Datatable or manually adding,
removing, or editing rows.

Outside of the development process itself, coming to terms with the fact that I did not
have time to implement a third-party API, was something that I found tough to let go of.

I had trouble implementing the Datatable select extension, the Datatable editor plugin, implementing
select inputs, and even installing a bootstrap carousel. While there were third-party solution
available via NPM and bower, I chose to find my own solution, and often found some sort
of workaround if I felt I was wasting time on a feature that didn't help me produce
the minimum viable product.

## Future Plans and Implementation Ideas

General:

* Select menu for all wine varietals with search feature built in (bootstrap-select?)
* Datatable to house a list of lists for each variety with quantities - linking to datatables displaying wines of certain varieties (Possibly a list of lists for winemakers)
* Vastly improve UI

Possibilities for Implementing Third-Party API's:

* Populate lists with ability to view images of bottle labels
* Links to winery websites
* Ability to search a database for prices locally (retail) and online
* View price histories over the course of time

## App Screenshots

Main View:
![Wine Buddy Main](http://i.imgur.com/rA9j6t9.png)

Inventory View:
![Wine Buddy Inventory](http://i.imgur.com/QLvPZ93.png)

Wish List View:
![Wine Buddy Wish List](http://i.imgur.com/4Rfyh7O.png)

Add/Edit View:
![Wine Buddy Add/Edit](http://i.imgur.com/OuCtW3p.png)
