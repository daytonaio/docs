const __dirname = import.meta.dirname;
import * as _fs from "fs";
const fs = _fs.promises;
import { parseArgs } from "util";
import pkg from "../package.json" assert { type: "json" };

// content to appear above the commands outline
const prepend = `---
title: API
description: A reference of supported operations using the Daytona API.
---

`;

// content to appear below the commands outline
const append = ``;

async function fetchSwaggerJSON(ref) {
    const url = `https://raw.githubusercontent.com/daytonaio/daytona/${ref}/pkg/api/docs/swagger.json`;
    const request = await fetch(url);
    const response = await request.json();

    return response;
}

function escape(str) {
    return str.replace(/\{/g, "\\{")
        .replace(/\}/g, "\\}");
}

function swaggerToMarkdown(swaggerJSON) {
    let output = "";

    for (const path of Object.keys(swaggerJSON.paths)) {
        const methods = swaggerJSON.paths[path];

        for (const method of Object.keys(methods)) {
            const methodDetails = methods[method];
            let { description, responses, parameters } = methodDetails;

            responses = responses ? responses : {};
            parameters = parameters ? parameters : {};

            output += `## ${method.toUpperCase()} ${escape(path)}\n`;
            output += `${description}\n`;
            output += "\n";
            
            if (Object.keys(parameters).length > 0) {
                output += "### Parameters\n"

                output += `| Name | Location | Required | Type | Description |\n`;
                output += `| :--- | :------- | :------- | :--- | :---------- |\n`

                for (const param of Object.keys(parameters)) {
                    const responseDetails = parameters[param];
                    const {
                        name,
                        in: location,
                        required,
                        type,
                        description: paramDescription
                    } = responseDetails;

                    output += `| \`${name}\` | ${location} | ${required} | ${type} | ${paramDescription} |\n`;
                }

                output += "\n";
            }

            if (Object.keys(responses).length > 0) {
                output += "### Responses\n";

                output += `| Status Code | Description |\n`;
                output += `| :-------- | :---------- |\n`

                for (const response of Object.keys(responses)) {
                    const responseDetails = responses[response];
                    const { description: responseDescription } = responseDetails;

                    output += `| \`${response}\` | ${responseDescription} |\n`;
                }

                output += "\n";
            }
        }

        output += "\n";
    }

    return output
}

async function process(args) {
    const { output, ref } = args.values;
    const swaggerJSON = await fetchSwaggerJSON(ref);

    const markdown = swaggerToMarkdown(swaggerJSON);

    console.log(`writing to '${output}'...`);
    await fs.writeFile(output, `${prepend}\n${markdown}\n${append}`);
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
        default: `${__dirname}/../src/content/docs/reference/api.mdx`
    }
}

const args = parseArgs({ options: commandOpts });
process(args);