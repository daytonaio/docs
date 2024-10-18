import * as _fs from "fs";
const fs = _fs.promises;
import { extname } from "path";
const __dirname = import.meta.dirname;

import { parseArgs } from "util";
import pkg from "../package.json" assert { type: "json" };

import * as yaml from "yaml";

// content to appear above the commands outline
const prepend = `---
title: CLI
description: A reference of supported operations using the Daytona CLI.
sidebar:
  label: Daytona CLI Reference
---
import Aside from "@components/Aside.astro";
import Label from "@components/Label.astro";

<Label>
  Distribution: **Open Source**, **Cloud**, **Self-Managed**
</Label>

The \`daytona\` command-line tool provides access to Daytona's core features.
You can use the \`daytona\` tool for the following operations:

*   Managing the lifecycle of the Daytona Server.
*   Managing [Workspaces](../usage/workspaces), [Git Providers](../configuration/git-providers), [Providers](../configuration/providers), and other Daytona components.
*   Configuring the [Daytona Server](../configuration/server) interactively.

This reference lists all commands supported by the \`daytona\` command-line tool complete with a description of their behaviour, and any supported flags.
You can access this documentation on a per-command basis by appending the \`--help\`/\`-h\` flag when invoking \`daytona\`.

<Aside type="note">
This reference does not apply to the \`daytona\` command when run inside of a Workspace.
</Aside>
`;

// content to appear below the commands outline
const append = ``;

async function fetchRawDocs(ref) {
    const url = "https://api.github.com/repos/daytonaio/daytona/contents/hack/docs";
    const request = await fetch(`${url}?ref=${ref}`);
    const response = await request.json();

    const files = [];

    for (const file of response) {
        const { download_url } = file;

        if (!download_url) continue;

        const contentsReq = await fetch(download_url);
        let contents = await contentsReq.text();

        contents = yaml.parse(contents);

        files.push(contents);
    }

    return files;
}

function flagToRow(flag) {
    let { name, shorthand, usage } = flag;

    name = `\`--${name}\``;
    shorthand = shorthand ? `\`-${shorthand}\`` : "";
    usage = usage ? usage : "";

    return `| ${name} | ${shorthand} | ${usage} |\n`;
}

function yamlToMarkdown(files) {
    return files.map((rawDoc) => {
        let output = "";
        output += `## ${rawDoc.name}\n`;
        output += `${rawDoc.synopsis}\n\n`;

        if (!rawDoc.usage) {
            rawDoc.usage = `${rawDoc.name} [flags]`;
        }

        output += "```shell\n";
        output += `${rawDoc.usage}\n`;
        output += "```\n\n";


        output += "__Flags__\n";
        output += "| Long | Short | Description |\n";
        output += "| :--- | :---- | :---------- |\n";
        
        if (rawDoc.options) {
            for (const flag of rawDoc.options) {
                let row = flagToRow(flag);
                output += row;
            }
        }

        if (rawDoc.inherited_options) {
            for (const flag of rawDoc.inherited_options) {
                let row = flagToRow(flag);
                output += row;
            }
        }

        output += "\n";

        return output;
    });
}

async function process(args) {
    const { output, ref } = args.values;
    console.log(`grabbing docs for ${ref}...`);

    // grab the files from GitHub
    let files = await fetchRawDocs(ref);
    let transformed = yamlToMarkdown(files);

    const singleMarkdown = transformed.join("\n");
    console.log(`writing to '${output}'...`);
    await fs.writeFile(output, `${prepend}\n${singleMarkdown}\n${append}`);
    console.log("done");
}

const commandOpts = {
    ref: {
        type: "string",
        default: `v${pkg.version}`
    },
    output: {
        type: "string",
        short: "o",
        default: `${__dirname}/../src/content/docs/tools/cli.mdx`
    }
}

const args = parseArgs({ options: commandOpts });
process(args);
