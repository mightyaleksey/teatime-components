# change log


## 0.10.11

- Fixed CheckGroup updates in case value changed, but options haven't.


## 0.10.10

- Dev dependencies update for the compatibility check with React@16. Also updated version of prop-types package.


## 0.10.9

- Added props `type='button'` for ColorPicker's and Select's buttons to prevent unexpected submit event in case of using `<Button type='submit' />`.


## 0.10.8

- Possibility to provide `onClick` handler to `Tooltip`.


## 0.10.7

- Removed selection of option with a `null` value in case the components value is `null`.


## 0.10.6

- Fixed `Radio` disabled state.


## 0.10.5

- Fixed appearance of single line `Tooltip`.


## 0.10.4

- Improved `Tooltip` position recalculation. Also removed prop #maxWidth in favor of css `max-width` rule: mix it to the root element and it will work.


## 0.10.3

- Easier bundler setup due to styles precompilation.


## 0.10.2

- Real examples.


## 0.10.1

- Fixed `Spin`s line-height.


## 0.10.0

- Unified `Spin` size. Now it should be equal to the Inputs height. Also added `xl` prop #size value.
- Prefixed styles. Now may omit autoprefixer from the build step.


## 0.9.2

- Added value check for `input[type=radio]`. For now it will filter repetitive **change** events for the same value.


## 0.9.1

- Returned scroll back to **Select**'s popup.


## 0.9.0

- Added possibility to specify popup direction for *ColorPicker* and *Select* components (prop `direction`).
- Migrated to React 15.5.x.


## 0.8.15

Added disabled state for `Link`.
Passed the value of the prop #name to the `onChange` handler.


## 0.8.14

Polyfills `String.includes` and `String.startsWith`.


## 0.8.13

Passed `onBlur` and `onFocus` handlers directly to the native controls (button, input, textarea).


## 0.8.12

Since `PropTypes.string` check occurs in case `value != null` added transformation of a null value to an empty string for *ColorPicker*, *Input* and *Textarea*. So for now, providing a `null` as value won't cause an error.
Also migrated from webpack 1 -> 2 and added a small bundle size optimization.


## 0.8.11

Select's issue fix in case `nextProps.value = null` resulted in unhandled exception. https://github.com/sullenor/teatime-components/commit/b69833030ea4467ceb5c3c59bba47534f86b982f


## 0.8.10

- Added Spin wrapper in order to avoid CSS transform issues.
- Added detailed propTypes description.


## 0.8.9

Fix for select value update. Disappointment from version `0.8.7`: `selectedPosition` was calculated wrong if `searchValue` was not empty.


## 0.8.8

Returned the data attributes for the Select's options.


## 0.8.7

Fix for select value update. See https://github.com/sullenor/teatime-components/commit/7c2d1b24dae14fa141780b4e18306ebf6f2f1cc5


## 0.8.6

Added the common index of the components and distributives.


## 0.8.5

*CheckGroup* and *Radio* margins update.


## 0.8.4

Explicit font value for the wrapper elements.

*CheckGroup*'s margins are equal to *Radio*'s for now.


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
