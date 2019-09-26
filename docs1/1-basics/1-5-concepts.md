# 1.5 Concepts

In this part we will cover some of the core concepts of CSS. These are the fundamentals of CSS.

## Content

* [Cascade](1-5-concepts.md#cascade)
* [Specificity](1-5-concepts.md#specificity)
* [Source order](1-5-concepts.md#source-order)
* [Inheritance](1-5-concepts.md#inheritance)

---

## Cascade

In CSS, styles are applied from top to bottom, allowing styles to be added or overridden. Because browsers already put some default styles on a number of selectors, you use this phenomenon the entire time.

For example: a browser defines that a `strong` tag need to be bold, but you can still overwrite the style with your own by just targetting `strong`

### Example

```css
p {
  background: #f00;
  background: #0f0;
}

p {
  background: #00f;
}
```

In the example above the background of the `p` will be `#00f`.

---

## Specificity

There are five levels of specificity in CSS:

* CSS rules followed by `!important`
* Inline CSS using the `style` attribute
* `ID` Selectors
* `Class` Selectors \(also includes pseudo class selectors and `attribute` selectors\)
* `Element` Selectors \(also includes pseudo element selectors\)

To find out if your selector is more specific than another selector the guys of [css-tricks](http://www.css-tricks.com) came up with following formula:

You start with five zero's, one for each level of specificity and then for every part of your selector you increase the zero of the corresponding level. Eventually the selector with the highest specificity score will win. If both selectors have an equal specificity, the cascading rule applies.

| !important | inline | id | class | element |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 0 | 0 | 0 | 0 |

Best practise is to use class selectors as much as possible. You often don't want to style every element of a certain type but you do want to target more than one element, therefor class selectors are the appropriate selectors in most cases.

### Example

```css
div {
    /* 0 0 0 0 1 */
    color: #0f0;
}

.foo {
    /* 0 0 0 1 0 */
    color: #f00;
}

#bar {
    /* 0 0 1 0 0 */
    color: #00f;
}

#bar.foo {
    /* 0 0 1 1 0 */
    color: #bada55;
}
```

```markup
<p id="bar" class="foo">I am #bada55.</p>
```

---

## Source order

The source order in CSS also plays an important role in the parsing of the CSS.

If properties with the same importance exist, the last one will always win. It explains the: "I will put my new CSS at the bottom of the file to be sure".

---

## Inheritance

Apart from cascading, inheritance is the phenomenon that elements inherit properties without being explicitly defined in the CSS. For example if you set the `font-size` of a `div` on `14px`, all the `p` inside this `div` will inherit that `font-size` of `14px`.

Which properties are inherited is down to common sense. For some properties it is illogic to inherit properties such as backgrounds, borders, paddings, ... On the other hand it makes sense that if you define a `font-family` on the `<html>` tag, you want it applied to everything inside that element.

A complete list of which properties are inherited can be found [in the W3 specification](http://www.w3.org/TR/CSS21/propidx.html).

### Example

```css
div {
    font-size: 14px;
}
```

```markup
<div>
    I have a font-size of 14px.
    <p>
        But so have I!
    </p>
</div>
```

