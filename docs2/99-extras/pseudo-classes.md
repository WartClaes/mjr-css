# Pseudo classes

## Forms

### `:checked`

Selects an element with the **checked** state. The selector only works with checkboxes, radiobuttons and option elements.

#### Example

```markup
<input type="checkbox" checked/>
```

```css
input:checked {
    background-color: #f00;
}
```

### `:enabled`

Selects an element with the **enabled** state.

#### Example

```markup
<input/>
```

```css
input:enabled {
    background-color: #f00;
}
```

### `:disabled`

Selects an element with the **disabled** state.

#### Example

```markup
<input disabled/>
```

```css
input:disabled {
    background-color: #f00;
}
```

### `:focus`

Selects the element that has focus.

#### Example

```markup
<input/>
```

```css
input:focus {
    background-color: #f00;
}
```

### `:in-range`

Selects an input element that is in range \(value is between the min and max\).

#### Example

```markup
<input type="number" value="9" min="0" max="10"/>
```

```css
input:in-range {
    background-color: #f00;
}
```

### `:out-of-range`

Selects an input element that is out of range \(value is not between the min and max\).

#### Example

```markup
<input type="number" value="11" min="0" max="10"/>
```

```css
input:out-of-range {
    background-color: #f00;
}
```

### `:valid`

Selects all input elements with a valid value.

#### Example

```markup
<input type="email" value="foo@bar.baz"/>
```

```css
input:valid {
    background-color: #f00;
}
```

### `:invalid`

Selects all input elements with an invalid value.

#### Example

```markup
<input type="email" value="foobar.baz"/>
```

```css
input:invalid {
    background-color: #f00;
}
```

### `:optional`

