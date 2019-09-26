# 1.2 Selectors

In this chapter we will learn how to write CSS Selectors and find out how powerfull these selectors are.

## Content

* [Basic selectors](1-2-selectors.md#basic-selectors)
* [Attribute selectors](1-2-selectors.md#attribute-selectors)
* [Pseudo classes](1-2-selectors.md#pseudo-classes)
* [Pseudo elements](1-2-selectors.md#pseudo-elements)
* [Combining selectors](1-2-selectors.md#combining-selectors)

---

## Basic Selectors

### Element Selectors

Selects all elements of the given type.

#### Example

```markup
<p>Example</p>
```

```css
p {
    background-color: #f00;
}
```

### Class Selectors

Selects all elements with the given class. The selector is prefixed with a dot `.`, followed by the classname.

#### Example

```markup
<p class="foo">Example</p>
```

```css
.foo {
    background-color: #f00;
}
```

### ID Selectors

Selects all elements with the given ID. There should only be one element on the page that has this ID. The selector is prefixed with a hashtag `#`.

#### Example

```markup
<p id="foo">Example</p>
```

```css
#foo {
    background-color: #f00;
}
```

### Universal selector

The universal selector is the power selector, able to select all elements on the page.

#### Example

```markup
<p id="foo">Example</p>
<div id="bar">Example 2</div>
```

```css
* {
    background-color: #f00;
}
```

---

## Attribute Selectors

The attribute selectors allow you to select elements with specific attributes. The selector is extended with some very usefull features.

### Has attribute

`[attr]`: Selects all elements that have this attribute.

#### Example

```markup
<div data-attr="foo"></div>
```

```css
[data-attr] {
    background-color: #f00;
}
```

### Equals

`[attr="val"]`: Selects all elements that have this attribute with the given `val`.

#### Example

```markup
<div data-attr="foo"></div>
```

```css
[data-attr="foo"] {
    background-color: #f00;
}
```

### Space separated list

`[attr~="val"]`: Selects all elements that have this attribute and where `val` is part of the space separated list.

#### Example

```markup
<div data-attr="here is an example of a selector"></div>
```

```css
[data-attr~="example"] {
    background-color: #f00;
}
```

### Dash separated list

`[attr|="val"]`: Selects all elements that have this attribute and where `val` is part of the hyphen \(`-`\) separated list.

#### Example

```markup
<div data-attr="the-example-selector"></div>
```

```css
[data-attr|="example"] {
    background-color: #f00;
}
```

### Starts with

`[attr^="val"]`: Select all elements that have this attribute and the value starts with `val`.

#### Example

```markup
<div data-attr="foo"></div>
```

```css
[data-attr^="fo"] {
    background-color: #f00;
}
```

### Ends with

`[attr$="val"]`: Select all elements that have this attribute and the value ends with `val`.

#### Example

```markup
<div data-attr="example"></div>
```

```css
[data-attr$="ample"] {
    background-color: #f00;
}
```

### Substring

`[attr*="val"]`: Select all elements that have this attribute and the value contans the substring `val`.

#### Example

```markup
<div data-attr="example"></div>
```

```css
[data-attr*="am"] {
    background-color: #f00;
}
```

---

## Pseudo classes

A pseudo class is a selector used to select an element in a certain state or context. For example selecting all disabled input elements or hovered buttons can be done with pseudo classes

> \[TIP\] It is highly recommended to prefix these selectors with only one semicolon.

Since pseudo classes are available in large amounts, the explanation of each pseudo class [can be found here](../99-extras/pseudo-classes.md).

---

## Pseudo elements

There are only a few pseudo element selectors, these selectors allow you to access parts of your document without having to add extra classes or elements. These elements are not present in the DOM, but only in the render tree, which has the drawback that they can't be selected with JavaScript.

> \[TIP\] It is highly recommended to prefix these selectors with two semicolons, this to avoid confusing them with the Pseudo Class Selectors.

### `::after`

This selector allows you to target the part after your element. This can be very useful when you want to append something to every instance of a selector.

#### Example

```markup
<p>Hello, </p>
```

```css
p::after {
    content: 'world!';
    font-weight: bold;
}
```

### `::before`

This selector allows you to target the part before your element. This can be very useful when you want to prepend something to every instance of a selector.

#### Example

```markup
<p>world</p>
```

```css
p::before {
    content: 'Hello, ';
    font-weight: bold;
}
```

### `::first-letter`

This selector allows you to target the first letter of your element.

#### Example

```markup
<p>Hello, world!</p>
```

```css
p::first-letter {
    font-size: 20px;
    font-weight: bold;
}
```

### `::first-line`

This selector allows you to target the first line of your element.

#### Example

```markup
<p>Hello,<br/> world!</p>
```

```css
p::first-line {
    font-size: 20px;
    font-weight: bold;
}
```

### `::selection`

This selector allows you to target the selected text of your element. You are only able to set following CSS properties: `color`, `background`, `cursor`, `outline`.

#### Example

```markup
<p>Hello, world!</p>
```

```css
p::selection {
    color: #fff;
    background: #f00;
}
```

### `::backdrop`

Each element in the top layer's stack has a `::backdrop` pseudo-element. This pseudo-element is a box rendered immediately below the element \(and above the element below the element in the stack, if any\), within the same top layer.

The `::backdrop` pseudo-element can be used to create a backdrop that hides the underlying document for an element in the top layer's stack, e.g., for the element that is displayed fullscreen as described by this specification.

[Example](http://demo.agektmr.com/dialog/)

---

## Combining selectors

To understand how CSS selectors work, you must first know how the browser applies CSS to the different elements inside your DOM. For every element inside your DOM, the browser will check every selector to see if it matches the element.

To do that the browser starts matching the selector on the right hand side, making the process of matching all selectors much more performant. If the browser would start on the left hand side it would have to check every selector entirely.

```css
/*
 the CSS parser will read this starting from the right.
 first it will collect all divs, then all divs in .quux, then all divs in .baz
 who are also in .bar and so on.
*/
.foo .bar .baz. .quux div {
    // ...
}
```

### Selector list

List of multiple selectors. Applying the style on all elements that match one or more of the selectors/

#### Example

```markup
<div class="foo">yep</div>
<div class="bar">yep</div>
<div class="baz">nope</div>
```

```css
.foo, .bar {
    color: #f00;
}
```

### Selector Combinators

Combinators are the CSS way to combine multiple selectors. The most common combinator is the space between two selectors, which will result in a descendant selector. But CSS also comes with some more advanced combinators:

### Descendant Selector

The descendant selector matches all elements that are descendants of a specified element.

#### Example

```markup
 <div class="example">
     <p>
         Example
     </p>
 </div>
```

```css
.example p {
    background-color: #f00;
    padding: 10px;
}
```

### Child Selector

The child selector selects all elements that are the immediate children of a specified element.

#### Example

```markup
 <div class="example">
     <span>
         <span>
             Example
         </span>
     </span>
 </div>
```

```css
span {
    background-color: blue;
}

.example > span {
    background-color: #f00;
    padding: 10px;
}
```

### Adjacent Sibling Selector

The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element. Sibling elements must have the same parent element, and "adjacent" means "immediately following".

#### Example

```markup
<div>
    <p class="example">Example</p>
    <p>Selected</p>
    <p>Not Selected</p>
</div>
```

```css
.example + p {
    background-color: #f00;
    padding: 10px;
}
```

### General Sibling Selector

The general sibling selector selects all elements that are siblings of a specified element.

#### Example

```markup
<div>
    <p class="example">Example</p>
    <p>Selected</p>
    <p>Selected</p>
</div>
```

```css
.example ~ p {
    background-color: #f00;
    padding: 10px;
}
```

