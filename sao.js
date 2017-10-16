const superb = require('superb')
const slugify = require('slugify')

module.exports = {
    templateOptions: {
        context: {
            slugify
        }
    },
    prompts: {
        name: {
            message: 'What is the name of the new app?',
            role: 'folder:name'
        },
        description: {
            message: 'How would you describe the new app?',
            default: `my ${superb()} project`
        },
        username: {
            message: 'What is your GitHub username?',
            role: 'git:name',
            store: true
        },
        email: {
            message: 'What is your GitHub email?',
            role: 'git:email',
            store: true
        }
    },
    move: {
        gitignore: '.gitignore'
    },
    installDependencies: true,
    gitInit: true
}
