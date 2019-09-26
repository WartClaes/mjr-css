# 7.4 Selectors level 4

In this chapter we will go over some of the new selector types that will be introduced with the Level 4 specification.

## :not(s1, s2, ...)

Until now, the `:not` psuedo class only allowed 1 parameter to be passed into the class. Now you can add multiple values.

The specificity of `:not` will be determined by the most specific selector in the list.


## :is(s1, s2, ...)

The opposite of `:not`. It targets all elements that match any of the parameters passed into the pseudo class.

```css
*:is(:hover, :focus) { ... }
```


## :where(s1, s2, ...)

`:where` is a specificity-adjustment pseudo class. This means that none of it's arguments add to the selector specificity. It is used to indicate the intent of the developer

```css
a:not(:hover) {
  text-decoration: none;
}

nav a {
  /* Has no effect */
  text-decoration: underline;
}
```

```css
a:where(:not(:hover)) {
	text-decoration: none;
}

nav a {
	/* Works now! */
	text-decoration: underline;
}
```


## :has(rs1, rs2, ...)

This pseudo class will target elements that have one of the given parameters as children.

```css
a:has(> img) { /* target only a tags with a img descendant */ }

section:not(:has(h1, h2, h3, h4, h5, h6)) { ... }
```


## Case sensitivity

When using an attribute selector you will have the option to provide a case sensitivity indicator. `i` means case insensitive and `s` means case sensitive.

```css
[type=foo i] { ... }
[type="BAR" s] { ... }
```


## :any-link

A pseudo class that represents an element that acts as an anchor for a hyperlink. It would match an element if that element would match either `:link` or `:visited`.


## :local-link

This pseudo class allows to style hyperlinks that have the same base url as the document.

```css
:local-link { text-decoration: none; }
```


## :target

With this pseudo class you can set styling on the pages current target. This means that if you have a fragment set in you url `foo.bar/index.html#baz`, the element with id `baz` will be used.

```css
:target { color: hotpink; }
```
