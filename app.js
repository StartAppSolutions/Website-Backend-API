const express = require("express");
const app = express();
const port = 4000;
var cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const itemsPool = require('./dbconfig');
const moment = require("moment/moment");

app.get("/", (req, res)=>{
    res.send('connected')
})

app.get("/hu", async(req, res) => {
    const allItems = await itemsPool.query(
        "SELECT * FROM "+'"public"."Links"'
      );
      res.send({ allItems }['allItems']['rows'])
})

app.get('/mylinkdata', async(req, res) => {
  var alias = req.headers.alias;


  const all1 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().startOf('day').toISOString()+"'"
  );
  const all2 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(1, 'days').startOf('day').toISOString()+"'"
  );
  const all3 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(2, 'days').startOf('day').toISOString()+"'"
  );
  const all4 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(3, 'days').startOf('day').toISOString()+"'"
  );
  const all5 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(4, 'days').startOf('day').toISOString()+"'"
  );
  const all6 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(5, 'days').startOf('day').toISOString()+"'"
  );
  const all7 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(6, 'days').startOf('day').toISOString()+"'"
  );




  const month1 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().startOf('day').toISOString()+"'"
  );
  const month2 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(1, 'months').startOf('day').toISOString()+"'"
  );
  const month3 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(2, 'months').startOf('day').toISOString()+"'"
  );
  const month4 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(3, 'months').startOf('day').toISOString()+"'"
  );
  const month5 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(4, 'months').startOf('day').toISOString()+"'"
  );
  const month6 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(5, 'months').startOf('day').toISOString()+"'"
  );
  const month7 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(6, 'months').startOf('day').toISOString()+"'"
  );
  const month8 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(7, 'months').startOf('day').toISOString()+"'"
  );
  const month9 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(8, 'months').startOf('day').toISOString()+"'"
  );
  const month10 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(9, 'months').startOf('day').toISOString()+"'"
  );
  const month11 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(10, 'months').startOf('day').toISOString()+"'"
  );
  const month12 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(11, 'months').startOf('day').toISOString()+"'"
  );
  
  var list = [
    all1.rows.length,
    all2.rows.length,
    all3.rows.length,
    all4.rows.length,
    all5.rows.length,
    all6.rows.length,
    all7.rows.length,
    month1.rows.length,
    month2.rows.length,
    month3.rows.length,
    month4.rows.length,
    month5.rows.length,
    month6.rows.length,
    month7.rows.length,
    month8.rows.length,
    month9.rows.length,
    month10.rows.length,
    month11.rows.length,
    month12.rows.length,
  ];

  console.log(list)
  console.log(all1.rows)

  res.send(list);
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

  if(!analytics){
    const allItemsa = await itemsPool.query(
      "INSERT INTO "+'"public"."Links"'+ "(alias, website, analytics, email) VALUES ('"+alias+"', '"+website+"', '"+analytics+"', '"+email+"')"
    );
    console.log('oo')
    res.json({'link': alias})
  }else{

    if(email==null){
      res.send('Please login to get analytics feature')
      return
    }
    

  }

  















  
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