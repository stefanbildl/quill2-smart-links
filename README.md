# Quill 2 Smart Links

Autodetects links with format "http(s)://..." that were entered or pasted into Quill 2.0 and converts them into &lt;a&gt; elements.



## Installation

```bash
npm i quill2-smart-links@"^1.0.4"
``` 



## Example 

```typescript
  import { SmartLinks } from 'quill2-smart-links';

  Quill.register("modules/smartLinks", SmartLinks)

  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      smartLinks: true
    },
  });
``` 

