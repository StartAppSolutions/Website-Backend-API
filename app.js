const express = require("express");
const app = express();
const port = 4000;
var cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const itemsPool = require('./dbconfig');

app.get("/", (req, res)=>{
    res.send('connected')
})

app.get("/hu", async(req, res) => {
    const allItems = await itemsPool.query(
        "SELECT * FROM "+'"public"."Links"'
      );
      res.send({ allItems }['allItems']['rows'])
})

app.get("/create", async(req, res) => {
  var alias = req.headers.alias;
  const website = req.headers.website;
  var analytics = req.headers.analytics;
  const email = req.headers.email;
  console.log('pp')
  console.log(analytics)

  if(alias==null){
    let tempalias = Math.random().toString(36).slice(2, 8);
    console.log('ll')
    console.log(tempalias)
    alias = tempalias;

    // const { data, error } = await supabase
    //   .from('Links')
    //   .select().eq('alias', tempalias)
    // if (data == null) {
    //   alert(error.message)
    //   return
    // }
    // if (data.length != 0) {
    //   createalias()
    //   return

    // }
    // truealias = tempalias;
    // console.log(truealias)
    // createblink()
  }else{
    const allItems = await itemsPool.query(
        "SELECT * FROM "+'"public"."Links"'+ " where alias= '"+alias+"'"
      );
      if({ allItems }['allItems']['rows'].length!=0){
        res.send('already exists')
        return
      }
  }

  const allItemsa = await itemsPool.query(
    "INSERT INTO "+'"public"."Links"'+ "(alias, website, analytics, email) VALUES ('"+alias+"', '"+website+"', '"+analytics+"', '"+email+"')"
  );
  console.log('oo')
  res.json({'link': alias})















  
//   try {
//     const allItems = await itemsPool.query(
//       "SELECT * FROM "+'"public"."Links"'+ " where alias= '"+short+"'"
//     );
//     if({ allItems }['allItems']['rows'].length==0){
//         const allItems = await itemsPool.query(
//             "INSERT INTO "+'"public"."Links"'+ "(alias, website) VALUES ('"+short+"', '"+website+"')"
//           );
//       res.send('you can create it')
//     }else{
//       res.send('sorry its taken')
//     }
// } catch (error) {
//     console.log(error);
//     res.status(500).send(error.message)
// }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));