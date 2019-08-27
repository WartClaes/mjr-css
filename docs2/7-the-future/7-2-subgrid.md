# 7.2 Subgrid

Level 2 of CSS Grid includes a subgrid, a value for `grid-template-columns` and `grid-template-rows`.


## The issue

Adding `display: grid` on a container allow the direct children to be part of that grid as items. Children of these
items follow the normal flow.

You can create a new grid inside your grid item, completely independant of it's parents grid. This results in the fact
that they don't follow the track of the parent grid, which makes it hard to align the nested grid with the main grid.

---

## The fix

By setting `subgrid` on either `grid-template-columns`, `grid-template-rows` or both, the child grid will use the parents
grid tracks as columns/rows.

#### Example

```html
<div class="grid">
	<div class="item">
		<div class="subitem"></div>
	</div>
</div>
```

```css
.grid {
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
	display: grid;
	grid-column: 2 / 7;
	grid-row: 2 / 4;
	grid-template-columns: subgrid;
	grid-template-rows: repeat(3, 80px);
}

.subitem {
	grid-column: 3 / 6;
	grid-row: 1 / 3;
}
```

### autoplacing items

When autoplacing an unspecified number of items in a subgrid it is possible that it will prevent additional rows being
created since it's parents tracks won't allow it.

### Gaps

When the parent grid has `gap` properties, the child grid will inherit them the same spacing. These properties can be
overridden in the `subgrid`.
