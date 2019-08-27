# 3.5 Positioning

CSS positioning is one of the most used parts of CSS. Positioning an element is done by the `position` property.
An element is positioned according their calculated position.

## Content

- [Static](#static)
- [Relative](#relative)
- [Absolute](#absolute)
- [Fixed](#fixed)
- [Sticky](#sticky)
- [Top bottom right left](#top-bottom-right-left)
- [z-index](#z-index)

---

## Static

Elements are by default `static`, which means that they are positioned according the normal flow of the document.

`top`, `right`, `bottom`, `left` and `z-index` properties have no effect on these elements.

---

## Relative

When an element has `position: relative` it acts as if it has no positioning at all. It changes its positioning but it
does not change the surrounding layout.

---

## Absolute

`Absolute` means that it does not reserve space for the element. Instead, it becomes relatively positioned to its
closest positioned parent. If this parent does not exist it uses the initial container.

---

## Fixed

As the `absolute` positioning, this does not leave space for the element. The positioning is relative to the viewport
and stays on the same location when the page is scrolled. When applying this value a new stacking context is created.

Note: when printed, this element repeats on every page.

---

## Sticky

The positioning is handled as relative until the element crosses a certain point, at which is is considered as fixed.

For example a title in the page has the following css:

```css
.bar {
    position: sticky;
    top: 30px;
}
```

The element is positioned relative until the viewport scroll that the element would be less then 30px from the top.
From that moment on the element would be position fixed at 30px from the top.

In order for this to work one of `top`, `right`, `bottom` or `left` should be set on the element. Otherwise it remains relative.

---

## Top bottom right left

`top`, `bottom`, `left`, and `right` are used alongside position to specify exactly where to move the positioned element to.

```css
.foo {
	left: 30px;
	top: 30px;
}
```

---

## z-index

`z-index` comes to the rescue when elements start overlapping each other.

By default the order of the element in the browser define the visble order. The later the element appears in the HTML,
the 'higher' it will be shown.

By setting the `z-index` you can overrule the stacking order. It accepts a unitless value.

#### Example

```css
.foo {
	z-index: 1;
}
```
