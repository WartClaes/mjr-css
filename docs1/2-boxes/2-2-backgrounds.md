# 2.1 Backgrounds

The background of an element is the area inside the content, including padding and border.
Backgrounds don't cover the margins.

## Content

- [Basics](#basics)
- [Background gradients](#background-gradients)
- [Multiple backgrounds](#multiple-backgrounds)

---

## Basics

### `background-color`

Sets the color of the background. Default is `transparent`.

#### Example

```css
.foo {
	background-color: #f00;
}
```

### `background-image`

Adds an image to the background. The image always sits on top of the color, so if you set both, the image will be shown
and the color will be visible if the image fails to load.

#### Example

```css
.foo {
	background-image: url('image.png');
}
```

### `background-repeat`

Determine how the background image is repeated. Default is `repeat`. Other options are `no-repeat`, `repeat-x` and `repeat-y`.

#### Example

```css
.foo {
	background-repeat: no-repeat;
}
```

### `background-position`

It allows you to position your background. It usually takes 2 properties (`x` and `y`). Top left corner is equal to `0 0`.
Other values are, for `x`: `left`, `center` and `right`, and for `y`: `top`, `center` and `bottom`.

#### Example

```css
.foo {
	background-position: 50px 25px;
	background-position: left bottom;
}
```

---

## Background gradients

Besides the values above, there is also an other value possible for `background-image`: gradients.

You can set a gradient by setting the value of `background-image` to `linear-gradient(...)`.

As a minimum, the function takes 3 parameters : `direction`, `startColor`, `endColor`.

#### Example

```css
.foo {
	background-image: linear-gradient(to left, red, blue);
}
```

Multiple color stops can be added in between the start and end colors. A color stop can be paired with a position
where the color needs to be applied.

#### Example

```css
.foo {
	background-image: linear-gradient(to left, red, green, yellow, blue);
	background-image: linear-gradient(to left, red, green 10%, blue);
}
```

The direction can also be described in degrees.

#### Example

```css
.foo {
	background-image: linear-gradient(90deg, red, blue);
}
```

---

## Multiple backgrounds

A single element can have multiple backgrounds. The first one will be at the top and the last will be at the bottom.

#### Example

```css
.foo {
	background-image:
		linear-gradient(to left, yellow, blue),
		linear-gradient(to top, red, green),
		url("image.png");
}
```
