# Contribution guidelines

---

## Ways to contribute

- Improve documentation: Fix incomplete or missing docs, bad wording, examples or explanations.

- Give feedback: Please share any ideas, what features are missing and what is done well via GitHub Discussions or Discord.

- Code contribution: Propose new features via GitHub Issues, or find an existing issue that you are interested in and work on it!

## Contributing workflow

1. Decide on what you want to contribute.
2. If you want to implement a new feature, discuss it with the maintainer (GitHub Discussions or Discord).
3. Create your issue or find an existing one. Do not forget issues details such as the tag and the assignee.
4. Verify your work and submit a PR.
5. Get a code review and fix all issues noticed by the maintainer.
6. If you cannot finish your task or if you change your mind – that's totally fine! Just let us know in the GitHub issue that you created during the first step of this process. The ada_ui community is friendly – we won't judge or ask any questions if you decide to cancel your submission.
7. Your PR is merged. You are awesome!

## Commit convention
It is important to write correct commit messages to keep the git history clean and consistent.

Commit messages consists of 2 parts:

**[type] Message**

Examples:

[ADD] PLD generation feature
[FIX] Modal size issue on mobile devices
[DOCS] Add documentation about the deployment

## Git branches

**production** – current ada_ui version up to date

**features/#feature-name** – branch you are creating when adding a feature to ada_ui.

Examples: *features/pld-generator* or *fix/modal-size*

## Get started with ada_ui locally

- Fork the repository, then clone or download your fork.

- Install dependencies with npm
    - ```npm install```

- Create a .env file at the root of the repository with the following values

    - ```BASE_URL=YOUR_BASE_URL```

    - example. ```BASE_URL=https://myserver.fr```

- Create your new branch from production
    - ```git checkout -b features/pld-generator```

- Finally if you want to run the application:
    - ```npm run dev```