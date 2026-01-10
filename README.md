## e-commerce Application

ShoppyGlobe is an e-commerce web application created with React and Vite, designed for users to easily navigate products, access detailed information, search for items, add them to a cart, and execute a seamless checkout process. The application employs Redux Toolkit to manage global state, allowing instantaneous updates to cart contents, product quantities, and search states throughout the application without requiring page reloads, thereby enhancing the overall user experience.

## Features

- Starting page displaying the product list
- Allows user to search for a product
- Lets user view more details about the product by clicking on product card
- Allows addition of product to cart
- Shows error when user tries to search for a non existing route
- Global state management with Redux
- Clean and user-friendly UI

## Technology used

- React
- Vite
- React router dom
- Redux toolkit, react-redux
- CSS
- Javascript

## How to run the project

1. Clone the repository(if using git and github) or extract files (if using zip file)

2. Navigate to the shoppyglobe folder
   cd shoppyglobe

3. Install dependencies (npm uses package-lock.json)
   npm install

4. Run the application
   npm run dev

5. Open browser and go to the link provided by vite

## Flow of application

The application interface consists of a ProductList page featuring various products. Users can click on a product to view its details, leading them to the ProductDetail page, which displays a description of product based on their selection. A search bar allows users to find specific products on productList page. Each product card includes a "Add to cart" option for adding the product to card, using ProductItem component. Cart page presents comprehensive details about the chosen product. Additionally, users have the functionality to add or remove item from cart. Upon checkout, the purchase details is shown to users and users are redirected back to the ProductList page.

## Author

Samudyatha Karanth

## GitHub link

https://github.com/Samm005/e-commerce_App
