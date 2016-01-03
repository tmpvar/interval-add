# interval-add

add two intervals where an interval is a 2 part array

extracted from [Implicit Solid Modeling Using Interval Methods](https://github.com/tmpvar/interval-min/files/76491/Implicit.Solid.Modeling.Using.Interval.Methods.pdf)

## install 

`npm install interval-add`

## use

```javascript
var iadd = require('interval-add');

console.log(iadd([-1, 4], [3, 3]))
// outputs: [2, 7]
```

### api signature

__iadd__(`a`, `b`, `out`)

* `a` is the first interval
* `b` is the second interval
* `out` is an optional 2 part araray. Provide this to avoid generating garbage
* returns: 2 part array

## license

[MIT](LICENSE.txt)
