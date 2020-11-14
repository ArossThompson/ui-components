import React, { useState, useEffect } from 'react';

const Search = () => {
  return (
    <form class="form-inline d-flex justify-content-center md-form form-sm nav-search">
      <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
        aria-label="Search"></input>
      <i class="fas fa-search" aria-hidden="true"></i>
    </form>
  )

  
}



export default Search;