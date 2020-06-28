import React from 'react';
import { connect } from 'react-redux'

const Home = (props) => {
  console.log(props)
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list : state.list
  }
}

export default connect(mapStateToProps)(Home);
