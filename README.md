# PoRC: Perioperative Risk Calculator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub release](https://img.shields.io/github/tag/jplomas/lapriskcalc.svg) [![GitHub Pages deployment](https://img.shields.io/github/deployments/jplomas/LapRiskCalc/github-pages)](https://jplomas.github.io/LapRiskCalc) [![Build Status](https://app.travis-ci.com/jplomas/LapRiskCalc.svg?branch=master)](https://app.travis-ci.com/jplomas/LapRiskCalc)

## Background

This is a fork of an app I wrote that was badged as ‘the NELA app’ which, usefully for clinicians, had laparotomy risk calculators.

It was MIT licensed and developed pro bono.

In 2018, the NELA leadership within the RCoA chose to have their app development continued by a third party developer. However there is no release date available as of yet.

This app was first released to ‘fill the gap’ and to provide clinicians with a portable and offline means to undertake clinical risk prediction.

It has all the NELA-owned assets that are not MIT licensed stripped out for IP purposes and has been rewritten (from ionic v1 to v3 in 2018 then v6, also using vue and capacitor, in 2022) to take advantage of performance increases and newer mobile devices.

Development is entirely self-funded.  Feel free to [Buy Me A Coffee](https://www.buymeacoffee.com/jplomas) if you find this app useful!

## Compiled versions

These are available for iOS and Android at the Apple and Google Play stores:

- [Apple](https://itunes.apple.com/us/app/perioperative-risk-calculator/id1443388402?ls=1&mt=8)
- [Google](https://play.google.com/store/apps/details?id=com.jplomas.porc)

A web version is available at [Github Pages](https://jplomas.github.io/LapRiskCalc).

**NB: I have been made aware that the old, non-Parsimonious NELA risk calculator model has been validated in some patient populations around the globe... the previous version is available for these users [here](https://2022--splendorous-gumdrop-77d39d.netlify.app/)**

## Building/testing/deploying from source

node.js and npm will be required.  If you're using a Mac:
- Make sure Xcode is installed along with its command line tools (`xcode-select --install`)
- [Homebrew](https://brew.sh/) is your friend
- [This](https://tecadmin.net/install-nvm-macos-with-homebrew/) is a decent setup guide for using nvm (node version manager) which is pretty handy
- Install Android Studio if required

Clone the repo, change into the directory then do an:

`npm install`

To run in a dev environment:

`npm run serve`

To build for the web:

`npm run build` (then see the `dist/` folder which can be deployed on a web server)

To build in Android Studio or XCode:

Make sure Ionic 6 CLI is available: `npm i -g @ionic/cli@6.0.0`

After a build:

`ionic cap copy` then `ionic cap sync` and finally `ionic cap open android` or `ionic cap open ios`

See [https://ionicframework.com/docs/vue/your-first-app/deploying-mobile] for more details.

## Contributing

Suggestions/issues are welcomed, as are pull requests from those wishing to contribute to the development.  Please place suggestions into Github Issues at [https://github.com/jplomas/LapRiskCalc/issues](https://github.com/jplomas/LapRiskCalc/issues)

## License

MIT and permissive, just as healthcare IT should be.

## History

#### v1.8.1

Minor UI tweak for app store releases.

#### v1.8.0

After communication from users in Europe who are using the legacy NELA model, validated on their own dataset, I have restored the old model as an option.

#### v1.7.1

Fix a few typos.

#### v1.7.0

Uses the Parsimonious NELA risk calculation. P-POSSUM is now deprecated.

#### v1.5.0

Rewrite of UI in vue / ionic 6 / capacitor.

#### v1.0.1

Initial public release.

#### v1.0.0

Internal test version released to iOS and Android devices.

