# Quill 2.0 - Convert links automatically


## Installation

```bash
npm i quill2-smart-links@"^1.0.2"
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
