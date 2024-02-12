# OpenKit Tech Test
Coding test for the OpenKit Full Stack Software Developer position.

## Installation
To install this repository on your local machine, fork or clone the repository from GitHub. To do this, you can run:

```
git clone https://github.com/DayHikari/openkit.git
```

Or to fork, you can press the 'fork' button on this page, and follow the on-screen instructions.

Once you have access to this repository on your local machine, change the directory into the correct folder:

```
cd openkit
```

Once you are inside this directory, run:

```
npm i
```

This will install all the necessary dependencies.

This project uses ES6 import and export syntax.

## Scripts and Commands

To run this project locally (leveraging port 3000 on localhost), run:

```
npm run build
```

and once complete run:

```
npm run start
```

You can also use the following if you wish to modify the code:

```
npm run dev
```

## Environment

This project has 3 required environment variables:
```
NEXT_PUBLIC_API_KEY
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

The API_KEY can be obtained from Harvard Museum using the link below:
```
https://harvardartmuseums.org/collections/api
```

Whilst SUPABASE_URL and SUPABASE_ANON_KEY will need to be created in SupaBase using the link below:
```
https://supabase.com/
```

## Retrospective

<p>
Although NextJS is a great framework, it may have been the wrong choice for this app. If I could redo this app I would have instead opted for a single-page application instead of a multi-page app. The Server Side Rendering of NextJS caused some hydration issues during the development which took time and a change of plan to rectify. If the app had been a single page app the use of state would have been easier given the timeframe and would have allowed the app to be developed quicker. 
</p>
<p>
Being a single-page application would have also made it easier to share state between components which, although wasn't an issue up to the point completed, would have made the Artwork page more easily and quickly developed. 
</p>
<p>
It has been a while since I used a third-party API in Next so it was a good reminder of how to send requests via the fetch method to ensure the correct data is returned. When previously creating forms I have used state to save inputted data however I decided to use the "new FormData()" method to reduce the number of states to manage.
</p>
<p>
I have learned that deeper planning and contemplation are needed when setting out to create an app when under a tight deadline. If I had contemplated the different component interactions more carefully I would have changed my plan and been able to implement more within the given time. This is something I will need to be careful of going forward.
</p>

## Planning

### Tech Stack
- NextJS - Can leverage the App Router for multi-page layout. 
- SupaBase - Use of authentication methods and SQL databases which allows easy combination for policy implementations
- TailwindCSS - Simplify styling and minimise the number of files.

### Design
- Minimalist design
- White background
- Black text
- Brown accents (Amber-900 in TailwindCSS, Hex: #7C2D12)
- Responsive

### Layout
- Header:
  - [x] Home page navigation link
  - [x] Login page navigation link
  - [ ] After login, the login page link changes to the profile page link

- Home page:
  - [x] Search bar centered at top 
  - [x] Search options initially of Artist or Title. Use Select tag 
  - [x] Input (text) tag for search input. 
    - Note: Artist names but be separated by hyphens, titles can use space. 
  - [x] Search button with accent colouring to send the request. 
  - [x] Logic required to determine if artist or title (ternary operator dependent on selected option). 
  - [x] Random gallery loaded immediately. SSR.
  - [x] Gallery set to flex to allow responsiveness.
  - [x] Article component for each gallery item (10 items).
  - [x] Set width/height to be consistent between articles.
  - [x] Initial gallery displays image, artist, title and date.
  - [x] Use title as alt text.
  - [x] Logic needed in case values are null.
  - [x] Placeholder image for the alternative.
  - [x] Image sized to 300x300.
  - [ ] Image/article hover effect to zoom/expand the size. 
  - [ ] Whole article as a navigation link to Artwork page. 
  - [ ] Add button to save to database when logged in. 
  - [ ] Add button to either direct to login page or prompt user if not logged in. 

- Login page: 
  - [x] Minimalist page.
  - [x] Form tag.
  - [x] Email and password input for login.
  - [x] Email as text input.
  - [x] Password as password input.
  - [x] Email, password and confirm password for sign-up.
  - [x] Confirm password as password input.
  - [x] Login submit button.
  - [x] State to determine if sign-up selected.
  - [x] Signup button changes state.
  - [x] Cancel button returns to login layout.
  - [x] SupaBase API for Sign-up and Login.
  - [x] Logic to determine which API to use dependent on sign-up state.
  - [ ] Move to the profile page upon successful login. 

- Profile page:
  - [ ] Fetch user collection data from SupaBase. 
  - [ ] Similar layout to gallery section on the homepage. 
  - [ ] Reuse article component for loading gallery. 
  - [ ] Addition delete button required to remove from the database. 
  - [ ] Policy to only allow access based on signed-in email address. 
  - [ ] Initial load of 10 articles. 
  - [ ] More/less buttons for loaded articles. 

- Artwork page:
  - [ ] Load individual gallery articles with more details. 
  - [ ] Similar layout to article component. 
  - [ ] Larger image with correct aspect ratio. 
  - [ ] Image scaled dependent on screen size. 
  - [ ] Further details displayed including:
    - [ ] Description. 
    - [ ] Period. 
    - [ ] Division. 
    - [ ] Classification. 
    - [ ] Technique used. 
    - [ ] Department. 
    - [ ] URL(Harvard website). 

### Database Schema:

#### *Collection table:*

Collection_ID | Email
:---: | :---:
UUID (p) | User email

#### *Article table:*

ID |Title | Artist | Date | Image URL | Description| Period | Division | 
:---: |:---: | :---: | :---: | :---: | :---: | :---: | :---: |
Int (p) | Text | Text | Text | Text | Text | Text | Text |

 Classification | Technique | Department | URL | Collection_ID |
  :---: | :---: | :---: | :---: | :---: |
 Text | Text | Text | Text | UUID (f)
