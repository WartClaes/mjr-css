# 1.1 Syntax

In this chapter we explain the syntax used in CSS.

## Content

* [Introduction](1-1-syntax.md#introduction)
* [Anatomy](1-1-syntax.md#anatomy)
* [Comments](1-1-syntax.md#comments)
* [Shorthands](1-1-syntax.md#shorthands)

---

## Introduction

CSS is a declarative language which makes it fairly easy to understand. It is also nice to you as it does not break on error, so your page is not completely broken when you make a small mistake. On the other hand it makes it harder to spot the issues because you don't see anything wrong.

CSS does not really care about spaces, tabs or newlines. But it is a good practice to add those to make yout code more readable.

---

## Anatomy

```css
[selector] {
    [property]: [value];
    [<--declaration--->]
}
[<--------rule-------->]
```

```css
p {
    background-color: #f00;
}
```

When looking at the CSS above we can specify the different parts of a CSS file.

* `p` is a selector
* `background-color` is a property
* `#f00` is a value
* `background-color: #f00;` is a declaration

---

## Comments

Comments in CSS are done like this:

```css
/* Put your comment here */
```

But since CSS is a nice guy and ignores everything that is invalid, it does not complain about other ways of commenting such as `//` or `<!-- -->`.

---

## Shorthands

For some properties like `margin`, `padding`, `background`, `font` and `border` you can use shorthand notations to set several property values in a single line.

When values are omitted from a shorthand form, unless otherwise defined, each "missing" sub-property is assigned its initial value. For example, writing `background: green` rather than `background-color: green` ensures that the background color overrides any earlier declarations that might have set the background to an image with background-image.

```css
.foo {
  margin: top right bottom left;
  margin: top rightLeft bottom;
  margin: topBottom rightLeft;
  margin: topBottomRightLeft;
}
```

### Example

The following code examples have the same style output

```css
.foo {
    background: hotpink url("image.png") 10px 10px no-repeat fixed;
    padding: 10px 20px 30px 40px;
}
```

```css
.foo {
    background-color: hotpink;
    background-image: url("bg-graphic.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    background-attachment: fixed;

    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

