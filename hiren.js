#!/usr/bin/env node
var Table = require('cli-table') ,
    request = require('request');


function getMovieInfo() {
    request({
        uri: "http://0.0.0.0:5000/cli-movie",
        method: "POST",
        form: {
            'movie': 'valuesaasa', 'year': ''
        }
    }, function (error, response, body) {
        console.log(body);
    });

}

function cli() {

    var data = process.argv.slice(2);
    if(data == "--help"){
        console.log('Usage: movie [Movie Name] [Year]');
        console.log('Example: movie "Lord Of The Rings"');
        process.exit(1);
    }
    else{
        if(process.argv.slice(3) = "" ) return { 'movie' : data , 'year' : "" }
        else return { 'movie' : data , 'year' : process.argv.slice(3) }
    }

}


function table(rating , type , year , genre , movieName) {
    var table = new Table({ head: [ movieName , 'Rating' , 'Type' , 'Year' , 'Genre'] });

    table.push(
        { 'IMDB': [rating, type , year , genre] }
    );
    console.log(table.toString());

}