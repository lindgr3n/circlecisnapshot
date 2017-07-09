# circlecisnapshot
Testing Jest snapshot with CircleCi

Locally snapshot testing works. But running Circle CI it fails because of diffrence in snapshot. In this case output in CicleCI test that fails
-    "_instance": ShallowComponentWrapper {
+    "_instance":  {

To avoid this you could install [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json) and update package.json with
"jest": {
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ]
}
That will make the output like
+<div>
    +  Second
+</div>

Another way is to use in each test and each expect
import toJson from 'enzyme-to-json';
expect(toJson(output)).toMatchSnapshot()

Or easier just at the top of the test
import serializer from 'enzyme-to-json/serializer';
expect.addSnapshotSerializer(serializer);

There is another way also to install [jest-serializer-enzyme](https://github.com/rogeliog/jest-serializer-enzyme) and update package.json
"jest": {
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-serializer-enzyme"
    ]
}