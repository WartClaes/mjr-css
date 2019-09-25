# 7.3 CSS in web components

With the introduction of web components, we also got the Shadow DOM specification of DOM tree encapsulation.

The general idea is to have "private" bits of code that the user does not need to adapt in orde to make the element work.
We are in this case only interested in `style encapsulation`.

It is the native implementation of what we try to reach with a coding guideline like BEM. We try scope the styling purely
based on naming conventions. On the other hand we use CSS-in-JS, but still, it isn't the native implementation of what
we want and the way to reach is tool specific.

## Content

- [Shadow DOM](#shadow-dom)
- [Component defined styling](#component-defined-styling)
- [:host](#host)
- [Slots](#slots)
- [Outside styling](#outside-styling)
- [Tips](#tips)

---

## Shadow DOM

Shadow DOM is not something new. Elements like `<input>` already use this for a long time. Now it just widely available
for everyone.

The easiest way to create an element with a Shadow root is the following:

```html
<h3>Other title</h3>
<div class="shadow">Light DOM</div>
```

```javascript
const root = document.querySelector('.shadow').attachShadow({
	mode: 'open'
});

root.innerHTML = `
	<style>h3 { color: red; }</style>
	<h3>Shadow DOM</h3>
`;
```

You notice that the `<h3>` outside the shadow root is still `black`, allthough we didn't scope the selector in the
shadow root. Browser parse these with a special style resolver so it doesn't need to concider the rest of the styling.

The only noticable downside to using Shadow DOM is browser compatibility. But hey, that is how CSS works 🤷‍♂️.

---

## Component defined styling

When applying styles inside the shadow DOM, any styles from the outside won't be applied to the elements inside the component. In the other direction, the styles defined inside the it don't bleed outside of the component.

This has the advantage that you don't need lengthy selectors to specify that you only want these elements targetted, thus increasing the performance of those selectors.

```html
#shadow root
	<style>
		.foo {
			color: #f00;
		}
	</style>
	<div class="foo">
		...
	</div>
```

The same goes for complete stylesheets

```html
#shadow root
	<link rel="stylesheet" href="style.css">
	<div class="foo">
		...
	</div>
```

---

## :host

Now we know how to apply styling to elements inside the component, we might need to set some styles on the shadowed element itself. This element is called the `host`. It can be targetted by using the `:host` selector.

```html
#shadow root
	<style>
		:host {
			/* By default custom element are displayed inline */
			display: block;
		}
	</style>
```

Keep in mind that styles applied to the element from the outside get a higher specificity then `:host` so the user can override the styles easily.

By passing an argument to the host selector you can target your host when it matches a specific selector.

```html
#shadow root
	<style>
		:host {
			display: block;
			will-change: opacity;
		}

		:host(:hover) {
			background-color: hotpink;
		}

		:host([disabled]) {
			background-color: #ccc;
			opacity: .4;
		}

		:host(.cyan) {
			background-color: cyan;
		}
	</style>
```

But the magic continues. The host can also be targetted when it is used inside a specific context. By using `:host-context(<selector>)` the styling will be applied when the component is an ancestor of an element that matches the given selector.

```html
#shadow root
	<style>
		:host {
			background-color: white;
		}

		:host-context(.darkmode) {
			background-color: #444;
		}
	</style>
```

```html
<body class="darkmode">
	<foo>
	</foo>
</body>
```

---

## Slots

`<slot>` is an element that allows you to place user content inside your elements shadow DOM. It allows for custom content inside your scoped element.

These slot's are not moved inside the actual shadow DOM, but they are rendered in the correct location.

They can be empty and provide fallback content so the user is not required to set them in the light DOM.

You can also create named slots so multiple slot locations are possible.

```html
#shadow root
	<div class="toybox">
		<slot>
			No toys found in toybox
		</slot>
	</div>
	<div class="bed">bed
		<slot name="bed">No toys found on the bed</slot>
	</div>
```

```html
<room>
	<img src="rex.png">
	<img src="woody.png" slot="bed">
	<span slot="bed">
		<span class="name">alien</span>
	</span>
</room>
```

By using `::slotted(<selector>)` you can style elements inside the `<slot>`.

```html
#shadow root
	<style>
		#slot::slotted(span) {
			font-weight: bold;
		}
	</style>
```

Keep in mind that because the element is not moved inside the shadow DOM, it still has the styling applied from the light DOM. Those elements can recieve additional styling from inside the shadow DOM.

An additional downside to the `::slotted` pseudo class is that it only works on top level classes. You can't use a class of a descendant (like `.name` in the example above).

---

## Outside styling


### Element styling

The easiest way to apply styles to a shadowed element is by applying it to the element itself. These styles have a higher specificity then the ones inside the `:host` selector.

```css
x-foo {
	background-color: red;
}

x-foo:hover {
	box-shadow: 2px 2px 2px rgba(0, 0, 0, .2);
}
```

But this only allowes you to style the root element. How can you style internal elements?


### Custom properties

One way to do this is using CSS custom properties. By creating variables that can be overridden from inside the light DOM, you still have control over the restyled elements.


```css
#light DOM
	x-foo {
		--x-foo-background: red;
	}
```

```css
#shadow DOM
	:host {
		background-color: var(--x-foo-background, blue);
		border-radius: 10px;
	}
```


### ::part & ::theme

In previous versions of the specification we had selectors such as `/deep/` and `:shadow` to target elements inside the shadow DOM. These came with a lot of downsides such as complete loss of control for which items are styleable and which aren't.

So they introduced a new set of pseudo elements to get around this problem.


#### ::part

With the `::part` psuedo element you can tell the user which parts of the shadow DOM can be custom styled.

```html
<x-foo>
	#shadow root
		<div part="some-box">...</div>
		<span part="some-text">...</span>
		<div>...</div>
</x-foo>
```

```css
x-foo::part(some-box) { ... }
x-foo::part(some-box):hover { ... }
```

It won't work to target children of the part or to target a part of an element that sits inside an other custom element.

```css
x-foo::part(some-box) span { /* won't work */ }
```

```html
<x-bar>
	#shadow root
		<x-foo></x-foo>
</x-bar>

<style>
	x-bar::part(some-box) { /* won't work */ }
</style>
```

To resolve the last issue, it will be possible to forward parts to other elements.

```html
<x-bar>
	#shadow-root
    	<x-foo part="* => bar-*"></x-foo>
</x-bar>
```

```css
x-bar::part(bar-some-box) { ... }
```

The code above forwards all parts with the additional prefix of `bar-`. It is not possible to forward them without the prefix (`exportparts="* => *"`) since it can break when updating `x-foo`.

It is also allowed to keep the same name, but then you need to specify them all:

```html
<x-bar>
	#shadow-root
		<x-foo exportparts="some-text => some-text, some-box => some-box"></x-foo>
</x-bar>
```

So if you want all your texts in all different components styled the same way, you could do something like this:

```html
<submit-form>
	#shadow-root
    	<x-form exportparts="some-text => some-text, some-box => some-box">
      		#shadow-root
        		<x-bar exportparts="some-text => some-text, some-box => some-box">
          			#shadow-root
            			<x-foo exportparts="some-text => some-text, some-box => some-box"></x-foo>
        		</x-bar>
		</x-form>
</submit-form>
```

```css
:root::part(some-text) { ... }
```

But as you can notice it is a lot of work for the person who creates the component to keep on going like this. So `::theme` to the rescue,

> `-*` forwarding is currently not in the spec. The code above is how it could work.

> Chrome 69 shipped with ::part working behind a flag (CSSPartPseudoElement), without the `-*` forwarding. The forwarding is done with `part` instead of `exportparts`.


#### ::theme

`::theme` matches all the parts with that name, no matter how deep it is nested. So if you wouldn't forward the parts, you could do the following:

```html
<x-bar>
	#shadow-root
		<x-foo></x-foo>
		<x-foo></x-foo>
		<x-foo></x-foo>
</x-bar>
```

```css
x-bar::theme(some-text) { ... }
```

> At the moment `::theme` is removed again from the proposed spec, but can still be re-introduced

---

## Tips


### CSS Containment

CSS containment is a property that let's developers limit the scope of the browser style.

It gives the developer the power to tell the browser what part of the DOM should be repainted.

It exists of 4 values (`layout`, `paint`, `size` and `style`) and 2 keywords (`content` and `strict`).


#### Layout

When layout containment is enabled, you tell the browser not to worry if you change for example the `left` property of the element. Normally it should recalculate the position of all other elements, but this way you turn it of.


#### Paint

Paint containment indicates that none of it's decendants will be visible outside of the containing element. It will clip the element in question.

Other then that is has some side effects;

* It acts as a containing block for `absolute` and `fixed` elements
* It starts a new stacking context
* It becomes a new formatting context, meaning it won't affect anything outside it's box.


#### Size

This means that the element's children won't affect the size of the containing element. So if you would use `contain: size` but don't specify `width` or `height`, the element would render at 0px by 0px.


#### Style

It scopes the effect that a property can have to only the element itself and it's childeren.

One of the most clear examples is CSS counts, which can affect a value anywhere else in the DOM.

It does not provide the same scoped styling as shadow DOM.


#### Strict

Strict combines `size`, `layout` and `paint`.


#### Content

Content combines `layout` and `paint`. This is the one you should use by default. It provides a lot of performance improvements without de downside of having to know the dimensions of the box on before hand, which is needed with `strict`.


### Resetting inheritable styles

Inhertibale styles keep on inheriting inside the shadow DOM. So if you want to restart the inheritance with the default values, set `all: initial` on your `:host`.

[codepen](https://codepen.io/WartClaes/pen/vYBermO?editors=1000)

```html
<style>
	div {
		padding: 10px;
		background: red;
		font-size: 25px;
		text-transform: uppercase;
		color: white;
	}
</style>
<div>
	<p>I'm outside the element (big/white)</p>
	<my-element>Light DOM content is also affected.</my-element>
</div>

<script>
const el = document.querySelector('my-element');
el.attachShadow({mode: 'open'}).innerHTML = `
	<style>
		:host {
			/* 1st rule so subsequent properties are reset. */
			all: initial;
			display: block;
			background: white;
		}
	</style>
	<p>
		resetted values with all: initial.
	</p>
`;
</script>
```
