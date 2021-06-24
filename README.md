# Simple Tags

[![Netlify Status](https://api.netlify.com/api/v1/badges/f69a391e-2a70-497c-806b-ad60340cfd00/deploy-status)](https://app.netlify.com/sites/naughty-goldberg-3160c7/deploys)

A lightweight JS plugin for tags without JQuery library
![](http://demo.kurtobando.com/screencast/simple-tags.gif)

## Getting Started

Start by adding the `data-simple-tags` data attribute with your desired values,, for example `Article, Blog, Page, Post, Category, Updates` then, include `.simple-tags` for the default style.

```html
<div class="simple-tags" data-simple-tags="Article, Blog, Page, Post, Category, Updates"></div>
```

NOTE! Ensure these files are included on your project.

```html
<link href="build/simple-tags.min.css" rel="stylesheet" />
<script src="build/simple-tags.min.js"></script>
```

In addition to this, the `data-simple-tags` will update whenever a new tag or deleted tag has been made.

## Demo

Visit [here](https://demo.kurtobando.com/play-with-js/simple-tags)

## Installation

```bash
npm install
npm run build
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
