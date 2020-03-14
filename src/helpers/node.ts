import {
  Node,
  Declaration,
  ModifierFlags,
  getCombinedModifierFlags,
  SyntaxKind,
  isIdentifier,
  ExportAssignment,
  isExportAssignment,
  isTypeOperatorNode,
  TypeOperatorNode,
  isTypeReferenceNode,
  TypeReferenceNode,
  isInferTypeNode,
  InferTypeNode,
  isUnionTypeNode,
  UnionTypeNode,
} from 'typescript';

export function isDefaultExport(node: Node): node is ExportAssignment {
  return node.symbol?.name === 'default';
}

export function isNodeExported(node: Node, alsoTopLevel = false): boolean {
  return (
    isExportAssignment(node) ||
    (getCombinedModifierFlags(node as Declaration) & ModifierFlags.Export) !== 0 ||
    (alsoTopLevel && !!node.parent && node.parent.kind === SyntaxKind.SourceFile)
  );
}

export function isKeyOfType(type: Node): type is TypeOperatorNode {
  return type && isTypeOperatorNode(type) && type.operator === SyntaxKind.KeyOfKeyword;
}

export function isUnionType(type: Node): type is UnionTypeNode {
  return type && isUnionTypeNode(type);
}

export function isIdentifierType(type: Node): type is TypeReferenceNode {
  return type && isTypeReferenceNode(type) && isIdentifier(type.typeName);
}

export function isInferType(type: Node): type is InferTypeNode {
  return type && isInferTypeNode(type);
}

export function isPrivate(type: Node) {
  return type.kind === SyntaxKind.PrivateKeyword;
}

export function isStatic(type: Node) {
  return type.kind === SyntaxKind.StaticKeyword;
}

export function isProtected(type: Node) {
  return type.kind === SyntaxKind.ProtectedKeyword;
}
