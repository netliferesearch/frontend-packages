# ndla-article-scripts

A collection of functions for making article content responsive (and interactive)

## Installation

```sh
$ npm install ndla-article-scripts
```

or

```sh
$ yarn add ndla-article-scripts
```

## Usage

### Plain javascript (embed scripts)

```javascript
import {
  addEventListenerForResize,
  updateIFrameDimensions,
  addAsideClickListener,
} from 'ndla-article-scripts';

window.onload = () => {
  // Invoke after article content has loaded
  updateIFrameDimensions();
  addEventListenerForResize();
  addAsideClickListener();
};
```

### React

```javascript
import {
  addEventListenerForResize,
  updateIFrameDimensions,
  addAsideClickListener,
  removeEventListenerForResize,
  removeAsideClickListener,
} from 'ndla-article-scripts';

class Article extends Component {
  componentDidMount() {
    addEventListenerForResize();
    updateIFrameDimensions();
    addAsideClickListener();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeAsideClickListener();
  }

  render() {
    const { article } = this.props;
    return (
      <article>
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    );
  }
}
export default Article;
```

## API(functions)

### `articleScripts.initArticleScripts()`

Initialize all default article scripts.

### `articleScripts.updateIFrameDimensions()`

Update iframe height and width to fit screen/window size.

### `articleScripts.addEventListenerForResize()`

Adds an resize event listener on window. The listener calls `updateIFrameDimensions` on browser window resize.

### `articleScripts.removeEventListenerForResize()`

Removes the event listener added by `addEventListenerForResize`.

### `articleScripts.addAsideClickListener()`

Adds an click listener on aside buttons for expanding the content on small screens.

### `articleScripts.removeAsideClickListener()`

Removes click listeners added by `removeAsideClickListener`.

### `articleScripts.addShowDialogClickListeners()`

Adds click listeners for displaying license info popup.

### `articleScripts.addCloseDialogClickListeners()`

Adds click listeners for closing license info popups.

### `articleScripts.addCopyToClipboardListeners()`

Add a click listener to buttons with a `data-copy-string`. The value of the attribute will be copied to the clipboard on click.

### `articleScripts.makeFigureLicenseIconsClickable()`

Adds click listeneres for displaying license text popup on license icon click

### `articleScripts.addEventListenersForZoom()`

Adds click listners for zooming image/figure

### 'articleScripts.removeEventListenersForZoom()'

Removes click listeners added by `addEventListenersForZoom`.
