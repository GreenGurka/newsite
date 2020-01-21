import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: '', email: 'johan.smeij@live.se' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='contactForm'>
        <form className='test-mailing'>
          <div>
            <textarea
              className='contactForm'
              id='test-mailing'
              name='test-mailing'
              onChange={this.handleChange}
              placeholder='Hej! Om ni vill ta kontakt via meddelande vänligen skriv det här. Glöm inte att fylla mail eller telefon nummer för återkoppling /Johan Smeij'
              required
              value={this.state.feedback}
            />
          </div>

          <input
            type='button'
            value='Submit'
            className='button'
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value });
  }
  handleSubmit(event) {
    const templateId = 'template_hTTP36jx';

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(res => {
        alert('Email successfully sent!');
      })

      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }
}
