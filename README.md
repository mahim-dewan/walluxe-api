# 📩 Walluxe REST API

A scalable, secure, and production-ready **RESTful API** built with **Node.js, Express & MongoDB** for the **Walluxe – Media & Feature Wall Installation Service Platform**.  
This backend handles **projects, packages, bookings, payments, teams, service areas, subscriptions, and customer communications**.

---

## 📌 Table of Contents
- Features
- Tech Stack
- Folder Architecture
- Installation & Environment Variables
- API Endpoints


---

## 🚀 Features

- ✅ Project Management (CRUD)
- ✅ Team Member Management
- ✅ Service Area Management
- ✅ Wall Packages & Categories
- ✅ Booking System
- ✅ Secure Payment Integration
- ✅ Newsletter Subscription
- ✅ Contact & Inquiry System
- ✅ Modular REST API Architecture
- ✅ Centralized Error Handling
- ✅ Environment-based Configuration

---

## 🛠 Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- Mongoose

**Utilities**
- Nodemailer (SMTP)
- SSLCommerz / Payment Gateway
- dotenv
- CORS
- Morgan

**Deployment**
- Vercel / Render / VPS

---

## 🧱 Project Architecture

```bash
walluxe-backend/
│── package.json
│── package-lock.json
│── .env
│── .gitignore
│── README.md
│
│── src/
│   │── config/
│   │── controllers/
│   │── models/
│   │── routes/
│   │── middlewares/
│   │── services/
│   │── app.js
│   │── server.js

```

### ⚙️ Installation

##### 1. Clone the repo  
```bash
git clone https://github.com/mahim-dewan/walluxe-api.git
```
##### 2. Install the dependencies
```bash
cd walluxe-api
```
##### 3. Install the dependencies
```bash
npm install
```
##### 4. Create .env file
```env
PORT= 5000

MONGO_URI= mongodb+srv://<username>:<password>@<cluster-url>/<database-name>

BASE_URL = "http://localhost:4000/api"

DOMAIN = "http://localhost:3000/" (frontend base url)


SMTP_USER = "example@gmail.com"
SMTP_PASS = "example#sd23"

ADMIN_EMAIL = "example@gmail.com"

// For SSLCommerz payment integrate
STORE_ID = "example#5sd456s"
STORE_PASS = "example#s564df6@ssl"
```
##### 5. Run the server 
```bash 
npm run dev (Development Mode)

npm start (Production Mode)
```

## 📡 API Endpoints

### 🌐 Base URL
```bash
http://localhost:4000/api
```

###  🔑 Subscribe

#### Create Subscriber
```bash
POST: /subscribes

{
  "name" : "Mahim",
  "email": "mahimdewan@gmail.com"
}
```

#### Get All Subscribers
```bash
GET: /subscribes
```

### 🔑 Project 

#### Create Project

```bash
POST: /projects

{
    "title" : "Feature Wall",
    "subtitle" : "Write a subtitle here",
    "description" : "Write a description here",
    "price" : 12500,
    "category" : "Feature Wall",
    "location" : "Jigatola, Dhanmondi, Dhaka",
    "images" : ["https://cloudinary/placeholder/odsk43.png"],
    "features" : ["Standard color options", "2 years warranty"],
    "isPopular" : false

}
```

#### Get All Projects

```bash
GET: /projects
```
#### Get Single Project

```bash
GET: /projects/id
```
#### Get Recent Projects

```bash
GET: /projects/recent-projects
```

#### Update Project 
```bash
PUT: /projects/id

{
    "price" : 13000,
    "features" : [
            "Standard color options",
            "2 years warranty",
            "LED lighting"
        ]
}
```

#### Delete Project 
```bash
DELETE: /projects/id
```

###  🔑 Team Member
#### Create team member 
```bash
POST: /teams

{
    "name":"Yeamin Sagor",
    "designation":"Lead Designer",
    "email":"yeaminsagor520@gmail.com",
    "phone":"01869552247",
    "image": "https://placeholder/sodk4.jpg"
}
```

#### Get team members 
```bash
GET: /teams 
```

