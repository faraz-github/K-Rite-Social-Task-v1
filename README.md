# K-Rite-Social-Task-v1

This project is a simple social app ( work in progress ).

## Features

- Landing Page
- User Management ( Register, Login, Logout )
- Cloud Storage ( Profile Pictures, Post Covers )
- JWT & Local Storage User Sessions
- Post New Feed ( Home Page )
- Comment on Posts

### Upcoming Features

- Friendship Management ( Add New Friend, Remove Friend )
- Profile Dashboard
- Chat ( Chat with friends in Realtime )
- Notifications ( Chat Message, New Friend Request )

## Tech Stack

**Client:** React, MaterialUI

**Server:** Node, Express

**Database:** MongoDB

**Cloud Storage:** Cloudinary

## Run Locally

Clone the project

```bash
  git clone https://github.com/faraz-github/K-Rite-Social-Task-v1.git
```

Go to the project directory

```bash
  cd K-Rite-Social-Task-v1
```

Install dependencies server

```bash
  npm install --save
```

Install dependencies client

```bash
  cd frontend
  npm install --save
```

Add `.env` file in the `root` with required environment variables.

**Start the server**

```bash
  cd K-Rite-Social-Task-v1
  npm run server
```

**Start the client**

```bash
  cd K-Rite-Social-Task-v1
  npm run client
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` `NODE_ENV` `MONGO_URI` `JWT_SECRET` `SALT_ROUNDS`

`CLOUD_NAME` `API_KEY` `API_SECRET`

## Design References

**Typography**

[Quicksand](https://fonts.google.com/specimen/Quicksand) by Google Fonts

**Colors**
| Name| Hex | Color |
|---|---|---|
| Light Blue |#A6D1E6 | ![#A6D1E6](https://via.placeholder.com/20/A6D1E6?text=+) |
| Razzmic Berry | #7F5283 | ![#7F5283](https://via.placeholder.com/20/7F5283?text=+) |
| Black Olive | #3D3C42 | ![#3D3C42](https://via.placeholder.com/20/3D3C42?text=+) |
| Milk | #FEFBF6 | ![#FEFBF6](https://via.placeholder.com/20/FEFBF6?text=+) |

## FAQ

#### Where can i get MONGO_URI ?

You can obtain your own MONGO_URI from the MongoDB website using your account.

#### Where can i get CLOUD_NAME, API_KEY, API_SECRET ?

These environment variables are from cloudinary, you can get them by creating an account on Cloudinary website.
