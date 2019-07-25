import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <img alt="Nice Good Stuff" src="https://i.etsystatic.com/ishbs/5211f4/1888371221/ishbs_3360x448.1888371221_1hlofhe9.jpg?version=0"></img>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
