import React from 'react'

import { ReactComponent as Upload } from '../../../svg/upload.svg';

export const ScrollToTopButton = ({ scrollToTop, scrollToTopButton }) => {
  return (
    <>
      {
        scrollToTopButton
          ? (
            <div className="scrollToTop" onClick={scrollToTop}>
              <Upload className="scrollToTopArrow" />
            </div>
          ) : (
            null
          )
      }
    </>
  )
}
