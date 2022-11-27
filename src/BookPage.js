import React, { Component } from "react";

import Book from "./Book";

class BookPage extends Component {
	state = {
		bookPage: this.props.books,
	};

	/* 
		In this one, I don't know why the data had been delayed
		Therefore, I using getDerivedStateFromProps for checking if the data is available or now
		But I think it's should not be done like this.
		If can please give me some hint.
	*/
	static getDerivedStateFromProps(props, state) {
		if (props.books !== state.books) {
			return { bookPage: props.books };
		}
		return null;
	}

	render() {
		console.log(this.props);

		const { bookPage } = this.state;

		const bookItemCurrentlyReading = bookPage.map(
			(book) =>
				book.shelf === "currentlyReading" && (
					<div key={book.id}>
						<Book book={book} />
					</div>
				)
		);
		const bookItemWantToRead = bookPage.map(
			(book) =>
				book.shelf === "wantToRead" && (
					<div key={book.id}>
						<Book book={book} />
					</div>
				)
		);
		const bookItemRead = bookPage.map(
			(book) =>
				book.shelf === "read" && (
					<div key={book.id}>
						<Book book={book} />
					</div>
				)
		);
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div className="bookshelf">
						<div className="bookshelf-books">
							{bookPage && bookPage.length > 0 ? (
								<ol className="books-grid">
									<li>
										<h2>Currently Reading</h2>
										<div class="book-list">
											{bookItemCurrentlyReading}
										</div>
									</li>
									<li>
										<h2>Want To Read</h2>
										<div class="book-list">
											{bookItemWantToRead}
										</div>
									</li>
									<li>
										<h2>Read</h2>
										<div class="book-list">
											{bookItemRead}
										</div>
									</li>
								</ol>
							) : null}
						</div>
					</div>
				</div>
				<div className="open-search">
					<button
						onClick={() => this.setState({ showSearchPage: true })}
					>
						Add a book
					</button>
				</div>
			</div>
		);
	}
}

BookPage.propTypes = {};

export default BookPage;
