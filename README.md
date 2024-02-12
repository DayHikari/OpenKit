# OpenKit Tech Test
Coding test for the OpenKit Full Stack Software Developer position.

## Installation
To install this repository on your local machine, fork or clone the repository from GitHub. To do this, you can run:

```
git clone https://github.com/DayHikari/openkit.git
```

Or to fork, you can press the 'fork' button on this page, and follow the on-screen instructions.

Once you have access to this repository on your local machine, change directory into the right folder:

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

You can also use following if you wish to modify the code:

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
