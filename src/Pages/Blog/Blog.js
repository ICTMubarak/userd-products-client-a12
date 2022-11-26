import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="text-left">
                <h1 class="text-center underline decoration-wavy">Welcome to our Blog</h1>
                <br />
                <h5>Question No-1 What are the different ways to manage a state in a React application?</h5>
                <p>Answer: There are four main ways to manage a state in a React application.
<br />
1. Local state
2. Global state
3. Server state
4. URL state
<br />
Local state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it. useState is the first tool you should reach for to manage state in your components.
<br />
Global state: Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. we manage it with useState and useEffect.
<br />
Server state: Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
<br />
URL state: URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. If you are using React Router, you can get all the information you need using useHistory or useLocation.</p>
                <br /><br />


                <h5>Question No-2 How does prototypical inheritance work?</h5>
                <p>Answer: 
The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the (Prototype) of an object, we use Object.getPrototypeOf and Object.</p>
                <br />
                <h5>Question No-3 What is a unit test? Why should we write unit tests?</h5>
                <p>Answer: JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. These unit tests are then organized in the test suite.
<br />
Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.</p>
                <br />
                <h5>Question No-4 React vs. Angular vs. Vue?</h5>
                <p>Answer: 
Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                <br />
            </div>
        </div>
    );
};

export default Blog;