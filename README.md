# parcel-transformer-base64

## Usage

```
import bin from 'base64:embed.bin';
```

```
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "base64:*": ["@parcel/transformer-inline", "parcel-transformer-base64", "..."]
  }
}
```

## LICENSE

[MIT License](LICENSE)
