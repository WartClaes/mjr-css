# 7.3 CSS in web components

With the introduction of web components, we also got the Shadow DOM specification of DOM tree encapsulation.

The general idea is to have "private" bits of code that the user does not need to adapt in orde to make the element work.
We are in this case only interested in `style encapsulation`.

It is the native implementation of what we try to reach with a coding guideline like BEM. We try scope the styling purely
based on naming conventions. On the other hand we use CSS-in-JS, but still, it isn't the native implementation of what
we want and the way to reach is tool specific.

## Shadow DOM

Shadow DOM is not something new. Elements like `<input>` already use this for a long time. Now it just widely available
for everyone.

The easiest way to create an element with a Shadow DOM is the following:

```html
<h3>Other title</h3>
<div>Light DOM</div>
```

```javascript
const root = document.querySelector('div').attachShadow({
	mode: 'closed'
});

root.innerHTML = '<style>h3 { color: red; }</style><h3>Shadow DOM</h3>';
```

You notice that the `<h3>` outside the shadow root is still `black`, allthough we didn't scope the selector in the
shadow root. Browser parse these with a special style resolver so it doesn't need to concider the rest of the styling.

The only noticable downside to using Shadow DOM is browser compatibility. But hey, that is how CSS works 🤷‍♂️.
