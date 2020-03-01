# tensors.js
Proof-of-concept tensors for math.js


## Intended usage

```typescript
import { vectorSpace, Reals, add, mul } from 'tensorjs';
import { matrix, diag } from 'mathjs';

const V = vectorSpace(Reals, 4);
const δ = V.identity;

δ.i.i // error
δ.I.i // 4

V.setIndexBasis('a..f', V.canon);

δ.A.b // diag([1,1,1,1])

const T = V.tensor(2,0);

mul(T.I.J, δ.K.j) // T.I.K

T.A.B = matrix([
    [1, 2, 3, 4],
    [0, 1, 0, 0],
    [5, 6, 7, 8],
    [0, 0, 0,-1]
]);

const g = V.tensor(0,2);
g.a.b = diag([-1,1,1,1]);
V.metric = g;

T.A.a // 6
T.I.i // 6
```