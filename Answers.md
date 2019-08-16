# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    • ReactJS is basically an open-source JavaScript library which is used for building user interfaces specifically for single page        applications. It’s used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.

    • In React, instead of using regular JS for templating, you use JSX. JSX is simplified JS which allows HTML quoting and uses these      HTML tag syntax to render subcomponents. HTML syntax is processed into JS calls of React Framework. We can also write in regular      old JS.

2. What does it mean to think in react?

    • To not create too many components and not nest to deeply that it makes it a pain to pass down props, also not to create components    that are too specialized that they can become less versatile or reusable.

3. Describe state.

    • State is what allows you to create components that are dynamic and interactive.

4. Describe props.

    • Props are creation parameters in react. For example src for images, to control what image will be shown.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    • A side effect is anything that affects something outside the scope of the function being executed. 

    • useEffect hooks is how you sync effects in a React component to state and prop changes.