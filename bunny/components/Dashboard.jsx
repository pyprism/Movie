import React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import { Movies } from '../models/Movies.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Provider } from 'mobx-react';


@observer
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        //const movies = new Movies();
        //movies.getMovies();
        //console.log(movies.loaded);
        //console.log(movies.movieList);
        console.log(this.props.route.movie.loaded );
    }

    render() {

        return (
                <div>
               bvcb
                </div>
        )
    }
}