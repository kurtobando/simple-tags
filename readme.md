# Simple Tags

A lightweight JS plugin for tags without JQuery library
![](http://demo.kurtobando.com/screencast/simple-tags.gif)
## Getting Started

Note! Do not forget to include these files below:


```html
<link href="css/style.css" rel="stylesheet">
<script src="js/script-min.js"></script>
```
From here, add the element ID of your desired tag, preferable a **div**, with an array of tags as a second argument. For example:
```html
<!DOCTYPE html>
<html>
<head>
   <title>Simple Tags</title>
   <link href="css/style.css" rel="stylesheet">
</head>
<body>
   <div id="container" class="simple-tags"></div>
   <script src="js/script-min.js"></script>
   <script>
      new Tags( 
         '#container', 
         ["Article", "Blog", "Page", "Post", "Category", "Updates"] 
      )
   </script>
</body>
</html>
```
Note! include `.simple-tags` for the default style.
## Demo
Visit [here](https://demo.kurtobando.com/play-with-js/simple-tags)

## Installation

```bash
npm install 
npm run start
npm run build
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
