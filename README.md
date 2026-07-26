# @lucid-softworks/array-count-by

Count values by an arbitrary key. A `Map` avoids string coercion and
prototype-key hazards.

```ts
import { countBy } from "@lucid-softworks/array-count-by";

const messages = [
  { level: "info", text: "Started" },
  { level: "error", text: "Failed" },
  { level: "info", text: "Retried" },
];
countBy(messages, (message) => message.level);
```
