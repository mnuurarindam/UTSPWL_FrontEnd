import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Kontak extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    messageCount: 0,
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleSubmitMessage = () => {
    const { messageCount, name, email, message } = this.state;
    this.setState({ messageCount: messageCount + 1 });
    console.log(`Pesan yang dikirim ke server:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  };

  render() {
    return (
      <>
        <Navbar />
        <div className="centered-content">
          <h1>Kontak</h1>
        </div>
        <div className="form-layout">
          <form>
            <div>
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Your Email"
              />
            </div>
            <div>
              <label for="message">Message:</label>
              <textarea
                id="message"
                value={this.state.message}
                onChange={this.handleMessageChange}
                placeholder="Write your message here..."
              />
            </div>
            <button type="button" onClick={this.handleSubmitMessage}>
              Send Message
            </button>
          </form>
          <div>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Jumlah Pesan Terkirim: {this.state.messageCount}
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Kontak;
