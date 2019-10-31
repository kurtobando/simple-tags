# Simple Tags

A lightweight JS plugin for tags without JQuery library

## Getting Started

Note! Do not forget to include these files below:


```bash
<link href="css/style.css" rel="stylesheet">
<script src="js/script-min.js"></script>
```
From here, add the ID of your desired element, preferable a div, with an array of tags as a second argument.

```bash
<div id="container" class="simple-tags"></div>
<script>
   const tags = new Tags('#container', ["Article", "Blog", "Page", "Post", "Category", "Updates"])
</script>
```
Note! include .simple-tags for the default style.

## Installation
```bash
npm install 
npm run start
npm run build
```
## Demo
Visit [here](https://demo.kurtobando.com/play-with-js/simple-tags)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
