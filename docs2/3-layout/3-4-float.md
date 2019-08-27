# 3.4 Float

Float was the way to create grids and layouts before flex and grid came along, although it was originally designed to
float images in text columns.

## Content

- [Basic float](#basics)
- [Clearing floats](#clearing-floats)
- [Clearfix](#clearfix)

---

## Basic float

The float property specifies that an element should be taken from the regular flow and is positioned to the left or right
side of its container or another floating element. Other inline elements in the flow wrap around this.

An element is floating when their calculated float property is different then `none`.

> ⚠️ The float property implies that you use `display: block;`. In most cases it modifies the display property.

```css
.baz {
    float: none | left | right;
}
```

---

## Clearing floats

The clear property defines whether the element should be next to another floating element or should move down below them.

```css
.quux {
    clear: none | left | right | both;
}
```

With the `none` property, the element will not move down. When using `left` or `right`, the element is moved down to
clear left/right floats. When using both the element is moved down in either situation.

## Clearfix

Floating boxes have some problems. When floating a large element that sits in the same container as a smaller element,
the parent container does not wrap around the size of the floating container.

In the past we used the `clearfix` hack. It works by generating an `::after` element that contains the float and clears
it on both sides.

```css
.wrapper::after {
	clear: both;
	content: '';
	display: block;
}
```

But in recent times you can use `display; flow-root` to get the same result. It creates a block formatting context which
contains the floating element.

Since it is CSS and a fairly new property, always check your browser support.

```css
.wrapper {
	display: flow-root;
}
```
