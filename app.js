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
    res.send(process.env.DBHost)
})

app.get("/loadmylinks", async(req, res) => {
  var email = 'solutionsstartapp@gmail.com';
  const mylinks = await itemsPool.query(
    "SELECT * FROM "+'"public"."Links"'+ " where email= '"+email+"'"
  );
  console.log(mylinks.rows);
      res.send(mylinks.rows)
})

app.get('/mylinkdata', async(req, res) => {
  var alias = req.headers.alias;

  const week1 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().startOf('day').toISOString()+"'"
  );
  const week2 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(1, 'days').startOf('day').toISOString()+"' and time<'"+moment().startOf('day').toISOString()+"'"
  );

  const week3 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(2, 'days').startOf('day').toISOString()+"' and time<'"+moment().subtract(1, 'days').startOf('day').toISOString()+"'"
  );

  const week4 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(3, 'days').startOf('day').toISOString()+"' and time<'"+moment().subtract(2, 'days').startOf('day').toISOString()+"'"
  );

  const week5 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(4, 'days').startOf('day').toISOString()+"' and time<'"+moment().subtract(3, 'days').startOf('day').toISOString()+"'"
  );

  const week6 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(5, 'days').startOf('day').toISOString()+"' and time<'"+moment().subtract(4, 'days').startOf('day').toISOString()+"'"
  );

  const week7 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(6, 'days').startOf('day').toISOString()+"' and time<'"+moment().subtract(5, 'days').startOf('day').toISOString()+"'"
  );




  const month1 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().startOf('month').toISOString()+"'"
  );
  const month2 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(1, 'months').startOf('month').toISOString()+"' and time<'"+moment().startOf('month').toISOString()+"'"
  );
  const month3 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(2, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(1, 'months').startOf('month').toISOString()+"'"
  );
  const month4 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(3, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(2, 'months').startOf('month').toISOString()+"'"
  );
  const month5 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(4, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(3, 'months').startOf('month').toISOString()+"'"
  );
  const month6 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(5, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(4, 'months').startOf('month').toISOString()+"'"
  );
  const month7 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(6, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(5, 'months').startOf('month').toISOString()+"'"
  );
  const month8 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(7, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(6, 'months').startOf('month').toISOString()+"'"
  );
  const month9 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(8, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(7, 'months').startOf('month').toISOString()+"'"
  );
  const month10 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(9, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(8, 'months').startOf('month').toISOString()+"'"
  );
  const month11 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(10, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(9, 'months').startOf('month').toISOString()+"'"
  );
  const month12 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(11, 'months').startOf('month').toISOString()+"' and time<'"+moment().subtract(10, 'months').startOf('month').toISOString()+"'"
  );

  const year1 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().startOf('year').toISOString()+"'"
  );
  const year2 = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment().subtract(1, 'years').startOf('year').toISOString()+"' and time<'"+moment().startOf('year').toISOString()+"'"
  );

  const total = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"'"
  );

  const countrylist = await itemsPool.query(
    "SELECT DISTINCT COUNTRY FROM "+'"public"."Analytics"'+" where alias='"+alias+"'"
  )
  const browserlist = await itemsPool.query(
    "SELECT DISTINCT BROWSER FROM "+'"public"."Analytics"'+" where alias='"+alias+"'"
  )
  const oslist = await itemsPool.query(
    "SELECT DISTINCT OS FROM "+'"public"."Analytics"'+" where alias='"+alias+"'"
  )
  var countries = [];
  var countriescount = [];
  var browsers = [];
  var browserscount = [];
  var oss = [];
  var osscount = [];

  for(var i=0; i<countrylist.rows.length; i++){
    countries.push(countrylist.rows[i]['country']);
    const countrycount = await itemsPool.query(
      "SELECT * FROM "+'"public"."Analytics"'+" where alias='"+alias+"' and country='"+countrylist.rows[i]['country']+"'"
    )
    countriescount.push(countrycount.rowCount);
    // countrylist.rows[i].count = countrycount.rowCount;
  }
  for(var i=0; i<browserlist.rows.length; i++){
    browsers.push(browserlist.rows[i]['browser']);
    const browsercount = await itemsPool.query(
      "SELECT * FROM "+'"public"."Analytics"'+" where alias='"+alias+"' and browser='"+browserlist.rows[i]['browser']+"'"
    )
    browserscount.push(browsercount.rowCount);
    // browserlist.rows[i].count = browsercount.rowCount;
  }
  for(var i=0; i<oslist.rows.length; i++){
    oss.push(oslist.rows[i]['os']);
    const oscount = await itemsPool.query(
      "SELECT * FROM "+'"public"."Analytics"'+" where alias='"+alias+"' and os='"+oslist.rows[i]['os']+"'"
    )
    osscount.push(oscount.rowCount);
    // oslist.rows[i].count = oscount.rowCount;
  }
  
  var analytics_data = {
    'month1': month1.rowCount,
    'month2': month2.rowCount,
    'month3': month3.rowCount,
    'month4': month4.rowCount,
    'month5': month5.rowCount,
    'month6': month6.rowCount,
    'month7': month7.rowCount,
    'month8': month8.rowCount,
    'month9': month9.rowCount,
    'month10': month10.rowCount,
    'month11': month11.rowCount,
    'month12': month12.rowCount,
    'week1': week1.rowCount,
    'week2': week2.rowCount,
    'week3': week3.rowCount,
    'week4': week4.rowCount,
    'week5': week5.rowCount,
    'week6': week6.rowCount,
    'week7': week7.rowCount,
    'year1': year1.rowCount,
    'year2': year2.rowCount,
    'total': total.rowCount,
    'countrylist': countries,
    'countrycountlist': countriescount,
    'browserlist': browsers,
    'browsercountlist': browserscount,
    'oslist': oss,
    'oscountlist': osscount
  };

  res.json(analytics_data);
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

app.get("/getcustomcount", async(req, res) => {
  var alias = req.headers.alias;
  var st_date = req.headers.st_date;
  var end_date = req.headers.end_date;
  const allItems = await itemsPool.query(
    "SELECT * FROM "+'"public"."Analytics"'+ " where alias= '"+alias+"' and time>'"+moment(st_date).toISOString()+"' and time<'"+moment(end_date).toISOString()+"'"
  );
  res.send(allItems.rowCount.toString())
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));