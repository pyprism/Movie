import React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed, toJS } from "mobx";
import { observer } from "mobx-react";
import { Movies } from '../models/Movies.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Provider } from 'mobx-react';


@observer
export default class Dashboard extends React.Component {

    //constructor(props) {
    //    super(props);
    //}

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

            function movieName(data, cell){
                return cell.movie.name;
            }

            function movieIMDB(data, cell){
                return cell.movie.imdb_rating;
            }

            function movieType(data, cell){
                if (data.movie_type == "Act")
                    return "Action";
                else if(data.movie_type = "Ani")
                    return "Animation";
                else if(data.movie_type = "Com")
                    return "Comedy";
                else if(data.movie_type = "Doc")
                    return "Documentary";
                else if(data.movie_type = "Fam")
                    return "Family";
                else if(data.movie_type = "FN")
                    return "Film-Noir";
                else if(data.movie_type = "Hor")
                    return "Horror";
                else if(data.movie_type = "Mus")
                    return "Musical";
                else if(data.movie_type = "Rom")
                    return "Romance";
                else if(data.movie_type = "Spo")
                    return "Sport";
                else if(data.movie_type = "War")
                    return "War";
                else if(data.movie_type = "Adv")
                    return "Adventure";
                else if(data.movie_type = "Bio")
                    return "Biography";
                else if(data.movie_type = "Cri")
                    return "Crime";
                else if(data.movie_type = "Dra")
                    return "Drama";
                else if(data.movie_type = "Fan")
                    return "Fantasy";
                else if(data.movie_type = "His")
                    return "History";
                else if(data.movie_type = "Mus")
                    return "Music";
                else if(data.movie_type = "Mys")
                    return "Mystery";
                else if(data.movie_type = "Sci")
                    return "Sci-Fi";
                else if(data.movie_type = "Thr")
                    return "Thriller";
                else if(data.movie_type = "Wes")
                    return "Western";
                return "Undefined";
            }

            function movieWatchedFull(data, cell) {
                if(data)
                    return 'Yes';
                else if(!data)
                    return 'No';
                return 'Undefined';
            }

            function filterName(cell, row) {
                console.log(cell);
                console.log(row);
                return cell.movie.name;
            }

            return (
                <div>
                    <BootstrapTable data={toJS(this.props.route.movie.movieList)} striped={true} hover={true} condensed={true} pagination={true} search={true}>
                        <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="movie" filterValue={filterName} dataFormat={ movieName} >Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="movie" dataFormat={ movieIMDB} >IMDB Rating</TableHeaderColumn>
                        <TableHeaderColumn dataField="movie" dataFormat={ movieType} >Movie Type</TableHeaderColumn>
                        <TableHeaderColumn dataField="rating" >Rating</TableHeaderColumn>
                        <TableHeaderColumn dataField="source" >Source</TableHeaderColumn>
                        <TableHeaderColumn dataField="video_quality">Quality</TableHeaderColumn>
                        <TableHeaderColumn dataField="watched_at">Watched At</TableHeaderColumn>
                        <TableHeaderColumn dataField="watched_full" dataFormat={movieWatchedFull}> Watched Full</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            )
        }
        return (
            <div>Loading........</div>
        )

    }
}