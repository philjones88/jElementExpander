## jElementExpander

A simple jQuery plugin to add "Read More" / "Read Less" style links before a certain element is found. The common scenario this plugin is for
is when you want to add hide content when a different tag (say H2) is found.

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
## Demo

A demo is the index.html file with common scenarios described above.

## License

This plugin is free of charge and licensed under the [MIT][2] license. As a courtesy to GPL-licensed projects that may wish to include the plugin, it is also licensed under the [GPL][3] license.

## Feature Requests

This plugin was designed for a particular scenario I have with a client's website. I don't intend to implement more features, but if they are quick you can always just ask.

## Me
Phil Jones
Twitter: @philjones88