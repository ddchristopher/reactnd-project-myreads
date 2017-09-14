import React, {Component} from 'react'
import Book from "./Book"
import BookshelfTitleBar from "./BookshelfTitleBar"
import {TweenLite} from "gsap";

class CurrentlyReading extends Component {

	expandShelf = () => {
		const shelf = document.getElementById("currently-reading")
		if (shelf.classList.contains("collapsed")) {
			TweenLite.to(shelf, 0.3, {height: 305, onComplete:(() => shelf.classList.remove("collapsed"))})
		} else {
			TweenLite.to(shelf, 0.3, {height: 0, onComplete:(() => shelf.classList.add("collapsed"))})
		}

	}


	render () {
		return (
			<div className="bookshelf">
				<BookshelfTitleBar
					onExpand={this.expandShelf}
					shelfName={"Currently Reading"}
				/>
				<div className="bookshelf-books" id="currently-reading">
					<ol className="books-grid">
							{this.props.books.map((book) => (
								<li key={book.id}>
									<Book
										book={book}
										updateShelf={this.props.updateShelf}
									/>
								</li>

							))}
					</ol>
				</div>
			</div>
		)
	}
}

export default CurrentlyReading