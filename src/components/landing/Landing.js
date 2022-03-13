import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Landing.css';
import Main from '../Main';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Profile from '../profile/Profile';
import AboutUs from '../aboutUs/AboutUs';
import LostOrFound from '../lostOrFound/LostOrFound';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import ErrorPage from '../error/ErrorPage'

function Landing(props) {
  const [width, setWidth] = useState('0%');
  const [showButton, setShowButton] = useState(true);
  const { user, isAuthenticated } = props.auth0;
  const setCookie = useCookies();

  useEffect(() => {
    if (user) {
      saveUser();
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  async function saveUser() {
    let userInfo = {
      username: user.nickname,
      email: user.email,
      password: user.email,
      role: 'editor',
    };

    await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER}/user-creation`,
      userInfo
    );

    let getUserInfo = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/user-info`
    );
    console.log('getUserInfo', getUserInfo);

    let currentUser = getUserInfo.data.filter(
      (email) => email.email === user.email
    );

    setCookie[1]('user', currentUser[0]);
  }

  const openSideNav = () => {
    setWidth('10%');
    setShowButton(false);
  };

  const closeSideNav = () => {
    setWidth('0%');
    setShowButton(true);
  };

	return (
		<div className='Landing'>
			<Header
				showButton={showButton}
				width={width}
				closeSideNav={closeSideNav}
				openSideNav={openSideNav}
			/>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route
					path='lostOrFound'
					element={
						isAuthenticated ? (
							<>
								<LostOrFound />
							</>
						) : (
							<ErrorPage />
						)
					}
				/>
				<Route
					path='profile'
					element={
						isAuthenticated ? (
							<>
								<Profile user={user} />
							</>
						) : (
							<ErrorPage />
						)
					}
				/>
				<Route path='about' element={<AboutUs />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default withAuth0(Landing);