Selects all input elements that are not required \(read: don't have a required attribute\).

#### Example

```markup
<input />
```

```css
input:optional {
    background-color: #f00;
}
```

### `:required`

Selects all input elements that are required \(read: have a required attribute\).

#### Example

```markup
<input required/>
```

```css
input:required {
    background-color: #f00;
}
```

## Position

### `:first-child`

Selects every element that is the first child.

#### Example

```markup
<div>
    <span>Selected</span>
    <span>Not Selected</span>
    <span>Not Selected</span>
    <span>Not Selected</span>
</div>
<div>
    <span>Selected</span>
    <span>Not Selected</span>
</div>
```

```css
span:first-child {
    background-color: #f00;
}
```

### `:first-of-type`

Selects every element that is the first child of a given type.

#### Example

```markup
<div>
    <span>Not Selected</span>
    <span>Selected</span>
    <span>Not Selected</span>
    <span>Not Selected</span>
</div>
<div>
    <span>Selected</span>
    <span>Not Selected</span>
</div>
```

```css
span:first-of-type {
    background-color: #f00;
}
```

### `:last-child`

Selects every element that is the last child.

#### Example

```markup
<div>
    <span>Not Selected</span>
    <span>Not Selected</span>
    <span>Not Selected</span>
    <span>Selected</span>
</div>
<div>
    <span>Not Selected</span>
    <span>Selected</span>
</div>
```

```css
span:last-child {
    background-color: #f00;
}
```

### `:last-of-type`

Selects every element that is the last child of a given type.

#### Example

```markup
<div>
    <span>Not Selected</span>
    <span>Not Selected</span>
    <span>Selected</span>
    <span>Not Selected</span>
</div>
<div>
    <span>Not Selected</span>
    <span>Selected</span>
</div>
```

```css
span:last-of-type {
    background-color: #f00;
}
```

### `:nth-child(n)`

Selects an element based on the `n` parameter that is passed. For example if you pass `2` it will select the element that is the seconds child of its parent element. You're also able to select multiple elements by using the `n` keyword.

#### Example

```markup
<div>
    <p>Not Selected</p>
    <p>Selected</p>
    <p>Not Selected</p>
    <p>Not Selected</p>
</div>
```

```css
p:nth-child(2) {
    color: #f00;
}
```

#### Example Multiple Elements

```markup
<div>
    <p>Not Selected</p>
    <p>Selected</p>
    <p>Not Selected</p>
    <p>Selected</p>
</div>
```

```css
p:nth-child(2n) {
    color: #f00;
}
```

> \[TIP\] You can also work with e.g. `:nth-child(2n+1)`. This takes every second element, starting at index 1 instead of index 0

### `:nth-last-child(n)`

This selector works the same as the `:nth-child(n)` selector but starts counting from the last child.

#### Example

```markup
<div>
    <p>Not Selected</p>
    <p>Not Selected</p>
    <p>Selected</p>
    <p>Not Selected</p>
</div>
```

```css
p:nth-last-child(2) {
    color: #f00;
}
```

> \[TIP\] You can also work with e.g. `:nth-last-child(2n+1)`. This takes every second element, starting at index 1 instead of index 0

### `:nth-of-type(n)`

This selector works the same as the `:nth-child(n)` selector but only counts elements of a specific type.

#### Example

```markup
<div>
    <p>Not Selected</p>
    <div>Not Selected</div>
    <p>Selected</p>
    <p>Not Selected</p>
    <p>Not Selected</p>
</div>
```

```css
p:nth-of-type(2) {
    color: #f00;
}
```

> \[TIP\] You can also work with e.g. `:nth-of-type(2n+1)`. This takes every second element, starting at index 1 instead of index 0

### `:nth-last-of-type(n)`

This selector works the same as the `:nth-of-type(n)` selector but starts counting from the last child.

#### Example

```markup
<div>
    <p>Not Selected</p>
    <p>Not Selected</p>
    <p>Selected</p>
    <div>Not Selected</div>
    <p>Not Selected</p>
</div>
```

```css
p:nth-last-of-type(2) {
    color: #f00;
}
```

> \[TIP\] You can also work with e.g. `:nth-last-of-type(2n+1)`. This takes every second element, starting at index 1 instead of index 0

### `:only-child`

Selects every element that is the only child element of its parent element.

#### Example

```markup
<div>
    <p>Selected<p>
</div>
<div>
    <p>Not Selected</p>
    <div>Not Selected</div>
</div>
```

```css
p:only-child {
    color: #f00;
}
```

### `:only-of-type`

Selects every element that is the only child element of a given type of its parent element.

#### Example

```markup
<div>
    <p>Selected</p>
</div>
<div>
    <p>Selected</p>
    <div>Not Selected</div>
</div>
<div>
    <p>Not Selected</p>
    <p>Not Selected</p>
    <div>Not Selected</div>
</div>
```

```css
p:only-of-type {
    color: #f00;
}
```

## Other

### `:active`

Selects an element with the `active` state which basically is the element you've clicked on until you release your mouse button.

#### Example

```markup
<a class="button">Example</a>
```

```css
.button {
    background-color: #f00;
}

.button:active {
    background-color: #0f0;
}
```

### `:hover`

Selects the element that is hovered.

#### Example

```markup
<input/>
```

```css
input:hover {
    background-color: #f00;
}
```

### `:empty`

Selects every element that has no children \(including text nodes\).

#### Example

```markup
<div></div>
<div>I'm not selected</div>
<div>
    <p>
        I'm also not selected
    </p>
</div>
```

```css
div:empty {
    background-color: #f00;
    height: 30px;
}
```

### `:lang(language)`

Selects all elements that have a `lang` attribute with the given value on it.

#### Example

```markup
<p lang="en">This is english</p>
```

```css
p:lang(en) {
    background-color: #f00;
}
```

### `:link`

Selects all unvisited links.

#### Example

```markup
<a href="http://www.euri.com">A Website</a>
```

```css
a:link {
    background-color: #f00;
}
```

### `:not(selector)`

This selector allows you to exclude another selector.

#### Example

```markup
<a class="example">Selected</a>
<p class="example">Not Selected</p>
```

```css
.example:not(p) {
    color: #f00;
}
```

### `:read-only`

Selects all elements that are read-only \(read: have a readonly attribute\)

#### Example

```markup
<input readonly/>
```

```css
input:read-only {
    background-color: #f00;
}
```

### `:read-write`

Selects all elements that are not read-only \(read: don't have a readonly attribute\).

#### Example

```markup
<input />
```

```css
input:read-write {
    background-color: #f00;
}
```

### `:root`

Selects the root element of the document. The example underneath will select the `<html>` element.

#### Example

```markup
<html>
    <body>
        <p>Hello world</p>
    </body>
</html>
```

```css
:root {
    background-color: #f00;
}
```

### `:target`

Selects the element with the same ID as the URL anchor.

#### Example

URL: [http://euri.com/\#article-2](http://euri.com/#article-2)

```markup
<div id="article-1">Not Selected</div>
<div id="article-2">Selected</div>
```

```css
div:target {
    background-color: #f00;
}
```

### `:visited`

Selects all visited links.

#### Example

```markup
<a href="http://www.google.com">A Website</a>
```

```css
a:visited {
    background-color: #f00;
}
```

### `:is` / `:matches`

Takes a selector list as its argument. It selects all elements that match one of the selectors in that list.

#### Example

```markup
<a href="http://www.google.com">A Website</a>
```

```css
a:visited {
    background-color: #f00;
}
```

### :fullscreen

This selector matches every element which is currently in full-screen mode.

#### Example

```markup
<button>Toggle fullscreen</button>
```

```css
button:not(:fullscreen) {
    color: #0f0;
}

button:fullscreen {
    color: #f00;
}
```