#### Get single team member 
```bash
GET: /teams/id
```

#### Update a member 
```bash
PUT: /teams/id 

{  
    "designation":"Lead Designer and Manager", 
    "phone":"01769552247"
}
```

#### Delete a member 
```bash
DELETE: /teams/id
```

###  🔑 Service Area
#### Create a area 
```bash
POST: /serviceAreas

{
    "name" : "Aminbazar"
}
```

#### Get all area 
```bash
GET: /serviceAreas
```

#### Get single area 
```bash
GET: /serviceAreas/id
```

#### Update a area 
```bash
PUT: /serviceAreas/id

{
    "name" : "Dhaka"
}
```

#### Delete a area 
```bash
DELETE: /serviceAreas/id
```

###  🔑 Accordion
#### Create a accordion
```bash
POST: /accordions

{
    "title" : "Write a title here",
    "description" : "Write a description here"
}
```

#### Get all accordions
```bash
GET: /accordions
```

#### Get single accordion
```bash
GET: /accordions/id
```

#### Update a accordion
```bash
PUT: /accordions/id

{
    "description" : "Updated description"
}
```

#### Delete a accordion
```bash
DELETE: /accordions/id
```

###  🔑 Wall Package
#### Create a package 
```bash
POST: /packages

{
  "title": "Luxury Media Wall Package",

  "subtitle": "High-end media wall with premium marble finishing and LED lighting.",

  "price": 3000,

  "category": "Media Wall",

  "features": ["3D visualization", "Smart LED integration", "Premium marble"],

  "materials": ["Italian Marble", "Gypsum Board"],

  "image": "https://example.com/main.jpg",

  "rating": { "average": 4.8, "count": 32 },

  "tags": ["media wall", "luxury", "interior design"]
}
```

#### Get all packages
```bash
GET: /packages
```
#### Get single package
```bash
GET: /packages/id
```
#### Get feature wall packages
```bash
GET: /packages/feature-walls
```
#### Get media wall packages
```bash
GET: /packages/media-walls
```
###  🔑 Booking
#### Create booking
```bash
POST: /bookings

{
    "packageId": "68dffe930da7efb26aab9574",
    "name": "Mahim Dewan",
    "email": "mahimdewan79@gmail.com",
    "phone": "01568517556",
    "area": "Gulsan",
    "house": "house no: 44",
    "startDate": "18-10-2025",
    "endDate": "20-10-2025",
    "wallSize": 240,
    "costPerSF": 100,
    "costTotal": 24000
}
```

#### Get all booking 
```bash
GET: /bookings
```
#### Get single booking 
```bash
GET: /bookings/id
```

###  🔑 Payment
#### Initiate payment 
```bash
POST: /payments/init

{
    "booking_id": "68f5146e6d8396ab57f62b2f",
    "package_id": "68e556d44e528ce83ea86fd5"
    
}
```

### 🔑 Contact 
#### Create contact message 
```bash
POST: /contacts

{
    "name": "Mahim",
    "email": "mahimdewan79@gmail.com",
    "phone": "01568517556",
    "message": "Write a message",
}
```

# 👤 Author

**Mahim Dewan**     
MERN Stack Developer  

🔗 GitHub: https://github.com/mahim-dewan   
🔗 Linkedin: https://www.linkedin.com/in/mahim-dewan79    
📧 Email: mahimdewan79@gmail.com  
🌱 Focus: Full-Stack Web Development (MERN), REST APIs, Scalable Backends  

Passionate about building clean, scalable, and high-performance web applications with modern JavaScript technologies.


## 🙏 Acknowledgments / Credits

Special thanks to all the open-source tools, libraries, and community resources that made this project possible.

- **Node.js & Express.js** for providing a fast and scalable backend framework  
- **MongoDB & Mongoose** for flexible and efficient database management  
- **Nodemailer & SMTP Services** for reliable email communication  
- **SSLCommerz / Payment Gateway** for secure online payment processing  
- **Open-source contributors & documentation authors** for continuous learning and support  

This project is also inspired by real-world service-based business requirements and aims to follow modern industry best practices.

