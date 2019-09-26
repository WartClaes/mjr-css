# 3.1 Flow

Besides chosing the appropriate box model for your element, you should also decide how your element should be displayed
or in other words how your element should behave.

If you're able to chose the appropriate display value for the appropriate situation, it will be so much easier to apply
the required layout on your element.

## Content

- [Inline](#inline)
- [Inline-block](#inline-block)
- [Block](#block)
- [Table](#table)

---

## Inline

Displaying an element inline makes the element behave as text. The element will sit inline with normal text even when
margin or padding is applied. The margin and padding will only push the text away horizontally but never vertically.

#### Example

```html
<div>
	Here is some text
	<div class="inline">and i'm inline.</div>
	And here is some more text.
<div>
```

```css
.inline {
	background-color: #f00;
	border: solid 5px hotpink;
	display: inline;
	margin: 10px;
	padding: 10px;
}
```

---

## Inline Block

Displaying an element as inline-block makes the element follow the baseline of the text. Which basically means that the
last line of your element will be inline with the text. You will also push other text lines away vertically.

#### Example

```html
<div>
	Here is some text
	<div class="inline-block">and i'm inline block.</div>
	And here is some more text.
<div>
```

```css
.inline-block {
	background-color: #f00;
	border: solid 5px hotpink;
	display: inline-block;
	margin: 10px;
	padding: 10px;
	width: 30px;
}
```

---

## Block

Displaying an element as block makes everything break past the element. Your element will start on a new line, and force
the following element to start on a new line. By default a block elements takes up all the horizontal space there is.

#### Example

```html
<div>
	Here is some text
 	<div class="block">and i'm block. </div>
	And here is some more text.
<div>
```

```css
.block {
	background-color: #f00;
	border: solid 5px hotpink;
	/*
		could be removed, because UA will set it as default
		value for many container elements (e.g. div/p/...)
	*/
	display: block;
	margin: 10px;
	padding: 10px;
}
```

---

## Table

Using the table display values makes it easy to create a table system without changing HTML. An example will make it
clear how we'll do this.

#### Example

```html
<div class="table">
	<div class="row">
		<div class="cell">First cell</div>
		<div class="cell">Second cell</div>
		<div class="cell">Third cell</div>
	</div>
</div>
```

Using the HTML above we'll start by creating a simple table layout.

### Basic table layout

```css
.table {
	display: table;
}

.row {
	display: table-row;
}

.cell {
	display: table-cell;
}
```

It's as easy as that, from now on the 3 div's with the class `.cell` will be displayed next to each other like cells in
a table. Though this is a proper solution for some situation it comes with some pitfalls:

- It's not possible to add padding or margin to a table-row
- It's not possible to add margin to a table-cell
- A table will by default wrap around it's content. If you want it to take up it's container horizontal space you'll
need to specify a width (e.g. 100%).

Because our elements are now behaving as table elements, we're also able to use table css properties on the element.

### Table layout

```css
.table {
	display: table;
	table-layout: fixed;
}
```

By default table-cells will take up as much space as they need so the table-cell with the largest content will also be
the largest table-cell. By setting the table-layout property to fixed we force each cell to have an equal width.

If the cell has a specified width, the cell will follow the specified width and the other cells will divide the remaining
space equally.

### Border collapse

```css
.table {
	border-collapse: separate | collapse;
	display: table;
}

.table-cell {
	display: table-cell;
	border: solid 1px #f00;
}
```

The default value of the border-collapse property is `separate` which means that each cell has it's own stand alone border.
In this case you'll be able to provide some spacing between cells using the `border-spacing` property.

When you set the border-collapse property to `collapse` you force the borders of each cell to join so it looks like there
only one border between the two cells. Because the borders are joined, it's not possible to provide spacing between the
borders anymore.

### Vertical Alignment

The most powerful feature of a table-cell is it's ability to vertically align its content. You'll finally be able to use
the `vertical-align` property and it will actually do something!

```css
.table-cell {
	display: table-cell;
	vertical-align: middle;
}
```
