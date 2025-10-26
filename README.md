
# 📩 Walluxe REST API
A simple REST API built with Node.js, Express, and MongoDB for walluxe project. Basically this is a media wall and feature wall installation service platform.

### 🚀 Features

    Project API :
        - Create project
        - Get all projects
        - Get single project
        - Get recent projects
        - Update project
        - Delete project

    Team API :
        - Create team member
        - Get team members
        - Get single team member
        - Update team member 
        - Delete team member

    Service Area API :
        - Create service area
        - Get service areas
        - Get single service area
        - Update service area
        - Delete service area

    Accordion API :
        - Create accordion
        - Get all accordion
        - Get single accordion
        - Update accordion
        - Delete accordion

    Subscribe API :
        - Add new subscriber
        - Get all subscriber

    Payment API :
        - Init payment
        - Success payment
        - fail payment
        - cancel   payment

    Contact API :
        - create message



### ⚙️ Installation

##### 1. Clone the repo  
```bash
git clone https://github.com/mahim-dewan/walluxe-backend.git
```
##### 2. Install the dependencies
```bash
npm install
```
##### 3. Create .env file
```env
PORT= 5000

MONGO_URI= mongodb+srv://<username>:<password>@<cluster-url>/<database-name>

BASE_URL = "http://localhost:4000/api"

DOMAIN = "http://localhost:3000/" (frontend base url)


SMTP_USER = "example@gmail.com"
SMTP_PASS = "example#sd23"

ADMIN_EMAIL = "example@gmail.com"

// For payment integrate
STORE_ID = "example#5sd456s"
STORE_PASS = "example#s564df6@ssl"
```
##### 4. Run the server 
```bash 
npm run dev (Development Mode)

npm start (Production Mode)
```

## 📡 API Endpoints

### 🌐 Base URL
```http
http://localhost:4000/api
```

###  🔑 Subscribe

#### Create Subscriber
```http
POST: /subscribes

{
  "name" : "Mahim",
  "email": "mahimdewan@gmail.com"
}
```

#### Get All Subscribers
```http
GET: /subscribes
```

### 🔑 Project 

#### Create Project

```http
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

```http
GET: /projects
```
#### Get Single Project

```http
GET: /projects/id
```
#### Get Recent Projects

```http
GET: /projects/recent-projects
```

#### Update Project 
```http
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
```http
DELETE: /projects/id
```

###  🔑 Team Member
#### Create team member 
```http
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
```http
GET: /teams 
```

#### Get single team member 
```http
GET: /teams/id
```

#### Update a member 
```http
PUT: /teams/id 

{  
    "designation":"Lead Designer and Manager", 
    "phone":"01769552247"
}
```

#### Delete a member 
```http
DELETE: /teams/id
```

###  🔑 Service Area
#### Create a area 
```http
POST: /serviceAreas

{
    "name" : "Aminbazar"
}
```

#### Get all area 
```http
GET: /serviceAreas
```

#### Get single area 
```http
GET: /serviceAreas/id
```

#### Update a area 
```http
PUT: /serviceAreas/id

{
    "name" : "Dhaka"
}
```

#### Delete a area 
```http
DELETE: /serviceAreas/id
```

###  🔑 Accordion
#### Create a accordion
```http
POST: /accordions

{
    "title" : "Write a title here",
    "description" : "Write a description here"
}
```

#### Get all accordions
```http
GET: /accordions
```

#### Get single accordion
```http
GET: /accordions/id
```

#### Update a accordion
```http
PUT: /accordions/id

{
    "description" : "Updated description"
}
```

#### Delete a accordion
```http
DELETE: /accordions/id
```

###  🔑 Wall Package
#### Create a package 
```http
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
```http
GET: /packages
```
#### Get single package
```http
GET: /packages/id
```
#### Get feature wall packages
```http
GET: /packages/feature-walls
```
#### Get media wall packages
```http
GET: /packages/media-walls
```
###  🔑 Booking
#### Create booking
```http
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
```http
GET: /bookings
```
#### Get single booking 
```http
GET: /bookings/id
```

###  🔑 Payment
#### Initiate payment 
```http
POST: /payments/init

{
    "booking_id": "68f5146e6d8396ab57f62b2f",
    "package_id": "68e556d44e528ce83ea86fd5"
    
}
```

### 🔑 Contact 
#### Create contact message 
```http
POST: /contacts

{
    "name": "Mahim",
    "email": "mahimdewan79@gmail.com",
    "phone": "01568517556",
    "message": "Write a message",
}
```
