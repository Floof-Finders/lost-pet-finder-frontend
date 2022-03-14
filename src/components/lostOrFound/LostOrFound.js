import './lostOrFound.css';
import LostPetModal from '../modals/LostPetModal';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import PetCards from './petCardTabs';

import { PetContext } from '../../context/petContext';
import PetModal from '../modals/PetModal';

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
		console.log('please run once');
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

	return (
		<div className='lostOrFoundWrapper'>
			<h2 className='hh1'>Lost or Found Pets</h2>

			<h4 className='lostInformation'>
				Please click on the "View More" button to add
				information <br/>to help bring pets home to their family.
			</h4>

			<PetCards filteredPet={filteredPet} setShowComment={setShowComment} />

			<PetModal
				showPet={showPetUpdate}
				onHide={() => setShowPetUpdate(false)}
			/>

			{showPet ? (
				<LostPetModal
					pet={showPet}
					showComment={showComment}
					onHide={() => setShowComment(false)}
					handleCommentData={handleCommentData}
				/>
			) : (
				''
			)}
		</div>
	);
}
