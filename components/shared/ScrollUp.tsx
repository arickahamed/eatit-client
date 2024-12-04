import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

const ScrollUp = () => {
  return (
        <ScrollToTop
        smooth
        color="#cc3333"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
  )
}

export default ScrollUp;