# Quill 2.0 - Convert pasted or entered links automatically to <a> tags


## Installation

```bash
npm i quill2-smart-links@"^1.0.0"
``` 

## Example
```typescript
  import { DetectLinks} from 'quill2-detect-links';

  Quill.register("modules/detectLinks", DetectLinks)

  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      detectLinks: true
    },
  });
``` 
