import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './AppComponents/About';
import Dashbord from './AppComponents/Dashbord';

import LOG_IN from './AppComponents/login';
import NavBar from './AppComponents/NavBar';
import Notice from './AppComponents/Notice';
import StudentsUnion from './AppComponents/SU';
import SuCandidate from './AppComponents/SuCandidate';
import SuLeaders from './AppComponents/SuLeaders';
import SuVoting from './AppComponents/SuVoting';
import UserProfile from './AppComponents/UserProfile';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route
					path='/'
					exact
					element={<LOG_IN />}
				/>
				<Route
					path='/student-union'
					exact
					element={<StudentsUnion />}
				/>
				<Route
					path='/student-union/leader'
					exact
					element={<SuLeaders />}
				/>
				<Route
					path='/student-union/candidate'
					exact
					element={<SuCandidate />}
				/>
				<Route
					path='/student-union/voting'
					exact
					element={<SuVoting />}
				/>
				<Route
					path='/notice'
					exact
					element={<Notice />}
				/>
				<Route
					path='/about'
					exact
					element={<About />}
				/>
				<Route
					path='/profile'
					exact
					element={<UserProfile />}
				/>
			</Routes>
		</div>
	);
}

export default App;