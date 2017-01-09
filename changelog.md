# change log


## 0.8.3

Fix for *CheckGroup*'s initial value.


## 0.8.2

Possibility to provide the id prop for *Button*, *CheckGroup*, *Radio*, *Select*, *Spin*, *Textarea* components.

Fix. Added possibility to provide the appropriate props for link.

Possibility to disable particular options for the *CheckGroup*.


## 0.8.1

Tumbler height and margin issues fix.


## 0.8.0

Changed dimensions for all components. `s|m|l` sizes are available now. Size `m` is used by default and is equal to the `s` old one.

Also added versioning for documentation. See the available versions at http://sullenor.github.io/teatime-components/version.html


## 0.7.2

Fixed Button's disabled state.


## 0.7.1

- ColorPicker prettifies the initial value.
- Internal mark up fixes.


## 0.7.0

- *API.* There were some changes in the component's public props, see the changes below.
- *Props filtering.* For now, all the components have props filtering and accept only defined ones and those, which match the regular expression `/^(?:data-|on[A-Z]|style$)/` (`data-*` attrs, event hanlders and style prop).
- *Styles.* Components have the `css` method which retrieves the generated token (base on `size` and `theme` props) for the provided name. `styleName` prop was removed.


### Check

- No more possibility to provide the custom `type` value. `checkbox` value is used by default.


### ColorPicker

- Menu has width equal to the parent Input, so no need to specify manually `hasFixedWidth` prop. Its a default behaivor for now.


### Radio

- `hasUniqValues` was removed. Consider using options with unique values.
- Added `theme` prop with possible values `common|button`.


### RadioGroup

Was removed. Consider using `Radio` component with `theme='button'`.


### Select

- `hasUniqValues` was removed. Consider using options with unique values.
- `isSearchable` prop was renamed to `searchable`.
- `getHaystack` prop was renamed to `searchableValue`.
- `noResults` prop was renamed to `searchEmptyText`.
- Added possibility with `searchEngine` prop to replace the default fuzzy search with custom engine. You may also use the default presets: `fuzzy|includes|startsWith` or define the custom function `input -> value -> bool`.


### Tumbler

- `on`, `off` were renamed to `onText` `offText`
