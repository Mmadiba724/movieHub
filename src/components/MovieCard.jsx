import React from 'react'

const MovieCard = ({movie:{title, vote_average, poster_path,original_language,release_date}}) => {
	return (
		<div className={'movie-card'}>
			<img alt={`movie-poster ${title}`} src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'src/assets/No-Poster.png'} />

			<div className="mt-3">
				<h3 className="">{title}</h3>
				<div className="content">
					<div className="rating">
						<img src={'src/assets/rating.svg'} alt={`rating-icon`} />
						<p>{vote_average ? vote_average.toFixed(1): 'N/A'}</p>
					</div>
					<span>•</span>
					<div className="lang">{original_language}</div>

					<span>•</span>

					<p className="year">
						{release_date ? release_date.split('-')[0] : 'N/A'}
					</p>

				</div>
			</div>
		</div>
	)
}
export default MovieCard
