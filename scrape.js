const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
var fs = require('fs');
const URL = require('./url');


request('https://www.theroar.com.au/sitemap-posttype-video.xml' , (error, response , html ) => {
    if(!error && response.statusCode == 200){
     const $ =  cheerio.load(html);
         const url = $('url');
       
         url.each((i,el) => {
             
         var game = "cricket";

            const item = $(el).text();

            const arr = [];
          
            if(i = item.match(game)){
                
               const loc = $(el).children('loc').text();
               const lastmod = $(el).children('lastmod').text();

              //    const image = $(el).find('image loc').text();
               
              //    console.log(loc , lastmod , image);
             
              const url1 = new URL(loc , lastmod);
         
              arr.push(url1);
               
            //    const url2 = {
            //        "loc" : loc,
            //        "lastmod" : lastmod
            //  }
            //    arr.push(url2);
               console.log(arr);
                   fs.appendFile(
                                path.join(__dirname,'/test', 'hello.json'), arr, 
                                err => {
                                    if (err) throw err;
                                    console.log('File writen to...');
                    
                                }
                            );
            }


      
        });

      
   }
});