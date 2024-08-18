
# Folka Market

Folka Marketplace is an online platform where users can buy and sell video games. The project offers CRUD (Create, Read, Update, Delete) functionality, allowing users to list games for sale, browse available games, and manage their listings. It also integrates Clerk for user profile management, enabling secure user authentication, profile creation, and management.

## Demo
https://folka-market.vercel.app/
## Usage/Examples

Purchase items through stripe.

Email: test@gmail.com\
Card Number: 4242 4242 4242 4242\
Exp Date: 02 / 42\
CVC: 424\
Country or Region: United Kingdom\
Postcode: 424242


![App Screenshot](https://raw.githubusercontent.com/Folka2134/folka-market/main/public/assets/images/stripe_test.jpg)


## Features

- CRUD functionality
- Purchase through stripe
- Retrieve orders from Mongodb


## Run Locally

Clone the project

```bash
  git clone https://github.com/Folka2134/folka-market
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Create .env.local

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[CLERK_NEXT_SECRET]
CLERK_SECRET_KEY=[CLERK_AUTHENTICATION_SECRET]

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URI=[MONGODB_URI]

WEBHOOK_SECRET=[CLERK_WEBHOOK_SECRET]

UPLOADTHING_SECRET=[UPLOADTHING_SECRET]
UPLOADTHING_APP_ID= [UPLOADTHING_ID]

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[STRIPE_PUBLIC_KEY]
STRIPE_SECRET_KEY=[STRIPE_SECRET_KEY]
STRIPE_WEBHOOK_SECRET=[STRIPE_WEBHOOK_SECRET]

NEXT_PUBLIC_SERVER_URL=[PUBLIC_SERVER_URL] 
```
