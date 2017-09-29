let Generator = require('yeoman-generator');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.argument('name', {
			desc: 'Project name',
			required: false,
			type: String,
			default: 'project-template',
		});

		this.argument('description', {
			desc: 'Project description',
			required: false,
			type: String,
			default: 'Шаблон для разработки сайтов'
		});
	}

	writing() {
		this.fs.copy(
			this.templatePath('docs'),
			this.destinationPath(`${this.options.name}/docs`)
		);

		this.fs.copy(
			this.templatePath('src'),
			this.destinationPath(`${this.options.name}/src`)
		);

		this.fs.copy(
			this.templatePath('babelrc'),
			this.destinationPath(`${this.options.name}/.babelrc`)
		);

		this.fs.copy(
			this.templatePath('editorconfig'),
			this.destinationPath(`${this.options.name}/.editorconfig`)
		);

		this.fs.copy(
			this.templatePath('eslintignore'),
			this.destinationPath(`${this.options.name}/.eslintignore`)
		);

		this.fs.copy(
			this.templatePath('eslintrc'),
			this.destinationPath(`${this.options.name}/.eslintrc`)
		);

		this.fs.copy(
			this.templatePath('gitignore'),
			this.destinationPath(`${this.options.name}/.gitignore`)
		);

		this.fs.copy(
			this.templatePath('npmrc'),
			this.destinationPath(`${this.options.name}/.npmrc`)
		);

		this.fs.copy(
			this.templatePath('pug-lintrc.json'),
			this.destinationPath(`${this.options.name}/.pug-lintrc.json`)
		);

		this.fs.copy(
			this.templatePath('bitbucket-pipelines.yml'),
			this.destinationPath(`${this.options.name}/bitbucket-pipelines.yml`)
		);

		this.fs.copy(
			this.templatePath('gulpfile.babel.js'),
			this.destinationPath(`${this.options.name}/gulpfile.babel.js`)
		);

		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath(`${this.options.name}/package.json`),
			{
				name: this.options.name,
				description: this.options.description,
			}
		);

		this.fs.copy(
			this.templatePath('README.md'),
			this.destinationPath(`${this.options.name}/README.md`)
		);
	}

	install() {
		this.npmInstall(null, {}, {
			cwd: this.options.name,
		});
	}
};
