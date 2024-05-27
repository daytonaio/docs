<div align="center">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="https://github.com/daytonaio/daytona/raw/main/assets/images/Daytona-logotype-white.png">
		<img alt="Daytona logo" src="https://github.com/daytonaio/daytona/raw/main/assets/images/Daytona-logotype-black.png" width="40%">
	</picture>
</div>

<br><br>

<div align="center">

[![License](https://img.shields.io/badge/License-Apache--2.0-blue)](#license)
[![Issues - daytona](https://img.shields.io/github/issues/daytonaio/docs)](https://github.com/daytonaio/docs/issues)

</div>

<h1 align="center">Daytona Documentation</h1>
<div align="center">
Daytona's user and developer documentation.
</div>
</br>

<p align="center">
    <a href="https://github.com/daytonaio/docs/issues/new?assignees=&labels=bug">Report Bug</a>
    ·
  <a href="https://join.slack.com/t/daytonacommunity/shared_invite/zt-273yohksh-Q5YSB5V7tnQzX2RoTARr7Q">Join Our Slack</a>
    ·
    <a href="https://twitter.com/daytonaio">Twitter</a>
  </p>

<hr/>

## Development
The Daytona Documentation website is built using Astro and Stralight.
The core of the website is built in React, with documentation and other content built in MDX.

### Setting up a Development Environment
The easiest way to start working on the documentation is by using a DEM such as Daytona.
You can create a Workspace with the dependencies and configuration needed to preview the docs locally by executing the following command:

```shell
daytona create https://github.com/daytonaio/docs.git
```

Alternatively, if your local machine has Node.js and Yarn set up, you can clone this repository and execute `yarn install` to install the required dependencies.

### Useful Commands
This repository uses Yarn to handle project management.
For convenience, a number of scripts are defined in `package.json` that can be called using Yarn:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn run dev`             | Starts local dev server at `localhost:4321`      |
| `yarn run build`           | Builds your production site to `./dist/`         |
| `yarn run preview`         | Previews your build locally before deployment    |
| `yarn run astro ...`       | Runs CLI commands like `astro add`, `astro check`|
| `yarn run astro -- --help` | Provides help for using the Astro CLI            |

### Navigating the Docs
On the filesystem, you'll find the content in `./src/content/docs` in the form of `.mdx` files.
Daytona's documentation is organized into broad topics:

*   __Configuration__   
    Information around configuring the main components of Daytona.
*   __Explanation__  
    Background and conceptual information about Daytona and DEMs.
*   __Installation__  
    Information around installing Daytona under different environments.
*   __Reference__  
    Technical and architectural information about Daytona.
*   __Usage__  
    Practical information on using Daytona.

## Contributing
Daytona is licensed under the [Apache License 2.0](LICENSE). If you would like to contribute to the software, you must:

1. Read the Developer Certificate of Origin Version 1.1 (https://developercertificate.org/)
2. Sign all commits to the Daytona project.

This ensures that users, distributors, and other contributors can rely on all the software related to Daytona being contributed under the terms of the [License](LICENSE). No contributions will be accepted without following this process.

## License
This repository contains Daytona's Documentation website, covered under the Apache License 2.0, except where noted (any Daytona logos or trademarks are not covered under the Apache License, and should be explicitly noted by a LICENSE file.)

Daytona is a product produced from this open source software, exclusively by Daytona Platforms, Inc. It is distributed under our commercial terms.

Others are allowed to make their own distribution of the software, but they cannot use any of the Daytona trademarks, cloud services, etc.

We explicitly grant permission for you to make a build that includes our trademarks while developing Daytona itself. You may not publish or share the build, and you may not use that build to run Daytona for any other purpose.

## Code of Conduct
This project has adapted the Code of Conduct from the [Contributor Covenant](https://www.contributor-covenant.org/). For more information see the [Code of Conduct](CODE_OF_CONDUCT.md) or contact [codeofconduct@daytona.io.](mailto:codeofconduct@daytona.io) with any additional questions or comments.

## Questions
If you need guideance on contributing to Daytona, talk to us on
[Slack](https://join.slack.com/t/daytonacommunity/shared_invite/zt-273yohksh-Q5YSB5V7tnQzX2RoTARr7Q).