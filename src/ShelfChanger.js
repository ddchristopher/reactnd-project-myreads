import React from 'react'


const ShelfChanger = (props) => {
	return (
		<div className="book-shelf-changer">
			<select value={props.book.shelf || "none"} onChange={(event) => props.updateShelf(props.book, event.target.value)}>
				<option value="none" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	)
}

export default ShelfChanger