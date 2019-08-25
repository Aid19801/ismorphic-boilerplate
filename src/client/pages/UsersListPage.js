import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(({ id, name }) => {
            return <li key={id}>{name}</li>
        })
    }

    render() {
        return (
            <div>
                yuo
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }    
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
}
