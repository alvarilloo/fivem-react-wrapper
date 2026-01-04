# fivem-react-wrapper

A React wrapper for FiveM that enables development without building, with support for external URLs.

**Note:** This wrapper is intended for development only and is not recommended for production use.

---

## Features

* Run React UI in FiveM without building every change.
* Supports external URLs, not limited to localhost.
* Automatically queues messages until the iframe is ready.

## Installation

Just include the wrapper in your HTML using a `<script>` tag:

```html
<script 
    src="https://github.com/youruser/yourrepo/raw/main/react-wrapper.js" 
    data-react-url="https://your-domain-here.com">
</script>
```

## Usage

The wrapper automatically creates an iframe pointing to the URL specified in `data-react-url`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FiveM React Wrapper Example</title>
</head>
<body>
    <!-- Load the wrapper script -->
    <script 
        src="https://github.com/youruser/yourrepo/raw/main/react-wrapper.js" 
        data-react-url="https://cdn.lanaranjarp.es:3000">
    </script>
</body>
</html>
```

* Messages sent to `window` are queued until the iframe is ready.
* The console will show which URL the wrapper is loading:

```
[wrapper] Loading UI from: https://your-domain-here.com
```

## Example

You can use it in development or production by simply changing the `data-react-url`:

```html
<script 
    src="https://raw.githubusercontent.com/alvarilloo/fivem-react-wrapper/refs/heads/main/wrapper.js" 
    data-react-url="https://your-domain-here.com"
```

Also works for localhost development:

```html
<script 
    src="https://raw.githubusercontent.com/alvarilloo/fivem-react-wrapper/refs/heads/main/wrapper.js" 
    data-react-url="http://localhost:3000">
</script>
```
