import fs from 'fs';
// import path from 'path';
// 借助url中的fileUrlToPath方法，将文件url转换成路径
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
import typescript from 'rollup-plugin-typescript2';
// const packagesDir = path.resolve(dirname, 'packages');
const packageFiles = fs.readdirSync('./packages');
function output(path) {
  return [
    {
      input: [`./packages/${path}/src/index.ts`],
      output: [
        {
          file: `./packages/${path}/dist/index.js`,
          format: 'umd',
          name: 'dawei-front',
          sourcemap: true
        }
      ],
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              module: 'ESNext'
            }
          },
          useTsconfigDeclarationDir: true
        })
      ]
    }
  ];
}

export default [...packageFiles.map((path) => output(path)).flat()];
