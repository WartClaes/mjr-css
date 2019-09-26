# 1.3 Values and units

In CSS there are a large amount of value types. Ranging from numerical values to functions. Some are more common then others, but we will take a look at all of them here.

## Content

* [Colors](1-3-values-and-units.md#colors)
* [Numeric](1-3-values-and-units.md#numeric)
* [Variables](1-3-values-and-units.md#variables)
* [Functions](1-3-values-and-units.md#functions)

---

## Colors

There are a number of ways to set colors in CSS. These values can always be used in all places where colors can be set.

### Keyword

First we have the **Keyword Colors**. These are names mapped to a specific value, specified by the W3C\).

Examples are: `black`, `white`, `red`, `green`, `blue`, `hotpink`, ...

Because of the limited use \(there are give or take 165 keyword colors\) it isn't the required way of working.

#### Example

```css
p {
    color: hotpink;
}
```

There are 2 special keywords. The first is `transparent` which, as the keyword says, sets the color to transparent. Technically it is a shorthand for `rgba(0,0,0,0)`.

The second keyword is `currentColor`. It represents the value of the elements `color` property so you can use it on other properties of the same element.

### Hexadecimal \(\#RRGGBB\[AA\]\)

Next we have Hexadecimal Colors. The are a combination of a hash \(`#`\) and three or six characters. The possible characters are `0` through `9` and `a` through `f`.

The first 2 characters represent the red value, the third and fourth green and the last ones blue. When you have a repeating value eg. `#ff00ff`, you can shorthand it to `#f0f`. This way of working is the most common one, mainly because it has 16,7 million different colors.

Recently the hexadecimal notation is extend with an alpha channel, allowing 8 instead of 6 characters, where the last 2 define the alpha of the color. It's shorthand look like `#f00a`, resulting in `#ff0000aa`;

#### Example

```css
p {
    color: #bada55;
    background: #f00;
}
```

### RGB & RGBa

Red, Green & Blue values each accept a value from `0` to `255` where `0` is `black` and `255` is `white`.

It may also include an alpha by using `rgba()`. The fourth parameter will be the transparency, ranging from `0` to `1`.

These colors are gaining popularity mainly because of the `rgba()` syntax.

#### Example

```css
p {
    color: rgb(255, 133, 133);
    background: rgba(255, 133, 133, .75);
}
```

### HSL & HSLa

The syntax is similar to the `rgb()` and `rgba()` syntax, but recieves values for Hue, Saturation and Lightness.

#### Example

```css
p {
    color: hsla(0, 100%, 25%);
    background: hsla(0, 100%, 25%, .25);
}
```

These colors aren't widely used. It is useful though for creating shades of a single color.

### Properties

Colors are used at various places in CSS, underneath you'll find a brief summary of these properties.

* `color`: sets the font color
* `background-color`: sets the background color
* `border-color`: sets the border color
* `box-shadow`: you can use color variables inside the box-shadow to set the color of the shadow
* `text-shadow`: you can use color variables inside the text-shadow to set the color of the shadow
* `text-decoration-color`: sets the color of the text decoration, for example a line underneath your text
* `text-stroke-color`: sets the color of the stroke around your text if a text stroke is specified

---

## Numeric

Like with the colors there are number of different numeric values. They are divided into two groups, absolute and relative units. In this chapter we will find out all about these units.

### Absolute units

The most known absolute length unit in CSS is `px`. For regular screens, one pixel is one dot of the screen. With newer, eg retina, screens and print it is a combination of several pixels that represent roughly the same density as regular screens \(96 pixels per inch\).

The other absolute units are `mm`, `cm`, `in`, `pt` and `pc`, but these are less used because they have no real relationship to a screen. For example `1in` is alway `96px`, but it isn't a real inch.

### Relative units

At the side of the relative units, there is a difference between font based values and viewport percentage values.

The `em` is the most frequently used font based value. It represents the font-size of the element, or when used in the font-size property, it represents the inherited font-size.

Others are `ex`, `ch` and `rem`. The last one represents the font-size of the root element, in our case `<html>`.

On the other hand we have the viewport percentage values. These values were introduced with CSS3 and are not everywhere implemented as they should be. Only Gecko browsers update the values on resizing the screen.

The values you can use are `vh` and `vw`, which represent 1% op either the viewport height or width. Values `vmin` and `vmax` represent 1% of the minimum value between the height and the width of the viewport.

### Unitless

Sometimes unitless variables are present in CSS. In some circumstances this is perfectly valid CSS.

#### Example

```css
.foo {
    /* setting a value to 0 is always valid without a unit since 0px and 0em has the same outcome */
    margin: 0;

    /* unitless line-height represent a multiplying factor based on the inherited line-height */
    line-height: 1.5;

    /* in case of animation counts it is just a simple number that sets the how many times the animation should play */
    ...
    animation-iteration-count: 5;
}
```

### Percentages

Percentage values are accepted for most properties that use numeric values. It is usefull for creating layouts where the element should respond on the size of the parent like in responsive webdesign.

#### Example

```css
.foo {
    width: 50%;
}
```

---

## Variables

CSS also provides a way to set variables and re-use/re-assign them on the fly. We will talk about them some more in a later topic.

#### Example

```css
:root {
    --somecolor: #f00;
}

.foo {
    color: var(--somecolor);
}
```

---

## Functions

CSS, just like other programming languagesz has functions. Some of them were already used for the colors such as `rgb()` and `hsl()` but others are available.

#### Example

```css
.foo {
    /* calculate the new position of an element after it has been rotated by 45 degress */
    transform: rotate(45deg);

    /* calculate the new position of an element after it has been moved across 50px and down 60px */
    transform: translate(50px, 60px);

    /* calculate the computed value of 90% of the current width minus 15px */
    width: calc(90% - 15px);

    /* fetch an image from the network to be used as a background image */
    background-image: url("myimage.png");

    /* create a gradient and use it as a background image */
    background-image: linear-gradient(to left, teal, aquamarine);
}
```

