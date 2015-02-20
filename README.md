# treehouse-profile-node

## Description

Using Node.js, get [teamtreehouse.com](http://teamtreehouse.com) users' badge count and points by [topic](http://teamtreehouse.com/library).

## Install

Create a directory and `cd` into it.

##### Install via NPM

###### linux
```
$ npm install --production git://github.com/seantunwin/treehouse-profile-cli.git && mv node_modules/* ./ && rmdir node_modules
```

###### Windows

```
> npm install --production git://github.com/seantunwin/treehouse-profile-cli.git && xcopy node_modules\*  /j /s /i /q /y && rmdir node_modules /s /q
```

##### Hack on it

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
