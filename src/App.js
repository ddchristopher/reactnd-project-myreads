import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import SearchBooks from "./SearchBooks"
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
      books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelves = (book, shelf) => {
	  BooksAPI.update(book, shelf).then(() => {
	    BooksAPI.getAll().then((books) => {
	        this.setState({books})
        })
	  })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <SearchBooks
	            shelvedBooks={this.state.books}
                updateShelf={this.changeShelves}
            />
        )}/>
        <Route exact path="/" render={() => (
            <BookShelf
                updateShelf={this.changeShelves}
                books={this.state.books}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp
