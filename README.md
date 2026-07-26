# @lucid-softworks/array-count-by

Count values by an arbitrary key. A `Map` avoids string coercion and
prototype-key hazards.

```ts
import { countBy } from "@lucid-softworks/array-count-by";

countBy(messages, (message) => message.level);
```
