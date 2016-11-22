import React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import { Movies } from '../models/Movies.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


@observer
export default class Dashboard extends React.Component {

    componentDidMount(){
        const movies = new Movies();
        movies.getMovies();
        console.log(movies.loaded);
        console.log(movies.movieList);
    }

    render() {
        if(new Movies().loaded) {
            return (
                <div>
                    I am dumb dashboard
                </div>
            )
        }
        return <div>loading all data .... </div>
    }
}