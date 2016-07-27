import React from 'react'

const styles = {
  entry: {
    marginLeft: "27%",
  },
  title: {
    color: "blue",
  }
}

const SearchEntry = ({ title, description, firstname, lastnameinitial, petname}) => (
         <div style={styles.entry}>
          <h1 style={styles.title}>{title}</h1>
          <div>{firstname} {lastnameinitial}.</div>
          <div>Petname: {petname}</div>
          <div>{description}</div>
         </div>
      );

export default SearchEntry
