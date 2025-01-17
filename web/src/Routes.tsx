// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import SpendPoCLayout from 'src/layouts/SpendPoCLayout'


const Routes = () => {
  return (
    <Router>
      <Set wrap={SpendPoCLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route page={QRCodePage} path="/qrcode" name="QRCode" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
