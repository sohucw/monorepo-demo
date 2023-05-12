### 说明

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