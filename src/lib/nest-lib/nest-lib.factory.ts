import {
    chain,
    externalSchematic,
    noop,
    Rule,
    SchematicContext,
    Tree
} from "@angular-devkit/schematics";


export function main(schema: any): Rule {
    return (host: Tree, context: SchematicContext) => {

        return chain([
            createLibraryPart(schema, 'domain'),
            createLibraryPart(schema, 'application'),
            createLibraryPart(schema, 'infrastructure'),
        ])(host, context);
    };
}

function createLibraryPart(schema: any, libraryPartName: 'domain'|'application'|'infrastructure'): Rule {
    try {
        return externalSchematic("@stechy1/schematics", `nest-lib-${libraryPartName}`, schema);
    } catch (e) {
        return noop();
    }
}
