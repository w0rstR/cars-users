import {Route, Routes} from 'react-router-dom';

import './App.css';
import Layout from './Components/Layout/Layout';
import CarsPage from './pages/CarPage/CarPage';
import UserPage from './pages/UserPage/UserPage';
import CommentDetailsPage from './pages/CommentDetailsPage/CommentDetailsPage';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';

function App() {
    return (

        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'users/details/:id'} element={<UserDetailsPage/>}/>
                    <Route path={'post/:id/comments'} element={<CommentDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
