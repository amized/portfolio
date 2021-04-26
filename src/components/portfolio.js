import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
var Scroll = require("react-scroll")
var scroll = Scroll.animateScroll

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.nextSelectedItem = null
    this.isAnimatingEnter = false
    this.enterTimeout = 2000
    this.state = {
      selectedItem: null,
    }
  }

  selectItem = index => {
    var top =
      this.container.getBoundingClientRect().top +
      document.documentElement.scrollTop
    scroll.scrollTo(top - this.props.navHeight - 30)

    // Queue up this transition so it happens
    // after the current transition is finished
    // preventing throttling
    if (this.isAnimatingEnter) {
      this.nextSelectedItem = index
      return
    } else if (this.state.selectItem !== index) {
      this.setState({
        selectedItem: index,
      })

      this.isAnimatingEnter = true

      // Add a callback for when the animation finishes,
      // and select the next item in the queue if there is one
      window.setTimeout(
        function() {
          this.isAnimatingEnter = false
          if (this.nextSelectedItem !== null) {
            this.selectItem(this.nextSelectedItem)
            this.nextSelectedItem = null
          }
        }.bind(this),
        this.enterTimeout
      )
    }
  }

  onSelectItem = (index, e) => {
    e.preventDefault()
    this.selectItem(index)
  }

  close = () => {
    this.setState({
      selectedItem: null,
    })
  }

  setContainerRef = el => {
    this.container = el
  }

  render() {
    var selectedIndex = this.state.selectedItem
    var selected =
      selectedIndex !== null ? this.props.pfItems[selectedIndex] : null
    return (
      <div
        className={"portfolio" + (selected !== null ? " portfolio--open" : "")}
      >
        <div className="heading-2 heading-hilight">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio-main" ref={this.setContainerRef}>
          <div key={0} className="portfolio-header">
            <TransitionGroup>
              {selected ? (
                <CSSTransition
                  key={selected.title}
                  timeout={{
                    enter: this.enterTimeout,
                    exit: 1050,
                  }}
                  classNames="portfolio-detail"
                >
                  <div className={"portfolio-detail"}>
                    <div className="portfolio-detail__inner">
                      <div
                        className="portfolio-screenshot"
                        style={{
                          backgroundImage: "url(" + selected.screenshot + ")",
                        }}
                      ></div>
                      <div className="portfolio-info">
                        <div className="portfolio-info__items">
                          <h2>{selected.title}</h2>
                          <p>{selected.description}</p>
                          <h3>Technologies</h3>
                          {selected.technologies !== null ? (
                            <ul>
                              {selected.technologies.map(function(
                                selected,
                                index
                              ) {
                                return <li key={index}>{selected.name}</li>
                              })}
                            </ul>
                          ) : null}
                          {selected.link ? (
                            <a
                              className="portfolio-link"
                              target="_blank"
                              href={selected.link}
                              rel="noopener noreferrer"
                            >
                              Visit Website
                              <i className="icon icon-link"></i>
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              ) : (
                <CSSTransition
                  key={"none"}
                  timeout={500}
                  classNames="portfolio-detail"
                >
                  <div></div>
                </CSSTransition>
              )}
            </TransitionGroup>
            <div className="portfolio-detail__close" onClick={this.close}>
              <i className="icon icon-close"></i>
            </div>
          </div>
          <div className="portfolio-grid__wrapper">
            <div className="portfolio-spacer"></div>
            <div className="portfolio-grid">
              {this.props.pfItems.map((item, index) => {
                return (
                  <div
                    className={
                      "portfolio-item" +
                      (selectedIndex === index
                        ? " portfolio-item--selected"
                        : "")
                    }
                    onClick={this.onSelectItem.bind(this, index)}
                    key={index}
                  >
                    <div
                      className="portfolio-item__inner"
                      style={{
                        backgroundImage: "url(" + item.thumbnail + ")",
                      }}
                    ></div>
                    <div
                      className="portfolio-item__clone"
                      style={{
                        backgroundImage: "url(" + item.thumbnail + ")",
                      }}
                    ></div>
                    <div className="portfolio-item__caption">{item.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
