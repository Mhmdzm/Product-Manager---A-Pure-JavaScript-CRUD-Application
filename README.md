# Product Manager - A Pure JavaScript CRUD Application

## Overview
Product Manager is a lightweight and interactive CRUD (Create, Read, Update, Delete) application built using Vanilla JavaScript, HTML, and CSS. It allows users to manage product information efficiently while showcasing the capabilities of pure JavaScript for dynamic web applications.

## Features
- **Add Products**: Input details such as title, price, tax, ads, discount, and category. Automatically calculates the total price.
- **Dynamic Creation**: Create multiple items at once using the count functionality.
- **Search**: Search products by title (default) or category.
- **Update Products**: Edit product details easily with data pre-filled into the input fields.
- **Delete Products**: 
  - Remove individual products using the "Delete" button.
  - Use the "Delete All" button to clear all products when multiple items exist.
- **Persistent Storage**: Utilizes **localStorage** to save product data, ensuring it remains intact after refreshing or quitting the project.
- **Interactive Table**: All products are dynamically displayed in a table with real-time updates.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the application.
- **JavaScript**: For dynamic functionalities and DOM manipulation.
- **LocalStorage**: To store and retrieve product data persistently.

## How It Works
1. **Create Products**: Fill in the form with product details and click "Create" to add them to the table. Use the count field to generate multiple copies at once.
2. **Update Products**: Click the "Update" button next to a product to modify its details. The "Create" button changes to "Update" during this process.
3. **Delete Products**: 
   - Remove individual products using the "Delete" button.
   - Use the "Delete All" button to clear all products when multiple items exist.
4. **Search Products**: Type in the search bar to filter by title or category.
5. **Persistent Data**: All changes are automatically saved in localStorage, so your data is retained even after refreshing the page or closing the browser.

