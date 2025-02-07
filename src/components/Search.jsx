import React from 'react'
import searchIcon from '../assets/search.svg'

const Search = ({searchTerm, setSearchTerm}) => {
	return (
		<div className={'search'}>
			<div className="">
				<img src={searchIcon} alt={'search'} />

				<input
					type='text'
					placeholder={'search through our catalog'}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

			</div>
		</div>
	)
}
export default Search
