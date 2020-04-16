import React from 'react'

export default function Navbar() {
    return (
        <nav className="wrapper-nav z-depth-0 teal">
        <div>
          <a href="/" className="brand-logo">D's Portal</a>
        </div>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/portal">Doctor's Portal</a></li>
        </ul>
      </nav>
    )
}
