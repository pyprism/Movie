#!/usr/bin/env node
var Table = require('cli-table') ,
    request = require('request');


function getMovieInfo() {
    request({
        uri: "http://0.0.0.0:5000/cli-movie",
        method: "POST",
        form: cli()
    }, function (error, response, body) {
        var json = JSON.parse(body);
        if(!json['error']) {
            console.log(json['Genre']);
            //table(json['Rating'] , json['Type'], json['Year'] , json['Genre'] ,json['Title']);
        }
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
        if(process.argv.slice(3) == "" ) return { 'movie' : data[0] , 'year' : "" }
        else return { 'movie' : data[0] , 'year' : process.argv.slice(3)[0] }
        //console.log({ 'movie' : data[0] , 'year' : process.argv.slice(3)[0] });
    }

} // execute immediately


function table(rating , type , year , genre , movieName) {
    var table = new Table({ head: [ movieName , 'Rating' , 'Type' , 'Year' , 'Genre'] });

    table.push(
        { 'IMDB': [rating, type , year , genre] }
    );
    console.log(table.toString());

}

(function tables() {
    var table = new Table({ head: ["Adss" , 'Rating' , 'Type' , 'Year' , 'Genre'] });

    table.push(
        { 'IMDB': ["sa","Sd" , "Sds" , "ADs"] }
    );
    console.log(table.toString());

}())