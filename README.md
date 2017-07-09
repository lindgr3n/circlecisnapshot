# Failing snapshot test with CircleCI
Testing Jest snapshot with CircleCi

Locally snapshot testing works. But running Circle CI it fails because of diffrence in snapshot. In this case output in CicleCI test that fails
```
-    "_instance": ShallowComponentWrapper {
+    "_instance":  {
```

## How to avoid this
To avoid this you could install [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json) and update package.json with
```
"jest": {
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ]
}
```

That will make the output like
```
<div>
      Second
</div>
```

Another way is to use in each test and each expect
```
import toJson from 'enzyme-to-json';
expect(toJson(output)).toMatchSnapshot()
```

Or easier just at the top of the test
```
import serializer from 'enzyme-to-json/serializer';
expect.addSnapshotSerializer(serializer);
```

There is another way also to install [jest-serializer-enzyme](https://github.com/rogeliog/jest-serializer-enzyme) and update package.json

```
"jest": {
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-serializer-enzyme"
    ]
}
```

According to the enzyme-to-json documentation

`This is inspired by jest-serializer-enzyme, I first added a note to jest-serializer-enzyme but I then realised that the output is different, so it is not retro compatible with enzyme-to-json because it's using Enzyme debug helper which doesn't put each prop on a separate line.`