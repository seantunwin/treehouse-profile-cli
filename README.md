# treehouse-profile-cli


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

*Note: The extra commands after the `npm install` move the files outside of the default `node_modules` folder that is created when using NPM. Since this isn't an embeddable module the contents are taken out of that folder and moved into the folder you're in, then the empty folder is deleted. This way it looks like if you had cloned the repo from Github.*

#### Hack on it

`cd` into the `treehouse-profile-cli` directory then:

```
$ npm install
```

## Usage

```
$ node app.js <Topic:String (case-sensitive)> <User(s):String || Array (space-separated)>
```

#### Example
```
$ node app.js JavaScript seantunwin chalkers
```
