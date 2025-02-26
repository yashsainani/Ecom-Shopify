# React App README

## Project Overview
This React app implements a simple e-commerce platform where users can log in, browse products, view product details, manage users, and navigate through different pages. The app uses Redux for state management and integrates with several external APIs to fetch product and user data.

## Features
- **Login Page**: User authentication where credentials are validated before access to the app.
- **Home Page**: Displays basic information and serves as the entry point after successful login.
- **Product Page**: Displays categories of products with the option to view products under each category.
- **Product Details Page**: Displays detailed information about a specific product.
- **User Management Page**: Lists users with options to filter by gender, update, and delete users.
- **Contact Us Page**: Displays a contact page.
- **Navigation Bar**: Provides links to Home, Products, Users, Contact Us, and Logout.

## APIs Used
- **Product Categories API**: [https://fakestoreapi.com/products/categories](https://fakestoreapi.com/products/categories)
- **Product Data API**:
  - Electronics: [https://fakestoreapi.com/products/category/electronics](https://fakestoreapi.com/products/category/electronics)
  - Jewellery: [https://fakestoreapi.com/products/category/jewelery](https://fakestoreapi.com/products/category/jewelery)
  - Men's Clothing: [https://fakestoreapi.com/products/category/men's clothing](https://fakestoreapi.com/products/category/men%27s%20clothing)
  - Women's Clothing: [https://fakestoreapi.com/products/category/women's clothing](https://fakestoreapi.com/products/category/women%27s%20clothing)
- **User Data API**: [https://randomuser.me/api/?results=20](https://randomuser.me/api/?results=20)

## Folder Structure

```src/
    ├── components/ 
    │ ├── Home.js 
    │ ├── Product.js 
    │ ├── User.js 
    │ ├── ContactUs.js 
    │ ├── Login.js 
    │ ├── ProductDetails.js 
    │ ├── Electronic.js 
    │ ├── Jewellery.js 
    │ ├── MensClothing.js 
    │ ├── WomensClothing.js 
    │ └── Nav.js 
    │ ├── redux/ 
    │ ├── actions/ 
    │ 
    │ └── userActions.js 
    │ ├── reducers/ 
    │ 
    │ └── userReducer.js 
    │ ├── store.js 
    │ └── types.js 
    │ ├── App.js ├── index.js └──```


## How to Run the Application

### Prerequisites
- Node.js (v14.x or later)
- npm (or yarn)

### Step-by-Step Guide

1. **Clone the repository**:

2. **Install dependencies**:

3. **Start the development server**:

4. **Navigate to the app**:
Open your browser and go to `http://localhost:3000`.

## Detailed Description of Components

### 1. **Login Component**
- This component contains a login form with fields for username and password.
- On clicking the "Login" button, it validates the credentials and either redirects to the Home Page or shows an alert for invalid credentials.

### 2. **Home Component**
- Displays a welcome message and basic information after successful login.

### 3. **Product Component**
- Fetches the list of product categories from the API (`https://fakestoreapi.com/products/categories`).
- On selecting a category, the right panel displays a list of products for that category. By default, it shows electronics products.

### 4. **Product Details Component**
- Displays the detailed information of a product (e.g., title, description, price) fetched from the Redux store.

### 5. **User Component**
- Fetches a list of users from the API (`https://randomuser.me/api/?results=20`).
- Users can be filtered by gender (Male, Female, or All).
- Provides functionality to delete or update user details.

### 6. **Contact Us Component**
- Displays contact information and a simple form for inquiries.

### 7. **Nav Component**
- Contains links to Home, Products, Users, Contact Us, and Logout.
- The Logout button logs the user out and redirects to the Login screen.

## Redux Implementation

- **Actions**:
- `userActions.js`: Contains action creators to fetch user data, update user data, and delete users.

- **Reducers**:
- `userReducer.js`: Manages user-related state, including filtering users by gender and updating user data.

- **Store**:
- `store.js`: Combines reducers and sets up the Redux store.

- **Types**:
- `types.js`: Defines constants for the action types used in the app.

## Deployment
This project is ready for deployment and can be deployed using services like:
- **Netlify**
- **Vercel**
- **GitHub Pages**

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- The product and user data APIs used in this project are provided by [Fakestore API](https://fakestoreapi.com) and [RandomUser API](https://randomuser.me).