# Process
These were my general steps in unobfuscating [this](https://www.powerschool.com/e-Put-I-wakd-Who-cares-in-me-erers-But-haue-to-t) file

## s0.js
- Original source

## s0.p.js
- `s0.js` run through prettier
- Manual changing of start to get the source strings for the hiding of strings

## s1.js
- `s0.p.js` run though `auto-parse-s1.js` to reverse the `substr(a, b)` obfuscation

## s1.u.js
- `s1.js` run through uglifyjs to clean things like "a" + "b" into "ab"

## s1.p.js
- `s1.u.js` run through prettier

## s2.js
- `s1.p.js` run through `auto-parse-s2.js` to reverse the `0x123def(a)` obfuscation

## s2.u.js
- `s2.js` run through uglifyjs to clean things like "a" + "b" into "ab"

## s2.p.js
- `s2.u.js` run through prettier

# Notes
There's still one last level of obfuscation remaining in `s2.p.js` but I've never seen it before and honestly, I'm tired.
Also, the uglify config is just copied from a website to do it for me and made to render correctly in an ide as js
