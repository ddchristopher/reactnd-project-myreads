import React from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'


const BookShelf = (props) => {
		const currentlyReadingList = props.books.filter((book) => book.shelf === 'currentlyReading')
		const wantToReadList = props.books.filter((book) => book.shelf === 'wantToRead')
		const readList = props.books.filter((book) => book.shelf === 'read')
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<CurrentlyReading
							books={currentlyReadingList}
							updateShelf={props.updateShelf}
						/>
						<WantToRead
							books={wantToReadList}
							updateShelf={props.updateShelf}
						/>
						<Read
							books={readList}
							updateShelf={props.updateShelf}
						/>
					</div>
				</div>

				<div className="open-search">
					<Link
						to="/search"
					>Add a Book</Link>
				</div>

			</div>
		)
	}

export default BookShelf