import { chain, externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function createNrwlLibrary(root: string | undefined, prefix: string | undefined, name: string, type: string): Rule {
  return (host: Tree, context: SchematicContext) => {
    return chain([
      externalSchematic('@nrwl/workspace', 'lib', {
        name: `${name}/${type}`,
        importPath: prefix ? `${prefix}/${name}/${type}` : undefined
      }),
      (tree: Tree) => {
        tree.delete(`${root}/${name}/${type}/src/lib/${name}-${type}.ts`)
        // tree.delete(`${root}/${name}/${type}/src/lib/${name}-${type}.spec.ts`)
        tree.delete(`${root}/${name}/${type}/src/index.ts`)
      },
    ])(host, context);
  }
}
