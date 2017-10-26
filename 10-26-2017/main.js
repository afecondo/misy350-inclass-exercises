console.log("Hello");

//practice array

let bucket_list = ["learn to fly", "play piano" , "learn calligraphy"];

console.log(bucket_list[2]);

// for loop

for (let i = 0; i < bucket_list.length; i++){
console.log("-" + bucket_list[i]);

}

  //nested for loop

let movie_list1 = [
  "The Secret Life of Walter Mitty",
  "Transformers",
  "Superbad"
];

let movie_list2 = [
  "Land of the Lost",
  "Inglorious Bastards",
  "Superbad",
  "The Secret Life of Walter Mitty",
];

for (let i = 0; i < movie_list1.length; i++){
  for (let j = 0; j < movie_list2.length; j++) {
    if (movie_list1[i]==movie_list2[j]) {
      console.log(movie_list1[i]);
    }
  }
}


//iterators

movie_list1.forEach(movie => console.log(">>" + movie));

//filter iterators - generating a new array

 let new_movie_list = movie_list2.filter(movie => movie.slice(0,1) == "S");
 console.log(new_movie_list);
