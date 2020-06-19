![](https://git.generalassemb.ly/bruno/assets/blob/master/products-react.gif)

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Products App

## Getting Started

1. Fork
2. Clone

## Learning Objectives

By the end of this, developers should be able to:

- Learn about a new component hierarchy that is more scalable
- Learn how to abstract axios api requests to a services file
- Implement react's `props.children` in a shared layout

Let's get started!

Notice the folder structure:

<img src="https://i.ibb.co/jTstLRz/Screen-Shot-2020-06-19-at-3-34-27-PM.png">

Let's start with the `screens` folder:

<img src="https://i.ibb.co/RgS5XfG/Screen-Shot-2020-06-19-at-3-40-19-PM.png">

The react components inside this folder represent all of the "screens" in our app. We could say we have two screens in our app: the screen that shows all the products (Products.jsx) and when you click on a product you get the screen with a specific product (ProductDetail.jsx)
> Remember: Our react app is a Single Page Application (SPA) that means it's all on one page... that is why we use the word "screens" and not "pages"

### Products Screen

<img src="https://i.ibb.co/R9p01ML/Screen-Shot-2020-06-19-at-3-45-04-PM.png">

### Product Detail Screen

<img src="https://i.ibb.co/MBMjRmt/Screen-Shot-2020-06-19-at-3-45-31-PM.png">

Ok cool. Now let's look to see what's inside our `components` folder:

<img src="https://i.ibb.co/M9GPBXM/Screen-Shot-2020-06-19-at-3-37-53-PM.png">

Here we have react components that are used to build our screens. Notice we have `Product`, `Search`, and `Sort` which are used in the `Products` component.

We also have a folder in our components folder called `shared`:

<img src="https://i.ibb.co/0X8RhK3/Screen-Shot-2020-06-19-at-3-58-35-PM.png">

This `shared` folder consists of reusable react components that are used in more than one component.

