import * as path from 'path';
import { strings } from '@angular-devkit/core';
import {
    apply,
    chain,
    mergeWith,
    Rule,
    SchematicContext,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';
import { DEFAULT_LIB_PATH } from '@nestjs/schematics';
import { getNpmScope } from '@nrwl/workspace';

import { createNrwlLibrary } from '../shared-utils';
import { Schema } from './nest-lib-infrastructure.schema';

function buildSrcPath(libraryRoot: string, libName: string): string {
    return path.join(libraryRoot, libName, 'src');
}

interface NormalizedSchema extends Schema {
    importPath?: string;
    path?: string;
}

export function main(schema: Schema): Rule {
    return (host: Tree, context: SchematicContext) => {
        const options = normalizeOptions(host, schema);

        return chain([
            createNrwlLibrary(options.rootDir, options.prefix, options.name, 'infrastructure'),
            generateCustomizedStructure(options)
        ])(host, context);
    };
}

function normalizeOptions(host: Tree, options: Schema): NormalizedSchema {
    const defaultImportPath = `${getNpmScope(host)}`;

    const defaultSourceRoot = options.rootDir !== undefined ? options.rootDir : DEFAULT_LIB_PATH;
    const infrastructurePath = buildSrcPath(defaultSourceRoot, options.name + '/infrastructure');

    return {
        ...options,
        prefix: options.prefix || defaultImportPath,
        importPath: defaultImportPath,
        path: infrastructurePath,
        rootDir: defaultSourceRoot
    };
}

function generateCustomizedStructure(schema: NormalizedSchema): Rule {
    const sourceTemplates = url('./files');

    const sourceParametrizedTemplates = apply(sourceTemplates, [
        template({
            ...schema,
            ...strings
        })
    ]);

    return mergeWith(sourceParametrizedTemplates);
}
