const core = require('@actions/core');
const github = require('@actions/github');
const setup_ocaml = require('avsm/setup-ocaml');
const wait = require('./wait');

// most @actions toolkit packages have async methods
async function run() {
    try {
        await setup_ocaml.run()
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run()
