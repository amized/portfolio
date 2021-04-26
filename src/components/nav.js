import React from "react"
var Scroll = require("react-scroll")
var scroll = Scroll.animateScroll

class Nav extends React.Component {
  state = {
    scrollItem: -1,
    mobileNavOpen: false,
  }

  static defaultProps = {
    items: [],
  }

  componentDidMount() {
    this.navHeight = this.wrapper.offsetHeight
  }

  toggleMobileNav() {
    document.body.classList.toggle("nav-mobile--open")
  }

  clickItem(index, e) {
    e.preventDefault()
    this.smoothScrollTo(index)
    this.toggleMobileNav()
  }

  smoothScrollTo(index) {
    const item = this.props.items[index]
    if (!item) {
      return
    }
    var el = document.querySelector("#" + item.id)

    if (el) {
      const top = el.offsetTop - this.props.navHeight + 5
      scroll.scrollTo(top, { duration: 800 })
    }
  }

  goToNext = () => {
    const nextIndex = this.props.navIndex + 1
    this.smoothScrollTo(nextIndex)
  }

  setTheElRef = el => {
    this.theEl = el
  }

  setWrapperRef = el => {
    this.wrapper = el
  }

  render() {
    const { navIndex } = this.props
    var current = this.props.items[navIndex] ? this.props.items[navIndex] : null

    console.log("The current", current)
    return (
      <nav id="nav">
        <div className="page-section__inner" ref={this.setWrapperRef}>
          <div className="nav__next" onClick={this.goToNext}>
            <i className="icon icon-arrow-down"></i>
          </div>
          {current && current.id !== "intro" ? (
            <div className="nav__current">{current.name}</div>
          ) : null}
          <div className="nav-mobile__toggle" onClick={this.toggleMobileNav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav-list-waypoint" ref="stickyWaypoint"></div>
          <div className="nav-list" ref={this.setTheElRef}>
            {this.props.items.map((item, index) => {
              if (index === 0) {
                return null
              }

              var classname = index === navIndex ? "nav-item--current" : ""
              return (
                <a
                  className={classname}
                  href={"#" + item.id}
                  onClick={this.clickItem.bind(this, index)}
                  key={index}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
