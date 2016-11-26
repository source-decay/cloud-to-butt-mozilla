# not-alt-right-Mozilla

Derived from the work of DaveRandom's [cloud-to-butt](https://github.com/DaveRandom/cloud-to-butt-mozilla)
Firefox extension.

Inspired by [not-alt-right](https://github.com/adamvduke/not-alt-right).

Neo-Nazis don't seem to be able to spell very well these days. This add-on (using the new WebExtension API for cross-platform compatibility) fixes these typos so you can see what they were trying to say.

## Installing

** For the time-being, this add-on will only work on the Developer Edition of Firefox. ** Bringing it to non-Developer editions will require me getting it signed and uploaded to [AOM](https://addons.mozilla.com/en-US/firefox/extensions).

## Building

Node is only being used for Gulp and web-ext. These are option but recommended - you are still able to create the XPI file manually if you don't want to download dependencies. Gulp is used to build the Manifest and JS into an XPI file.

1. Clone this project to your local machine

2. run ```npm install```

3. Make any changes you may want to make

4. run ```gulp``` (optional)

## To do

1. ~~Transition to Web Extension for compatibility with future Firefox versions
as Add-ons are slated to be deprecated by the end of 2017.~~

2. Sign and upload to [AOM](https://addons.mozilla.com/en-US/firefox/extensions).
