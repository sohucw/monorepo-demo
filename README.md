### 说明

### npm 镜像的修改
npm config set registry https://registry.npmjs.org/ 

npm config set registry http://registry.npm.taobao.org/

- 错误提示

```

执行这个命令 pnpm install -wD commitizen cz-conventional-changelog

 ERR_PNPM_REGISTRIES_MISMATCH  This modules directory was created using the following registries configuration: {"default":"http://registry.npm.taobao.org/"}. The current configuration is {"default":"https://registry.npmjs.org/"}. To recreate the modules directory using the new settings, run "pnpm install".

修改镜像
```
### changesets 版本控制
``` 
pnpm install @changesets/cli -wD

在根目录 package.json 中配置对应的命令
"scripts": {
    "changeset": "changeset",
    "packages-version": "changeset version",
    "publish": "changeset publish --registry=https://registry.npmjs.com/"
}

```
### 规范代码提交

- 使用commitizen规范commit提交格式

```
commitizen 和 cz-conventional-changelog

pnpm install -wD commitizen cz-conventional-changelog


工程根目录下的 package.json 中增加一条脚本：
"scripts": {
  "commit": "cz"
}
```

一个标准化的 commit message 应该包含三个部分
type（必需）、scope（可选）、subject（必需）

- type 必须是下面的其中之一：

feat: 增加新功能
fix: 修复 bug
docs: 只改动了文档相关的内容
style: 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
refactor: 代码重构时使用，既不是新增功能也不是代码的bud修复
perf: 提高性能的修改
test: 添加或修改测试代码
build: 构建工具或者外部依赖包的修改，比如更新依赖包的版本
ci: 持续集成的配置文件或者脚本的修改
chore: 杂项，其他不需要修改源代码或不需要修改测试代码的修改
revert: 撤销某次提交
- scope
说明本次提交的影响范围。scope 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。

- subject
主题包含对更改的简洁描述

### 代码提交规范限制
通过 commitizen && cz-conventional-changelog 可以规范我们的 commit message， 如果用户不通过 pnpm commit 来提交代码，而是直接通过 git commit 命令来提交代码，就能绕开 commit message 检查

安装 commitlint 和 husky：

```
pnpm install -wD @commitlint/cli @commitlint/config-conventional husky


工程根目录下的 package.json 中增加一条 script:

```
添加 commitlint.config.js 配置文件
"scripts": {
  "postinstall": "husky install"
}

执行 pnpm run postinstall 会在项目根目录下生成 .husky
执行如下命令新增一个husky的hook：
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

### 代码规范检查
良好的代码编写规范对团队的可持续发展起着至关重要的作用，因此接下来我会配置 eslint 对代码进行统一的规范校验，配合 lint-staged 可以对已经提交的代码进行校验。

安装 eslint 和 lint-stage。

```
$ pnpm install -wD eslint lint-staged @typescript-eslint/parser @typescript-eslint/eslint-plugin
````

lint-staged 是 Git 里的概念，表示暂存区，lint-staged 表示只检查暂存区中的文件。

package.json 中增加如下配置:

```

"lint-staged": {
    "*.ts": [
      "eslint --fix",
      "git add"
    ]
}

```
husky 中增加 pre-commit 校验：


npx husky add .husky/pre-commit "npx --no-install lint-staged"




### 其他资料