# PoRC: Perioperative Risk Calculator



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub release](https://img.shields.io/github/tag/jplomas/lapriskcalc.svg)


## Background

This is a fork of an app I wrote that was badged as ‘the NELA app’ which, usefully for clinicians, had laparotomy risk calculators.

It was MIT licensed and developed pro bono.

In 2018, the NELA leadership within the RCoA chose to have their app development continued by a third party developer. However there is no release date available as of yet.

This app was first released to ‘fill the gap’ and to provide clinicians with a portable and offline means to undertake clinical risk prediction.

It has all the NELA-owned assets that are not MIT licensed stripped out for IP purposes and has been rewritten (from ionic v1 to v3 in 2018 then v6, also using vue and capacitor, in 2022) to take advantage of performance increases and newer mobile devices.

## Compiled versions

These are available for iOS and Android at the Apple and Google Play stores:

- [Apple](https://itunes.apple.com/us/app/perioperative-risk-calculator/id1443388402?ls=1&mt=8)
- [Google](https://play.google.com/store/apps/details?id=com.jplomas.porc)

A web version is available at [Github Pages](https://jplomas.github.io/LapRiskCalc).

## Building from source

node.js and npm will be required.  If you're using a Mac:
- Make sure Xcode is installed along with its command line tools (`xcode-select --install`)
- [Homebrew](https://brew.sh/) is your friend
- [This](https://tecadmin.net/install-nvm-macos-with-homebrew/) is a decent setup guide for using nvm (node version manager) which is pretty handy

Clone the repo, change into the directory then do an:

`npm install`

To run in a dev environment:

`npm run serve`

To build for the web:

`npm run build` (then see the `dist/` folder which can be deployed on a web server)

To build in Android Studio or XCode:

`ionic capacitor build android` or `ionic capacitor build ios`

## Contributing

Suggestions/issues are welcomed, as are pull requests from those wishing to contribute to the development.  Please place suggestions into Github Issues at [https://github.com/jplomas/LapRiskCalc/issues](https://github.com/jplomas/LapRiskCalc/issues)

## License

MIT and permissive, just as healthcare IT should be.

## History

#### v1.5.0

Rewrite of UI in vue / ionic 6 / capacitor.

#### v1.0.1

Initial public release.

#### v1.0.0

Internal test version released to iOS and Android devices.

