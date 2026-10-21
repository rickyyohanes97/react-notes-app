import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      bodyError: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const value = event.target.value;
    if (value.length <= 50) {
      this.setState({ title: value });
    }
  }

  onBodyChangeEventHandler(event) {
    const value = event.target.value;
    this.setState({ body: value });

    if (value.length > 0 && value.length < 10) {
      this.setState({ bodyError: 'Fill the note body (minimum 10 characters)' });
    } else {
      this.setState({ bodyError: '' });
    }
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;

    if (body.length < 10) {
      this.setState({ bodyError: 'Fill the note body (minimum 10 characters)' });
      return;
    }

    this.props.addNote({ title, body });
    this.setState({ title: '', body: '', bodyError: '' });
  }

  render() {
    const { title, body, bodyError } = this.state;
    const remainingChars = 50 - title.length;

    return (
      <div className="note-input" data-testid="note-input">
        <h2>Create Note</h2>

        {bodyError && (
          <p className="note-input__feedback--error">{bodyError}</p>
        )}

        <form
          onSubmit={this.onSubmitEventHandler}
          data-testid="note-input-form"
        >
          <p
            className="note-input__title__char-limit"
            data-testid="note-input-title-remaining"
          >
            Remaining characters: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="This is the title ..."
            value={title}
            onChange={this.onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Write your note here ..."
            value={body}
            onChange={this.onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
