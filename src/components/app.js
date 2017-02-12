import React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div className="h-100 w-100">
        <div className="flex absolute overflow-hidden h-100 w-100 gradient__rolling">
        </div>
        <div className="flex flex-column w-100 items-center justify-center">
          <div className="hero__image--wrapper relative mt5 mt6-ns">
            <div className="hero__image--brand h4" />
          </div>
          <div className="flex mt4 w-100 justify-center">
            <a target="_blank" href="https://github.com/Product-Engineering">
              <div className="flex service__icon--github grow h3 w3"></div>
            </a>
          </div>
          <div className="flex mt4 w-100 justify-center">
            <a href="http://eepurl.com/cBkw8v" className="br2 f6 f5-ns b db pa2 link grow white ba white pointer">
              <div className="pa2">Subscribe To Newsletter</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
