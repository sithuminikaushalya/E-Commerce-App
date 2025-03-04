# Ecommerce API

This is an Express.js-based API project using TypeScript and Prisma with a MySQL database (hosted locally via XAMPP).

## 📌 Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [XAMPP](https://www.apachefriends.org/) (for MySQL database)

## 🚀 Project Setup

Follow these steps to set up and run the project:

### 1️⃣ Initialize the Project
```sh
mkdir ecommerce
cd ecommerce
npm init -y
```

### 2️⃣ Setup TypeScript
```sh
npm i typescript --save-dev
npx tsc --init
npm i @types/node --save-dev
```

### 3️⃣ Create Project Structure
```sh
mkdir src
```

### 4️⃣ Install Express and Required Packages
```sh
npm i express
npm i @types/express --save-dev
npm i ts-node nodemon --save-dev
```

### 5️⃣ Setup Prisma ORM
```sh
npm i prisma @prisma/client
npx prisma init
```

### 6️⃣ Configure `.env` File
Update the `.env` file with the correct database connection string for MySQL in XAMPP:
```ini
DATABASE_URL="mysql://root:@localhost:3306/ecommerce"
```
*(If you set a password for MySQL, update it accordingly.)*

### 7️⃣ Run Prisma Migrations
```sh
npx prisma migrate dev --name CreateUserstable
```

## 🏃 Running the Project

To start the development server with **nodemon**:
```sh
npx nodemon src/index.ts
```

Or, if you prefer manually running it:
```sh
npx ts-node src/index.ts
```

## 📂 Project Structure
```
/ecommerce
│── src/              # Source code directory
│── prisma/           # Prisma schema & migrations
│── node_modules/     # Dependencies
│── .env              # Environment variables
│── package.json      # Project configuration
│── tsconfig.json     # TypeScript configuration
│── README.md         # Project documentation
```

## 🔧 Future Enhancements
- Add API routes for authentication and CRUD operations
- Implement middleware for request validation
- Deploy to a cloud service

Feel free to update this README as your project grows! 🚀

