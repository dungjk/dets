import {
  TypeMemberModel,
  TypeModelAlias,
  TypeModelAny,
  TypeModelBigInt,
  TypeModelBigIntLiteral,
  TypeModelBoolean,
  TypeModelClass,
  TypeModelConditional,
  TypeModelDefault,
  TypeModelESSymbol,
  TypeModelEnumLiteral,
  TypeModelConstructor,
  TypeModelFunction,
  TypeModelFunctionParameter,
  TypeModelIndex,
  TypeModelAccess,
  TypeModelIndexedAccess,
  TypeModelInfer,
  TypeModelIntersection,
  TypeModelPrefix,
  TypeModelImport,
  TypeModelString,
  TypeModelProp,
  TypeModelTupleProp,
  TypeModelNumber,
  TypeModelVariable,
  TypeModelInterface,
  TypeModelUnidentified,
  TypeModelUnknown,
  TypeModelLiteral,
  TypeModelUniqueESSymbol,
  TypeModelVoid,
  TypeModelUndefined,
  TypeModelNull,
  TypeModelNever,
  TypeModelTypeParameter,
  TypeModelUnion,
  TypeModelSubstitution,
  TypeModelNonPrimitive,
  TypeModelTuple,
  TypeModelRef,
  TypeModelMapped,
  TypeModelNew,
  TypeModelPredicate,
  TypeModelGetAccessor,
  TypeModelSetAccessor,
  TypeModelParenthesis,
  TypeModelRest,
  TypeModelTemplate,
} from './models';

export type TypeModelExport =
  | TypeModelDefault
  | TypeModelVariable
  | TypeModelInterface
  | TypeModelClass
  | TypeModelFunction
  | TypeModelEnumLiteral
  | TypeModelAlias;

export type TypeModel =
  | TypeModelExport
  | TypeModelString
  | TypeMemberModel
  | TypeModelProp
  | TypeModelBoolean
  | TypeModelNumber
  | TypeModelUnidentified
  | TypeModelAny
  | TypeModelUnknown
  | TypeModelBigInt
  | TypeModelLiteral
  | TypeModelBigIntLiteral
  | TypeModelESSymbol
  | TypeModelUniqueESSymbol
  | TypeModelVoid
  | TypeModelUndefined
  | TypeModelNull
  | TypeModelNever
  | TypeModelTypeParameter
  | TypeModelFunctionParameter
  | TypeModelUnion
  | TypeModelIntersection
  | TypeModelIndex
  | TypeModelAccess
  | TypeModelIndexedAccess
  | TypeModelConditional
  | TypeModelSubstitution
  | TypeModelNonPrimitive
  | TypeModelTupleProp
  | TypeModelTuple
  | TypeModelConstructor
  | TypeModelRef
  | TypeModelPrefix
  | TypeModelImport
  | TypeModelPredicate
  | TypeModelMapped
  | TypeModelInfer
  | TypeModelNew
  | TypeModelGetAccessor
  | TypeModelSetAccessor
  | TypeModelParenthesis
  | TypeModelRest
  | TypeModelTemplate;
