import React from 'react'


const BookshelfTitleBar = (props) => {
		return (
			<div className="bookshelf-title">
				<h2>{props.shelfName}</h2>
				<button
					className="expand-shelf-button"
					onClick={props.onExpand}>
				</button>
			</div>
		)
}


export default BookshelfTitleBar