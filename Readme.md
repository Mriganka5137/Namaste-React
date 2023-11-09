# Namasete React

- The repository for namaste react course

## Notes

### ~ vs ^

- ~ means that the version should be greater than or equal to the specified version.
- ^ means that the version should be equal to the specified version or greater, but less than the next significant release above the specified version.

### package-lock.json

- The purpose of the package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the future.
- The integrity hash useful for security purposes. It ensures that the package has not been tampered with since the package was published.

### node_modules

- The node_modules folder is where npm stores all the packages that it installs.
- The node_modules folder is not committed to the repository. It is ignored by default.

### Transitive dependencies

- A transitive dependency is a dependency of a dependency.
- For example, if package A depends on package B, and package B depends on package C, then package C is a transitive dependency of package A.

### npx

- npx executes a command from a temporary directory. It is used to execute packages without installing them globally.

- Normal Browser Scripts cannot use ES6 modules

- ES6 modules are not supported in browsers yet. So, we need to use a bundler like webpack to bundle the modules into a single file that can be used in the browser.
- or implicitly mention type="module" in script tag

### Parcel

- Dev Build
- Local Server
- Hot Module Replacement
- File Watching Algorithm - written in C++
- Faster Builds because of caching
- Image Optimization
- Minification
- Bundling
- Compression
- Code Splitting
- Consistent Hashing
- Differntial Bundling - To support older browsers
- Diagnostic Messages
- Error Suggestions
- HTTPs
- Tree Shaking - Remove unused code
- Differnet Dev and Prod Builds

### JSX

- JSX is not HTML in JS
- It is HTML like or XML like
- Attributes are camelCase

### React Component

- Class Based Component
- Functional Component

### UseState

- Whenever the state variable changes in React component, the component re-renders.
- useState returns an array with two elements. The first element is the state variable and the second element is a function to update the state variable.

### Reconcialiation Algorithm (React Fiber)

- React compares the virtual DOM and the real DOM and only updates the real DOM if there is a difference.
- Virtual DOM is a copy or representation of the real DOM in memory.
- React uses a diffing algorithm to find the difference between the virtual DOM and the real DOM.
- Diff Algorithm finds the minimum number of steps to update the real DOM.

- When state variables update, react triggers a reconciliation process. It compares the virtual DOM and the real DOM and only updates the real DOM if there is a difference.

### useEffect

- useEffect is a hook that allows us to perform side effects in a functional component.
- The callback function inside the useEffect hook is called after the component is rendered. It is called after every render.
- if no dependency array is present, the callback function is called after every render.
- If the dependency array is empty, the callback function is called only once after the initial render.
- If the dependency array is not empty, the callback function is called after the initial render and after every render where the value of the dependency array changes.

### Routing

- 1. Client Side Routing
- 2. Server Side Routing

### Routing using React Router Dom

1. createBrowserRouter

   - create the rouitng layout

2. RouterProvider

   - provide the routing layout to the app

3. Use Link to navigate to different routes

4. use <Outlet/> to replace the changing components inside the children

5. Dynamic Routing

### Class Based Components

1.  Lifecycle Methods of a Class Based Component

    - Constructor
    - Render
    - ComponentDidMount --- Make API Calls

### Lifecycle Methods of a React Component

1.  Parent Constructor
2.  Parent Render
3.  First child Constructor
4.  First child Render
5.  Second child Constructor
6.  Second child Render

- DOM UPDATED HERE(in single batch)

7.  First child ComponentDidMount
8.  Second child ComponentDidMount
9.  Parent ComponentDidMount

### ComponentDidMount

- ComponentDidMount is called after the component is rendered for the first time.
- It is called only once after the initial render.

### ComponentDidUpdate

- ComponentDidUpdate is called after the component is rendered for the first time and after every render where the value of the dependency array changes.

### ComponentWillUnmount

- ComponentWillUnmount is called before the component is removed from the DOM.

### Dynamic Bundling

- Chunking
- Code Splitting
- Lazy Loading

- Used to reduce the size of the bundle.js file

### REDUX

- When we click on a button, we dispatch an action. The action is dispatched to the reducer. The reducer updates the state. This updates the slice of the redux store . The state is passed to the component. The component is re-rendered.

- Install @reduxjs/toolkit and react-redux
- Create a store using configureStore
- Connect the store to the app using Provider
- Create a slice using createSlice
- Add the slice to the store using configureStore
- Use the slice in the component using useSelector and useDispatch
- useSelector is used to get the state from the store
- useDispatch is used to dispatch an action to the store
- useSelector and useDispatch are hooks

### Testing

- Unit Testing
- Integration Testing
- End to End Testing

### Setting up Testing

1. Install react-testing-library
2. Install jest
3. Install babel dependencies
4. Configure babel.config.js
