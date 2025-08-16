# 🧾 Expense Tracker Web Application

![Expense Tracker Banner](https://via.placeholder.com/1200x400?text=Expense+Tracker+App+Banner)

A modern, responsive **Expense Tracker** web application built with **Next.js** and **MongoDB** (without Mongoose). Keep track of your expenses, update them easily, and visualize your spending habits.

---

## 🔥 Features

* Add, update, and delete expenses
* Filter expenses by category
* Calculate total expenses automatically
* Responsive UI with Tailwind CSS
* Modal-based expense update
* Server-side data fetching with Next.js `server components`
* Beautiful banner and footer

---

## 🛠 Tech Stack

* **Frontend:** Next.js 13+, React, Tailwind CSS
* **Backend:** Next.js API Routes
* **Database:** MongoDB (No Mongoose)
* **Forms & Validation:** React Hook Form
* **HTTP Requests:** Axios
* **Notifications:** react-hot-toast

---

## 🚀 Live Demo

[Visit Demo](https://your-demo-link.com)

---

## 💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/expenseDB?retryWrites=true&w=majority
```

Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🗂 Project Structure

```
.
├── app/
│   ├── components/        # All reusable components
│   ├── page.js            # Main pages
│   └── api/               # API routes for CRUD operations
├── lib/
│   └── dbConnect.js       # MongoDB connection
├── public/                # Static files like images
├── styles/                # Tailwind CSS files
├── package.json
└── README.md
```

---

## 📝 Database Setup

1. Create a MongoDB cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database named `expenseDB`
3. Create a collection named `expenses`
4. Make sure your `.env.local` file points to this database

---

## ⚙ Scripts

* `npm run dev` – Run development server
* `npm run build` – Build for production
* `npm start` – Run production build

---

## 🎯 Usage

1. Open the app in your browser
2. Add new expenses with title, amount, category, and date
3. See total expenses on the main page
4. Update or delete any expense using the modal
5. Filter expenses by category using the search bar

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📫 Contact

For questions or suggestions:

* Email: [mrapuroy1609@gmail.com](mrapuroy1609@gmail.com)
* GitHub: [ActiveShayun](https://github.com/ActiveShayun)
