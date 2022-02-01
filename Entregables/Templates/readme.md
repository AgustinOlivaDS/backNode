# Welcome to Template Engines examples

Into this repository you'll find three servers, each of them implements one Template Engine, those are **Pug, EJS and HandleBars**. All servers are for the same reazon, provide a simple form to create new products and usa a template to show the list of products that you create. They use the **API** from the previous delivery.

## Structure

All servers have the same structure, they start with the **index.js** file, in the **public** folder you have an statci html with the form to create new products, in the **src** folder relays the API to manage the products and in the **views** folder you'll find the templates, where the magic happends! 

## Run servers

To run the servers in developer mode use the command **npm run dev**, that implements nodemon.
And for production simply use **node index.js**

## Conclution

In my opinion, EJS is the best template engine because you dont have to lern new languajes like PUG and HandleBars use more lines of code. 
With EJS you keep the html as simple as possible and you add som javascript code to handle the data (Old fashion).
The ranking ends like this:

|POSITION        |TEMPLATE ENGINE                |
|----------------|-------------------------------|
|       1        | **EJS**                       |
|       2        | **HandleBars**                |
|       3        | **Pug**                       |
