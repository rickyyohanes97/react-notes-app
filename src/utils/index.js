const getInitialData = () => ([
  {
    id: 1,
    title: 'Babel',
    body: 'Babel is an open-source JavaScript compiler.',
    createdAt: '2025-04-01T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: 'Functional Component',
    body: 'Functional component is a type of React component that is created using a JavaScript function. For a JavaScript function to be considered a component, it must return a React element and be called like a React component.',
    createdAt: '2025-04-02T04:27:34.572Z',
    archived: false,
  },
  {
    id: 3,
    title: 'Modularization',
    body: 'In the context of JavaScript programming, modularization is a technique for breaking down or using code in JavaScript files separately based on their respective responsibilities.',
    createdAt: '2025-04-03T04:27:34.572Z',
    archived: false,
  },
  {
    id: 4,
    title: 'Lifecycle',
    body: 'In the context of React component, lifecycle is a collection of methods that represent the life cycle of a component, starting from when the component is created (constructor), rendered (render), mounted (componentDidMount), and so on.',
    createdAt: '2025-04-08T04:27:34.572Z',
    archived: false,
  },
  {
    id: 5,
    title: 'ESM',
    body: 'ESM (ECMAScript Module) is the standard format for modularizing JavaScript code.',
    createdAt: '2025-05-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 6,
    title: 'Module Bundler',
    createdAt: '2025-05-20T04:27:34.572Z',
    archived: false,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(date).toLocaleDateString('en-EN', options);
};

export { getInitialData, showFormattedDate };
