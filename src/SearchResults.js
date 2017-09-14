import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from "./Book"

class SearchResults extends Component {
	state = {
		books: []
	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.searchTerm.length > 0) {
			BooksAPI.search(nextProps.searchTerm, 20).then((results) => {
				if (Array.isArray(results)) {
					this.setState({
						books: results.map((book) => {
							this.props.shelvedBooks.forEach((shelvedBook) => {
								if (book.id === shelvedBook.id) {
									book.shelf = shelvedBook.shelf
								}

							})
							return book
						})
					})
				} else {
					this.setState({ books: []})
				}
			})
		}
		this.setState({ books: []})
	}


	render () {
		return (
			<div className="search-books-results">
				<ol className="books-grid">
					{this.state.books.length > 0 && (
						this.state.books.map((book) => (
							<li key={book.id}>
								<Book
									book={book}
									updateShelf={this.props.updateShelf}
								/>
							</li>
						)))}
				</ol>
			</div>
		)
	}
}

export default SearchResults