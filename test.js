const http = require("https");

// http.get(
//   {
//     port: 3000,
//     hostname: "localhost",
//     path: "/",
//     headers: {email: 'solutionsstartapp@gmail.com', website: 'https://www.youtube.com'},
//   },
//   (res) => {
//     //response.setEncoding('utf8');
//     console.log(`connected - statusCode: ${res.statusCode}`);
//     res.on("data", (chunk) => {
//       console.log("chunk", "" + chunk);
//     });
//     res.on("end", () => {
//       console.log("No more data");
//     });
//     res.on("close", () => {
//       console.log("Closing connection");
//     });
//     res.on("error", (error) => {
//       console.log(error);
//     });
//   }
// );

const h = async () =>{
    // const aa = await fetch('http://localhost:3000/hu',{
    //     // headers: {
	// 	// 	'alias': 'jayefsh',
    //     //     'website': 'pratils',
	// 	// 	'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
	// 	// },
    // })
    // const aa = await http.get('http://localhost:3000/hu')
    // console.log(aa.body)






    var request = require('request');

request({
    headers: {
      'alias': 'llkka',
      'website': 'pizzaaa',
      'analytics': false
    },
    uri: 'http://localhost:3000/create',
    //body: formData,
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body) // Print the google web page.
     }
})
}
h()
