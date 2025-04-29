```markdown
# 🚀 Fake Data API

A complete test API for practicing full-stack app development with user authentication and note management functionalities, It is very use-full  for upcoming fronted-developers, Who are wants to mange api calls.

## 🌐 Base URL

```
https://fake-data-api-backend.vercel.app
```
## 🧑‍💻 User Authentication

### ✅ User Signup

`POST /v1/signup`

Registers a new user.

```ts
axios.post("https://fake-data-api-backend.vercel.app/v1/signup", {
  fullName: "I am new User",
  username: String(Date.now()),
  email: `test${Date.now()}@gmail.com`,
  password: "12345678"
});

### 🔐 User Login

`POST /v1/signin`

Logs in a user and returns an access token.

```ts
const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signin", {
  identifier: "yourUsernameOrEmail",
  password: "12345678"
}, {
  withCredentials: true
});
localstorage.setItem("auth", res.accessToken); // important do same thing.
```
### 🚪 User Logout

`GET /v1/logout`

Logs out the current user.

```ts
axios.get("https://fake-data-api-backend.vercel.app/v1/logout", {
  headers: {
    Authorization: `Bearer <your_token>`
  },
  withCredentials: true
});
```

---

### 🧾 Update User Profile

`POST /v1/updateprofile`

Updates user's profile info.

```ts
axios.post('https://fake-data-api-backend.vercel.app/v1/updateprofile', {
    fullname: `roni`,
    username: `ronit45`,
}, {headers: {Authorization: `Bearer ${token}`},});

```

---

### 🔁 Change Password

`POST /v1/changepassword`

Changes the password of the authenticated user.

```ts
axios.post("https://fake-data-api-backend.vercel.app/v1/changepassword", {
  newPassword: "12345678",
  oldPassword: "12345678"
}, {
  headers: {
    Authorization: `Bearer <your_token>`
  },
  withCredentials: true
});
```

---

### 👤 Get Current User

`GET /v1/getuser`

Retrieves the currently logged-in user's details.

```ts
axios.get("https://fake-data-api-backend.vercel.app/v1/getuser", {
  headers: {
    Authorization: `Bearer <your_token>`
  },
  withCredentials: true
});
```

---

### 🔍 Get User By ID

`GET /v1/getuser?id=<user_id>`

Fetches details of a user by their ID.

```ts
axios.get("https://fake-data-api-backend.vercel.app/v1/getuser?id=67d2469a0643aa381964fb7b", {
  withCredentials: true
});
```

---

## 📝 Notes Management

### 📚 Get All Notes

`GET /v1/getallnotes`

```ts
axios.get("https://fake-data-api-backend.vercel.app/v1/getallnotes");
```

---

### ➕ Create New Note

`POST /v1/demonote/create`

Creates a new note (requires authentication).

```ts
axios.post("https://fake-data-api-backend.vercel.app/v1/demonote/create", {
  content: `hey you store new data here ${Date.now()}`
}, {
  headers: {
    Authorization: `Bearer <your_token>`
  }
});
```

---

### 📒 Get Notes By User ID

`GET /v1/seeusernotes?id=<user_id>`

```ts
axios.get("https://fake-data-api-backend.vercel.app/v1/seeusernotes?id=67d2469a0643aa381964fb7b", {
  headers: {
    Authorization: `Bearer <your_token>`
  }
});
```

---

## 🧰 Utilities

### 🧹 Delete Note By ID *(Mock)*

```ts
return {
  statusCode: 201,
  message: "post deleted Successfully",
  flag: true
};
```

---

### ✏️ Update Note By ID *(Mock)*

```ts
return {
  statusCode: 201,
  message: "post updated Successfully",
  flag: true
};
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fakeDataApi.git
cd fakeDataApi
```

### 2. Install dependencies

```bash
cd frontend
npm install
```

### 3. Start the development server

```bash
npm run dev
```

---

## 🔐 CORS Configuration (Backend Side)

If you're hosting your own backend and want to allow anyone to use your API without CORS errors, you can add this to your Express server:

```ts
import cors from "cors";
app.use(cors({
  origin: "*",
  credentials: true
}));
```

---

## 📌 Notes

- All protected routes require a **Bearer Token** in the `Authorization` header.
- You must have cookies enabled for some routes (like `/signin`, `/logout`, etc.).
- Store token in `localStorage` or `cookies` for reuse across requests.

---

> This project is built with ❤️ by [Biswajit Das](https://github.com/your-username)

```

---

Let me know if you'd like me to generate a downloadable file or if you want me to help you push it to your GitHub repo.
