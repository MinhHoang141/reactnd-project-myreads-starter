import "./App.css";

import React from "react";

import BookPage from "./BookPage";
import * as BooksAPI from "./BooksAPI";

// import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		// showSearchPage: false,

		// Data
		books: [],
	};

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({
				books,
			}));
		});
	}

	render() {
		const { books } = this.state;
		return (
			<div className="app">
				<BookPage books={books} />
			</div>
		);
	}
}

export default BooksApp;
