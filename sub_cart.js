"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Evelyn Duarte
   Date: 04.05.19 

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by the customer.

*/
//the setupCart function will load when page loads 
window.onload = setupCart
//The variable setupCart contains the collection of addButton class. The for loop is equal to the function with the onclick event.
function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}
//The function additem has 5 variables that have their respected content which was later used. The for loop is the element node of cartBox. Within the for loop, i put in an if statements that states increases the value of first element. 
function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      for (var n = cartBox.firstChild; n = n.nextSibling; n !== null) {
            if (n.id === foodID) {
                  duplicateOrder = true;
                  n.firstChild.textContent++;
                  break;
            }

      }
      //Appends the foodDescription to cartBox as a new product order.
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }
}