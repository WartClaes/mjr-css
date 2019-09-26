# 2.3 Borders

The border is the area between the margin and the padding. Default it has a size of `0` so it is
not visible.

## Content

- [Basics](#basics)
- [Border radius](#border-radius)

---

## Basics.

A border is defined in 3 ways:

- width
- style
- color

As mentioned before, a border has a default width of `0`. To make it visible, you need to set both `width` and `style`.

The style of a border can be defined with keywords and the most common is `solid`. Other possibilities include
`dotted`, `dashed`, `double`, ...

The `color` and `width` properties are quite clear on their own. They set the width and the color of the border.

#### Example

```css
.foo {
	border: 1px solid #f00;
	...
	border-color: #f00;
	border-style: solid;
	border-width: 1px;
}
```

---

## Border radius

Rounded corners have always been a desingers favourite but were hard to get before `border-radius` was introduced.

But since it's available in browsers, it could not be easier to set them on a box.

#### Example

```css
.foo {
	border-radius: 10px;
}
```

If you don't want to define a border-radius on every corner, it is possible to target specific ones by passing multiple
value to the property. It follow roughly the same rules as padding and margin.

#### Example

```css
.foo {
	/* [top-left] [top-right] [bottom-right] [bottom-left] */
	border-radius: 16px 8px 4px 2px;
}
```

Beside that you can also define eliptical borders by providing 2 radii, seperated by a slash `/`. It defines the `x` and
`y` radius of the corner.

#### Example

```css
.foo {
	border-radius: 10px / 20px;
}
```
