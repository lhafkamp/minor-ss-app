# Movie app
Assignment to make a server side app with certain performance techniques and a service worker. I used the <a href="https://www.themoviedb.org/">"https://www.themoviedb.org/"</a> API to fetch the movies.

![screenshot](screens/home.png)

## Performance
I implemented the following techniques to improve the performance of the application. These were all tested on a very slow connection (2G) so that I could measure the speed in a more precise way:
  
![screenshot](screens/1net.png)
This is the speed without increasing the performance.

![screenshot](screens/2gzipnet.png)
Here I implemented Gzip. Gzip makes sure that the files becomes 'zipped' like you would do on your computer, but instead of the computer these zip's go to the browser. As you can see it already went from around ~6000ms to ~3300ms. A huge improvement.

![screenshot](screens/3svgnet.png)
Now here it seems like I slowed down the application by using an svg. This is true. The image for the logo that I was using was a very low quality/ugly PNG file. I created a fallback for if the browser doesn't support SVG files:
  
`<img src="../../images/logo.svg" onerror="this.onerror=null, this.src='../../images/logo.png'"/>`  

![screenshot](screens/4ffnet.png)
Fontfaceobserver makes sure you see a fallback font until the custom font is loaded. This way we don't have to see empty font-less spots while loading the website. You can already see we cut it down to ~3300ms again.

![screenshot](screens/5cssnet.png)
Critical css loads the css that fills your viewport first so it can load the latter while you're still looking at the zero-state. This way the perceived performance is increased a lot even though the numbers don't necessarily tell you.

![screenshot](screens/6minnet.png)
Since Browserify already bundles all the Javascript files I only minified CSS. The speed went a bit up from the previous improvement.

![screenshot](screens/5cssdes.png)
![screenshot](screens/5cssmob.png)  
The rating didn't actually change from start to end because the application wasn't that slow to start with. However we did see it improve in speed and usability because I tested it on a 2G network.

## Build

The current `.env` is hidden from GitHub. Make sure you add an `.env` file with the following API key:  
`API_KEY={yourAPIKEYhere}`.

To use the app run `npm install` and then `npm start` to start the server on port `9000`.

## Sources
<a href="https://www.themoviedb.org/">"https://www.themoviedb.org/"</a>
<a href="https://www.npmjs.com/package/dotenv">"https://www.npmjs.com/package/dotenv"</a>