# react-component
[![Build Status](https://travis-ci.org/excellenteasy/react-component.svg?branch=master)](https://travis-ci.org/excellenteasy/react-component)
[![Dependency Status](https://david-dm.org/excellenteasy/react-component.svg)](https://david-dm.org/excellenteasy/react-component)
[![devDependency Status](https://david-dm.org/excellenteasy/react-component/dev-status.svg)](https://david-dm.org/excellenteasy/react-component#info=devDependencies)

## Disclaimer
This is **not** battle tested (yet). I think, this is good approach and put a lot of work into it, but it might not withstand the test of time. With that in mind, please continue reading and give feedback :)

## What is this thing and why should I use it?
`react-component` is a **boilerplate** for creating reuseable react components. It is for you if you want to adhere to best practices that prevent you from shooting yourself in the foot. Here is how:

The goal is to create something that is robust and easy to reason about. Just like React components help you to understand how your app works, the approach taken here should help you understand how you build process and release workflow works. This is reflected in the choice of technology used (see devDependencies) as well as the conceptual simplifications.

You should use this to create one component at a time. This is **not** the build process for your entire app, development and production server, analytics and HR management tool. This is for building test-driven, semantically release, independnet components.

## Assumptions
This repository gives you a starting point if you want to:
* develop reusable components independently
* use `browserify` for everything
* write code in ES6 (using `babelify`)
* write tests (first) with [`tape`](https://github.com/substack/tape)
* maintain no separate css file, but use [inline styles](http://facebook.github.io/react/tips/inline-styles.html)
* use simple npm scripts as a build process instead of Grunt or Gulp
* adhere to [AngularJS Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit) (no pun intended)
* release components on every push with [semantic-release](https://github.com/boennemann/semantic-release)
* be able to understand the system and code in this boilerplate in < 5 minutes

## Get started
Clone this repo, change the git origin to your repository, change package name (and version) in `package.json` and npm install:

```bash
git clone https://github.com/excellenteasy/react-component.git
cd TK
git remote set-url origin git@github.com:USERNAME/OTHERREPOSITORY.git
vim package.json
npm install
```

Next, [setup semantic-release](https://github.com/boennemann/semantic-release#package). If you are not familiar with it, please read the wonderful explanation in its [README](https://github.com/boennemann/semantic-release/blob/master/README.md). This alone will make your visit here worth it.

You might also want to remove this README and write your own.

## Usage
You will most likely only need these one task:
`npm run serve`: sets up watchify and a livereload server; opens in your favorite browser

If you develop multiple components and run into EADDRINUSE issue, you can change the port for the livereload server with these two commands:

```bash
npm config set component:lrport 35730
npm config set component:port 8081
```

These settings will persist in the repo, so you can change ports this way to avoid reusing the same port.

## How does this work under the hood?
### Important files
* `index.jsx`: This **is** your component, exported as an ES6 module. You can use ES6 and JSX syntax.
* `test.js`: Tests for your component go here. You can use ES6 here as well.

Remember: The only two files you should ever need to work on are `index.jsx` and `test.js`.

### Inside the code
If you look in [the source files](https://github.com/excellenteasy/react-component/blob/master/index.jsx), you will notice the [ES6 module syntax](http://www.2ality.com/2014/09/es6-modules-final.html). This is how you should export and consume your component. For an example on how a component is consumed, see [`example/app.jsx`](https://github.com/excellenteasy/react-component/blob/master/example/app.jsx).

### Build process
How is this wired up under the hood? We use [npm as a build system](http://substack.net/task_automation_with_npm_run). The `serve` task creates a browserify bundle of `example/app.jsx`, which consumes the component. If then sets up watchers and livereload and opens the "app" in your favorite browsers. All of these jobs are completed by different node executables, which you can find in the devDependenceis in `package.json`.

Using simple node executables instead of complex Grunt or Gulp tasks makes it easy to reason about what is happening. If you know how to make the process more transparent or comprehendable, please open an issue/PR.

## Contributing
While I'd call this approach to component development "opinionated", that is no excuse to not take advice from others or keep improving. Please open an issue to discuss improvements/fixes or even better send a Pull Request. Thank you :)

## License

MIT License 
2015 © David Pfahler and [contributors](https://github.com/excellenteasy/react-component/graphs/contributors)
