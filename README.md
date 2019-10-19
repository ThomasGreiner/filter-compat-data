Resource filter compatibility data
==================================

https://github.com/ThomasGreiner/filter-compat-data

[![Build Status](https://travis-ci.org/ThomasGreiner/filter-compat-data.svg?branch=master)](https://travis-ci.org/ThomasGreiner/filter-compat-data)

This repository contains compatibility data for resource filtering technologies used by ad blockers such as filters, filter lists and filter list subscription links. Filter compatibility data describes which ad blockers support particular filter features.

It is based on [the mdn-browser-compat-data JSON schema][mdn-schema] (see also [docs on MDN][mdn-table]) and is being used in rendering compatibility tables at [greinr.com/docs][greinr-docs] which are based on [MDN's table rendering script][mdn-table-renderer].

_The data contained in this repository is still incomplete and may contain various inaccuracies so please take it with a grain of salt. Furthermore, [Mozilla warns][mdn-schema-warning] that the data format's structure is subject to change without notice._

## Repository contents

- [blocking](blocking): Network request blocking
- [comments](comments): Comments and filter list meta data
- [hiding](hiding): DOM element hiding
- [links](links): Filter list subscription links
- [styling](styling): CSS style injection

See also [JSON schema documentation][mdn-schema].

## Supported ad blocker identifiers

- [`adblock`][adblock]: AdBlock (desktop extension)
- [`adblockbrowser`][adblockbrowser]: Adblock Browser (mobile browser)
- [`adblockplus`][adblockplus]: Adblock Plus (desktop extension)
- [`adguard`][adguard]: AdGuard (desktop extension)
- [`chromium`][chromium]: Chromium Beta - declarativeNetRequest (desktop browser)
- [`libadblockplus`][libadblockplus]: libadblockplus (C++ library)
- [`ublockorigin`][ublockorigin]: uBlock Origin (desktop extension)

## Further notes

- `mdn_url` is used to point to the canonical documentation for a feature. In
case there are multiple divergent implementations, none is specified.
- Since most other ad blockers look for compatibility with Adblock Plus'
features, the status properties (e.g. `standard_track`) refers to Adblock Plus'
implementation.

## Testing

Run `node test` to run tests.

[adblock]: https://getadblock.com/
[adblockbrowser]: https://adblockbrowser.org/
[adblockplus]: https://adblockplus.org/
[adguard]: https://adguard.com
[chromium]: https://developer.chrome.com/extensions/declarativeNetRequest
[greinr-docs]: https://www.greinr.com/docs/filters/
[libadblockplus]: https://github.com/adblockplus/libadblockplus
[mdn-schema]: https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md
[mdn-schema-warning]: https://github.com/mdn/browser-compat-data#format-of-the-browser-compat-json-files
[mdn-table]: https://developer.mozilla.org/en-US/docs/MDN/Contribute/Structures/Compatibility_tables
[mdn-table-renderer]: https://github.com/mdn/kumascript/blob/master/macros/CompatBeta.ejs
[ublockorigin]: https://github.com/gorhill/uBlock
