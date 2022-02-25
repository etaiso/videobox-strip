# videobox-button



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type               | Default     |
| -------- | --------- | ----------- | ------------------ | ----------- |
| `id`     | `id`      |             | `string`           | `undefined` |
| `type`   | `type`    |             | `"cart" \| "info"` | `undefined` |


## Events

| Event           | Description | Type                                             |
| --------------- | ----------- | ------------------------------------------------ |
| `buttonClicked` |             | `CustomEvent<{ type: ButtonType; id: string; }>` |


## Dependencies

### Used by

 - [videobox-strip-item](../videobox-strip-item)

### Graph
```mermaid
graph TD;
  videobox-strip-item --> videobox-button
  style videobox-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
