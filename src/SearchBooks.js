import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SearchResults from "./SearchResults";

class SearchBooks extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render () {

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link
						to="/"
						className="close-search"
					>Close</Link>
					<div className="search-books-input-wrapper">
						{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>

					</div>
				</div>
				<SearchResults
					shelvedBooks={this.props.shelvedBooks}
					searchTerm={this.state.query}
					updateShelf={this.props.updateShelf}
				/>
			</div>
		)
	}
}

export default SearchBooks