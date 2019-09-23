# USER STORIES, LAB 11, BUS MALL

# involved teams:
- marketing research
- developers
- focus group participants

# User Story Ideas:
- <X> as the research coordinator, <Y> I want the participant to be able to input demographic details, <Z> for data tracking that can assist in future features
- <X> as the developer, <Y> I want all tracked actions saved as object literals with an iterative naming scheme, <Z> to make it easier to organize and call data to display it
- <X> as a focus group participant, <Y> I want the user experience to be pleasant but free of distractions while I give my input, <Z> because that's what I want
- <X> as the purchasing officer, <Y> I want all the options selected to come from the same source, <Z> because that makes my job easier
- <X> as the product inventory planner, <Y> I want all options to come from 5 categories and to be labeled with their category, <Z> so I can have more precise data
- <X> , <Y> , <Z> 
- <X> , <Y> , <Z> 

# Technical Plan
Constructor function will contain (overall):
    - item name
    - item category
    - filepath
    - display count
    - click count
    - text string to use for HTML ID
    - 

<!-- function to display 3 options -->
<!-- function to ensure no duplicates onscreen -->
<!-- function to prevent immediate repeats -->
<!-- function to increase display count -->
<!-- function to increase click count -->
<!-- method of preventing further input after 25 iterations -->
function to output data in desired format (list?)
function to calculate user most popular category (?personal stretch goal?)
function to 

form to capture user demographics anonymously
form to 

# First Steps
<!-- - Create a layout that displays three styled images
    - bordered boxes, inline
    - images need max-height and max-width
    - within max-h/w, size will be auto
    - for now, black backround in the box -->
<!-- - Import assets -->
<!-- - Make function to display 3 new images -->
<!-- - Make function to accept click and resulting action to display new images -->

# Later Steps
- Transformations or animations on boxes, one for clicked, one for hover, one for not clicked
- 

# Notes
- To prevent immediate reuse of images, I think I will create an array lastUsed[], and at the end of imageGenerator() all index values will replace the last three (all three) items in the array. During the imageGenerator() function, each image picked will check if lastUsed[1 || 2 || 3] matches, and if so, get a new index. This may all be able to replace the lines of code used to generate new non-duplicate index values.
    - Didn't happen as expected, but it's working. Instead of a new function to make this happen, I just appended "lastUsed.indexOf(index var) > -1" to the while statements on each index.
    - To debug issues while making this work, I used console log to output lastUsed at the beginning and ending of the imageGenerator() function. I've kept these features but moved them into a new function just for the button, to keep console output clear unless needed.
    - Working smoothly now, don't plan to make changes to display function until later.
- Had to debug why my click counter was not increasing. I was using event.target.title like in the class. Even though I was defining the title in the object literals, I failed at first to realize it wanted to pull the title from the DOM. Upon inspecting my images on the webpage, I realized that title and alt were undefined, which explained why I kept getting undefined when I consol.logged what item I had clicked on. Digging in, I found that I was assigning imagePool[i].name to my image element title, not .title, which is where the failure was occurring. All is good now, feature works as expected.

