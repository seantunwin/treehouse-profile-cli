# treehouse-profile-node


Using Node.js, get [teamtreehouse.com](http://teamtreehouse.com) users' badge count and points by [topic](http://teamtreehouse.com/library).

## Install

Create a directory and `cd` into it.

#### Install via NPM:

###### linux

```
$ npm install --production treehouse-profile-cli && mv node_modules/* ./ && rmdir node_modules
```

###### Windows

```
> npm install --production treehouse-profile-cli && xcopy node_modules\*  /j /s /i /q /y && rmdir node_modules /s /q
```

#### Hack on it

`cd` into the `treehouse-profile-cli` directory then:

```
$ npm install
```

## Usage

```
$ node app.js <Topic:String (case-sensitive)> <User(s):String || Array (space separated)>
```

#### Example
```
$ node app.js JavaScript seantunwin chalkers
```
