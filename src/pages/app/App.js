import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { enableLoader, disableLoader } from '../../state-management/actions/loader/index';
import { addTodo, todosPending } from '../../state-management/actions/todo/index';
import { usersPending, usersDone, usersRejected, addUser } from '../../state-management/actions/user/index';
import { fetchPosts } from '../../state-management/actions/posts/index';

class App extends Component {

  constructor(props) {
    super(props);
  }

  handleClickEvent = () => {
    this.props.isLoading ? this.props.disableLoader() : this.props.enableLoader();
  }

  addUser = () => {
    this.props.addUser({name: 'Johnny Sins'});
  }

  addTodo = () => {
    this.props.fetchPosts();
  }

  render() {

    const { isLoading, isFetchingPosts, posts } = this.props;

    return (
      <div>
        {isLoading ? <h1>Loading</h1> : <h1>Disabled</h1>}
        <button onClick={this.handleClickEvent}>Toggle Loader</button>
        <button onClick={this.addUser}>ADD_USER</button>
        <button onClick={this.addTodo}>FETCH POSTS</button>
        {this.props.users && this.props.users.map(user => <h1>{user.name}</h1>)}


        <div>
          {isFetchingPosts ? 'Fetching' : posts.map(item => <li>{item.title}</li>)}
        </div>
      </div>
    );
  }
}

// Mappers 

const mapStateToProps = (state, ownProps) => {
  return {
      isLoading : state.loader.isLoading,
      isFetchingPosts: state.posts.isLoading,
      posts: state.posts.data,
      users: state.users.data
  };
}

const mapDispatchToProps = dispatch => {
  return {
      enableLoader : () => dispatch(enableLoader()),
      disableLoader : () => dispatch(disableLoader()),
      addTodo : () => dispatch(addTodo()),
      addUser : payload => dispatch(addUser(payload)),
      usersPending : () => dispatch(usersPending()),
      usersDone : payload => dispatch(usersDone(payload)),
      usersRejected : payload => dispatch(usersRejected(payload)),
      fetchPosts : payload => dispatch(fetchPosts())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
