import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {q: 'desp', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': 'df53d8fe04msha7d992cad5e57b8p1beb09jsn59868058d4d3',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };