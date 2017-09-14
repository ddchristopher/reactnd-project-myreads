import React, {Component} from 'react'
import ShelfChanger from "./ShelfChanger";


class Book extends Component {


	render () {
		const imageThumb = this.props.book.hasOwnProperty("imageLinks") && `url(${this.props.book.imageLinks.thumbnail})`
		const imageThumbPlaceholder = `url(${"http://via.placeholder.com/128x193"})`
		const authors = this.props.book.hasOwnProperty("authors") && this.props.book.authors
		return (
			<div
				className="book">
				<div className="book-top">
					<div className="book-cover"
					     style={{
					        width: 128,
						     height: 193,
						     backgroundImage: imageThumb || imageThumbPlaceholder
					     }}>
					</div>
					<ShelfChanger
						book={this.props.book}
						updateShelf={this.props.updateShelf}
					/>
				</div>
				<div className="book-title">
					{this.props.book.title}
				</div>

				{authors && (
					<div className="book-authors">
						{this.props.book.authors.map((author) => (
							<div key={author}>
								{author}
							</div>
						))}
					</div>
				)}
			</div>
		)
	}
}

export default Book