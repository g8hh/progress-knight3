# progress-knight
An incremental game developed by ihtasham42 and extended by Cameron Gott. Link to the game: https://ihtasham42.github.io/progress-knight/

# dev-diary
6/4/2021  
Adding an item today.  
Step one: add the item data to const itemBaseData.   
Step two: Add Rag Clothing to the Misc itemCategories object.  
Step three: Add placeholder tooltip text.  
Step four: add item requirement.  
Testing time! 
Holy shit, it worked on the first try. I feel somewhat...competent. (That's gonna bite me in the ass later.)  
Knew it. Item displays properly, but doesn't update the xp / day.
Fix: needed to add a line of code to the addMultipliers() function. Seems obvious in retrospect haha. Luckily it took four minutes to fix. Yay!
Also rearranged the display order of items for Rag Clothing to pop up before Book.  

First item added. First mod complete. Feels good mayne. 
PS. Also added a dev mode to the code with a single-variable trigger to influence a few skill modifiers and the game speed. 
Should help test long runs. 

6/3/2021  
I want to flesh out the beggar job by adding interesting items and story content. Being a beggar is tough work,
and the more the player feels the hardship of begging the more they will appreciate the achievement of moving up in society.
My first step is to add an item. This is simple enough to not be daunting on Day Two of this project, but complex enough to touch most
major game systems and get me acquainted with the layout and architecture of the game logic. Story-wise, I'm playing around with the idea of 
item series. To progress as a beggar, one may strive for better clothing, better food, better physical appearance, etc. Perhaps the first few items could be
basic neccessities, like rag clothing, a source of drinking water, or other crucial things most idle players take for granted!   

Item One: Tattered Clothes
Where do items present themselves throughout the codebase?  
Around line 214 we see:
    <div class="tab" id="shop">
        <table id="itemTable" class="w3-table w3-bordered">
        </table>
    </div>
so using the HTML templates that live just above the itemTable, it looks like the table is built within main.js and injected 
into this containing div with id="shop". Kinda reminds me of React, but ihtasham did it himself. Sidenote, porting this to React would probably
be a good future task. Lots of render calls would be reduced as well. Anyways, back to items...  
I see where items will end up on the HTML side of things, so now it's time to dive into classes.js and take a look at the class hierarchy.  
Item is a single-level class. Item objects have three basic methods: getEffect, getEffectDescription, and getExpense. getEffect  
refers to the item's numerical power level (1, 1.5, 2.221, etc). getEffectDescription builds a string to display the effect data for the UI.  
Lastly, getExpense calculates the item cost based off of global expense modifiers, as changed by Bargaining and Evil skills. Simple enough.  
Now let's take a look at how items are used in main.js  

Item base stats are contained in the constant object itemBaseData defined near the top of main.js  
Items are defined as a key:value pair string:{object} where object holds item properties name, expense, and effect.  
A little further down we have another constant object itemCategories. This splits all items into two categories, living spaces and actual items (defined as "Properties" and "Misc" respectively. Using "Properties" as a name confused me for a second, and "misc" seems like a subcategory of item rather than a good descriptor of all items. Will need to think of clearer names down the road.). I'm assuming this is used for the different treatment of items further down the file. Wonder why ihtasham didn't split the concepts into their own classes and extend a base class with much of the core functionality. Might be something to look into if I'm hunting for things to refactor. Anyways, back to items...  

Item tooltips are also stored in a const object named tooltips.  
addMultipliers is used to apply all item and job multipliers.
function createRow() displays all of Jobs, Skills, and Items by building their row content. This will be important.  
function updateItemRows()  
function createItemData() seems to assume if an item contains a "happiness" property, it must be a "Property" like house. This means any item I want to add that'll affect  
happiness will likely require a rewrite of this function.   



6/2/2021  
Cloned repo, configured Git, got a copy of the game running on my local machine. Woo!
One hour later...
Doh! For some reason, the sidebar's progress bars are not displaying.
I have made zero code changes so far. Time to investigate...
Using Chrome's Devtools, I see that the span containing the progress bars (quickTaskDisplay) has a class of "hidden".
Oh weird. So I went to ihtasham42's github.io version, and the quick dislay is indeed intended to be hidden. Literally never noticed this behavior before.
Not sure how I feel about this. May modify in later versions to display immediately, as it's pretty convenient. Design-wise, idle games always benefit from
visible progress bars on startup. (this may be a rare opinion. Who knows.)
