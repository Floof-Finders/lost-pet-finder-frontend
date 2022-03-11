import './lostOrFound.css';
import LostPetModal from '../modals/LostPetModal';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import PetCards from './petCardTabs';

import { PetContext } from '../../context/petContext';
import PetModal from '../modals/PetModal';

let placeholder =
	'http://placehold.jp/3d4070/ffffff/150x50.png?text=Profile%20image';
export default function Landing(props) {
	let { petArray, setPetArray } = useContext(PetContext);
	const [showPetUpdate, setShowPetUpdate] = useState(false);

	const [showComment, setShowComment] = useState(false);
	const [showPet, setShowPet] = useState();

	useEffect(() => {
		getPetData(); // eslint-disable-line react-hooks/exhaustive-deps
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	async function getPetData() {
		let petData = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		);
		setPetArray({ pets: petData.data });
		console.log('please run once')
	}

	//Grabs the pets from the database that match that pet for displaying in the modal
	let filteredPet = (id) => {
		let pet = petArray.pets.filter((pet) => pet.petID === id);
		setShowPet(pet[0]);
	};

	async function handleCommentData(commentInfo) {
		await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/comment-creation`,
			commentInfo
		);
	}
	let getUpdateData = ''

	// TODO: Use this??
	// async function handleUpdatePet(petInfo) {
	// 	try {
	// 		let dataStorage = {};
	// 		getUpdateData = (petStuff) => {
	// 			setShowPetUpdate(true)
	// 			dataStorage = petStuff
	// 		}
	// 		const updatedPets = petArray.pets.map((petToUpdate) => {
	// 			console.log('id matching', petToUpdate.userID, '===', petInfo);
	// 			if (petToUpdate.petID === petInfo.petID) {
	// 				return dataStorage;
	// 			} else {
	// 				return petToUpdate;
	// 			}
	// 		});
	// 		console.log('updatedPets:', updatedPets);
	// 		await axios.put(
	// 			`${process.env.REACT_APP_BACKEND_SERVER}/pet-update/${petInfo.userID}`,
	// 			updatedPets
	// 		);

	// 		setPetArray({ pets: updatedPets });
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }

	return (
		<div className='lostOrFoundWrapper'>
			<h1>LostOrFound Component</h1>
			<section>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</section>

			<PetCards
				placeholder={placeholder}
				filteredPet={filteredPet}
				setShowComment={setShowComment}
			/>

			<PetModal
			getUpdateData={getUpdateData}
				showPet={showPetUpdate}
				onHide={() => setShowPetUpdate(false)}
			/>

			{showPet ? (
				<LostPetModal
					pet={showPet}
					showComment={showComment}
					onHide={() => setShowComment(false)}
					handleCommentData={handleCommentData}
					// handleUpdatePet={handleUpdatePet}
				/>
			) : (
				''
			)}
		</div>
	);
}
