import React from "react"

export default () => {
  return (
    <form action="https://mailthis.to/amiel@amielzwier.com" method="POST">
      <input type="email" name="_replyto" placeholder="Your email" required />
      <textarea
        type="text"
        name="message"
        placeholder="Type message"
        required
      />
      <input type="submit" value="Send" />
    </form>
  )
}
