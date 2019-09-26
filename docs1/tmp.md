# Scoped selectors

There is a Working Draft in CSS that specifies scoped selectors. These selectors are used to target a subtree of a document. The best known example is the usage in a webcomponent.

The draft includes scoped selectors, shadow DOM selectors and fragmented styling. We are only going to include shadow DOM since this is the one that will be used the most even though it is still a W3C draft.

## Shadow DOM

A shadow tree is a part of a document that is attached to any element in the DOM. The root of this tree is called the **shadow root**. One element can have multiple shadow trees. An element containing a shadow tree is a **shadow host**.

The descendents of the shadow host are generated inside the content of the element itself.

`:host` and `:host()`

The `:host` pseudo class targets the shadow host element. When using `:host()` function pseudo class a selector should be passed as an argument.

If the element is part of a shadow tree, the host element is used, otherwise it matches the selector argument.

```css
:host {
    background-color: hotpink;
}

:host(.foo) {
    background-color: #f00;
}
```

`/deep/`

The `/deep/` combinator targets every element reachable from the original element down to the child lists or shadow trees. This way you can write selectors for elements inside a shadow tree. Is is basically a super-descendant combinator.

```css
.foo /deep/ .bar {
    background-color: darkkhaki;
}
```

