import React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed, toJS } from "mobx";
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
        this.props.route.movie.getMovies();
        //console.log(movies.loaded);
        //console.log(movies.movieList);
        //console.log(this.props.route.movie.loaded);
        //console.log(toJS(this.props.route.movie.movies));
    }

    render() {

        if(this.props.route.movie.loaded){
            console.log(toJS(this.props.route.movie.movies));

            function movieName(data, cell){
                return cell.movie.name;
            }

            function movieIMDB(data, cell){
                return cell.movie.imdb_rating;
            }

            function movieType(data, cell){
                return cell.movie.movie_type;
            }

            return (
                <div>
                <BootstrapTable data={toJS(this.props.route.movie.movieList)} striped={true} hover={true} condensed={true} pagination={true} search={true}>
                        <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="movie" dataFormat={ movieName} >Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="movie" dataFormat={ movieIMDB} >IMDB Rating</TableHeaderColumn>
                        <TableHeaderColumn dataField="movie" dataFormat={ movieType} >Movie Type</TableHeaderColumn>
                        <TableHeaderColumn dataField="rating" >Rating</TableHeaderColumn>
                        <TableHeaderColumn dataField="source" >Source</TableHeaderColumn>
                        <TableHeaderColumn dataField="video_quality">Quality</TableHeaderColumn>
                        <TableHeaderColumn dataField="watched_at">Watched At</TableHeaderColumn>
                        <TableHeaderColumn dataField="watched_full"> Watched Full</TableHeaderColumn>
                </BootstrapTable>
                </div>
        )
        }
        return (
            <div>Loading........</div>
        )

    }
}