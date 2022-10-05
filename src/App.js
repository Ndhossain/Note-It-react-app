import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Notes from './components/Pages/Notes/Notes';

function App() {
    const router = createBrowserRouter([
        { path: '/', element: <Home /> },
        { path: '/notes', element: <Notes /> },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
