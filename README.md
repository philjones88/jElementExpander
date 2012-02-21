## jElementExpander

A simple jQuery plugin to add "Read More" / "Read Less" style links before a certain element is found. The common scenario this plugin is for is when you want to add hide content when a different tag (say H2 or UL) is found.

## Concept

```html
<p>text</p>
<p>text</p>
<p>text</p>
<h2>Header</h2>
<p>text</p>
<p>text</p>
```

Is turned into:

```html
<p>text</p>
<p>text</p>
<p>text</p>
<a>Read More...</a>
<div>
	<h2>Header</h2>
	<p>text</p>
	<p>text</p>
</div>
```

## Options

The following options, shown here with their default values, are currently available:

```javascript

// elements to find, and add the read more/less link BEFORE.
// The first occurance gets the read more/less link.
// If the first element matches, it won't count that one but the next.
elementsToBreatAt : ['H2', 'UL'],

// Text for when the content is hidden
hiddenLabel: 'Read more...',

// Text for when the content is visible
showLabel: 'Read less...'

```

## Demo

A demo is the index.html file with common scenarios described above.

## License

This plugin is free of charge and licensed under the [MIT][2] license. As a courtesy to GPL-licensed projects that may wish to include the plugin, it is also licensed under the [GPL][3] license.

## Feature Requests

This plugin was designed for a particular scenario I have with a client's website. I don't intend to implement more features, but if they are quick you can always just ask.

## Me

Author: Phil Jones

Twitter: @philjones88