# ShortFlix - A Modern URL Shortener

ShortFlix is an advanced, open-source URL shortener that allows users to shorten links, track analytics, and customize short URLs. Built with modern web technologies, it offers an intuitive interface and robust API for developers.

## 🚀 Features

✅ Free & Open Source  
✅ Custom short links  
✅ URL expiration & analytics  
✅ User authentication (registration & login)  
✅ API for developers  
✅ Ad integration for monetization  
✅ Custom branding & theming options  

---

## 🛠 Installation & Setup

### 1⃣ Clone the Repository
```bash
git clone https://github.com/HAmmadsiamil007/ShortFlix.git
cd ShortFlix
git pull origin main
```

### 2⃣ Install Dependencies
Ensure you have **Node.js (v16+)** and **npm** installed.
```bash
npm install
```

### 3⃣ Configure Environment Variables
Rename `.env.example` to `.env` and update the settings:
```plaintext
PORT=3000
SITE_NAME=ShortFlix
DEFAULT_DOMAIN=yourdomain.com
JWT_SECRET=your-random-secret
DB_CLIENT=better-sqlite3
DB_FILENAME=./db/data.sqlite
```

### 4⃣ Run Database Migrations
```bash
npx knex migrate:latest
```

### 5⃣ Start the Development Server
```bash
npm run dev
```
> The app will be available at **http://localhost:3000**

### 6⃣ (Optional) Build for Production
```bash
npm run build
npm start
```

---

## 🖥 Deployment
ShortFlix can be deployed on platforms like **Netlify**, **Vercel**, or **DigitalOcean**.

### Deploy to Netlify
1. Push your repo to **GitHub**.
2. Connect it to **Netlify**.
3. Set up environment variables in Netlify's dashboard.
4. Deploy & enjoy your URL shortener!

---

## 📚 API Usage
ShortFlix offers a RESTful API to create and manage shortened links.

### Create a Short Link
```bash
POST /api/url
Content-Type: application/json
{
  "destination": "https://example.com",
  "custom": "myshortlink"
}
```

### Get Link Stats
```bash
GET /api/stats/:shortCode
```

For full API documentation, visit **yourdomain.com/docs** (after hosting).

---

## 🔒 Security & Privacy
ShortFlix provides:
- **JWT Authentication** for user accounts
- **Rate limiting** to prevent spam
- **Custom domain support**

---

## 🐜 License
ShortFlix is licensed under the **MIT License**.

---

## ❤️ Contribute
Pull requests & feature suggestions are welcome!

### Contributors:
- [Hammad Ismail](https://github.com/HAmmadsiamil007)

---

## 📧 Support & Contact
For questions or issues, contact **ismailhammad645@gmail.com**.

---

> **ShortFlix** - The Next-Gen URL Shortener 🔗✨
