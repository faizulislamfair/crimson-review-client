import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RouteNotFound from './routes/RouteNotFound/RouteNotFound';
import MyReviews from './components/MyReviews/MyReviews';
import AddService from './components/AddService/AddService';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import Update from './components/Update/Update';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/')
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/service/:id',
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/service/${params.id}`);
          },
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: '/service/:id',
          loader: () => fetch(`http://localhost:5000/reviews`),
          element: <ServiceDetails></ServiceDetails>
        },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/my_reviews',
          loader: () => fetch('http://localhost:5000/reviews'),
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
        },
        {
          path: '/add_service',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        }
      ]
    },
    { path: '*', element: <RouteNotFound></RouteNotFound> }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
