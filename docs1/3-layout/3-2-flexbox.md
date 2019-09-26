# 3.2 Flexbox

Flexbox is a newer approach on handling layouts. When creating layouts with only tables, floats and positioning it is
very hard and frustrating. Flexbox takes on a completely different approach.

A few key features of Flexbox are vertical alignment of elements in a box, equal heights on rows and distributing
elements evenly in the available space.

Flexbox let you apply rules to both parent and child elements.

## Content

- [Support](#support)
- [Parent element properties](#parent-element-properties)
- [Child element properties](#child-element-properties)

---

## Support

As it is usual the case with CSS, implementing in browsers is a slow process, but eventually it works in every browser.

| IE | Edge | Firefox | Chrome | Safari |
| :--- | :--- | :--- | :--- | :--- |
| 🐞 | 🎉 | 🎉 | 🎉 | 🎉 |

🐞 IE has a lot of bugs present.

---

## Parent element Properties

### display

To start a flexbox grid, we must first tell our parent element to behave as a flexbox container.

```css
.row {
	display: flex | inline-flex;
}
```

### flex-direction

Afterwards we must specificy in which direction our children should flow.

```css
.row {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- row: flow horizontally *(default)*
- row-reverse: flow horizontally but in the opposite direction (start with the last element, end with the first element)
- column: flow vertically
- column-reverse: flow vertically but in the opposite direction (start with the last element, end with the first element)

### flex-wrap

By default, a flexbox grid will force all children to fit in the row. We can alter that behaviour by telling our parent
element what to do when to many children are inside it.

```css
.row {
	flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- nowrap: stay on one row *(default)*
- wrap: create a new row below the current row
- wrap-reverse: create a new row above the current row

### justify-content

This property basically tells our parent element how the child elements should be aligned horizontally. Do we want them
to float on the left or right side? Or do we want them to be equally divided in the available space?

```css
.row {
	justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- flex-start: pull to the left *(default)*
- flex-end: pull to the right
- center: pull to the center
- space-between: divide with equal space between each element but not on the outside of the rows
- space-around: divide with equal space between each element and also on the outside of the rows

### align-items

Besides of aligning our items horizontally we also want to align our items vertically relative to each other.

```css
.row {
	align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flext-start: vertically align the items to the top
- flex-end: vertically align the items to the bottom (of the largest item)
- center: vertically align the items to the center
- baseline: vertically align the items to the baseline (the bottom of the first text line)
- stretch: give all items an equal height (default)

### align-content

After we aligned our items relative to each other, we want to align the items relative to the parent element. What if
the parent element, for some reason, is higher then the items inside it? How should the items behave? We can determine
this behaviour by setting the align-content property.

```css
.row {
	align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- flex-start: float at the top of the container
- flex-end: float at the bottom of the container
- center: float in the center of the container
- space-between: divide with equal space between each element but not on the outside of the rows
- space-around: divide with equal space between each element and also on the outside of the rows
- stretch: stretch the items to fill the available space

---

## Child elements

### order

One of the nicest features of flexbox is the `order` property. This property allows us to rearrange our elements without
having to change the DOM. This allows us to, for example on a mobile device, rearrange our items when needed.

```css
.column {
	/* any number, the lowest value gets displayed first */
	order: 1;
}
```

### flex-grow

The flex-grow property allows us to divide the width of the container relative to each other without specifying a unit.
It makes an item grow relative to other elements.

```css
.column {
	/* any number */
	flex-grow: 1;
}
```

#### Example

```html
<div class="row">
	<div class="column">1</div>
	<div class="column bigger">2</div>
	<div class="column">3</div>
</div>
```

```css
.row {
	display: flex;
}

.column {
	/* this gives every column an equal width inside the container */
	flex-grow: 1;
}

.bigger {
	/* this will make the element twice as big as normal columns */
	flex-grow: 2;
}
```

### flex-shrink

Flexbox allows us to divide the available space over the items but in some cases we need to divide 'negative space'
between our items. In other words, make our items smaller. T

he flex-shrink property allows us to shrink one item harder then another item. So one item will take more of the
'negative space' then other items. This property will only work when a width or a flex-basis has been set, otherwise the
items will never have to 'shrink'.

```css
.column {
	/* any number, this column will shrink twice as hard as other columns */
	flex-shrink: 2;
}
```

### flex-basis

This property will give our element a default size, before distributing the available space.

```css
.column {
	/* any length value */
	flex-basis: 100px;
}
```

### align-self

When setting the align-self property we override the align-items property of the parent element for a specific item.
So one item could align itself differently then the other items in the container.

```css
.column {
	align-self: flex-start | flex-end | center | baseline | stretch;
}
```

- flext-start: vertically align the item to the top
- flex-end: vertically align the item to the bottom (of the largest item)
- center: vertically align the item to the center
- baseline: vertically align the item to the baseline (the bottom of the first text line)
- stretch: stretch the item to the size of the container

